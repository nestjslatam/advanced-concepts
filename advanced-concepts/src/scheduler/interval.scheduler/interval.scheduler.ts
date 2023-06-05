import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { DiscoveryService, MetadataScanner, Reflector } from '@nestjs/core';
import { INTERVAL_HOST_KEY } from '../decorators/interval-host.decorator';
import { INTERVAL_KEY } from '../decorators/interval.decorator';

@Injectable()
export class IntervalScheduler
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private readonly intervals: NodeJS.Timer[] = [];

  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly reflector: Reflector,
    private readonly metadataScanner: MetadataScanner,
  ) {}

  onApplicationShutdown(signal?: string) {
    this.intervals.forEach((intervalRef) => clearInterval(intervalRef));
  }

  onApplicationBootstrap() {
    const providers = this.discoveryService.getProviders();

    providers.forEach((wrapper) => {
      const { instance } = wrapper;

      const prototype = instance && Object.getPrototypeOf(instance);

      if (!instance || !prototype) return;

      const isIntervalHost =
        this.reflector.get<boolean>(INTERVAL_HOST_KEY, instance.constructor) ??
        false;

      if (!isIntervalHost) return;

      const methodKeys = this.metadataScanner.getAllMethodNames(prototype);

      methodKeys.forEach((methodKey) => {
        const interval = this.reflector.get<number>(
          INTERVAL_KEY,
          instance[methodKey],
        );

        if (!interval) return;

        const intervalRef = setInterval(() => instance[methodKey](), interval);
        this.intervals.push(intervalRef);
      });

      console.log(wrapper.token);
    });
  }
}
