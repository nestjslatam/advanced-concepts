import { OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { join } from 'path';
import { Observable, filter, firstValueFrom, fromEvent, map } from 'rxjs';

export class FibonnaciWorkerHost
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private worker: Worker;
  private message: Observable<{ id: string; result: number }>;

  onApplicationShutdown(signal?: string) {
    this.worker.terminate();
  }

  onApplicationBootstrap() {
    // this.worker = new Worker(join(__dirname, 'fibonacci.worker.js'));
    // this.message = fromEvent(this.worker, 'message') as unknown as Observable<{
    //   id: string;
    //   result: number;
    // }>;
  }

  run(n: number) {
    const uid = randomUUID();

    this.worker.postMessage({ n, id: uid });

    return firstValueFrom(
      this.message.pipe(
        filter(({ id }) => id === uid),
        map(({ result }) => result),
      ),
    );
  }
}
