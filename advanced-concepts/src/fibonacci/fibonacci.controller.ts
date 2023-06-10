import { Controller, Get, Query } from '@nestjs/common';
import { FibonnaciWorkerHost } from './fibonacci.host';
import piscina from 'piscina';

@Controller('fibonacci')
export class FibonacciController {
  fibonacciWorker = new piscina.Piscina({
    filename: require.resolve('./fibonacci.worker.js'),
  });

  constructor(private readonly fibonacciWorkerHost: FibonnaciWorkerHost) {}

  @Get()
  fibonnaci(@Query('n') n = 10) {
    // return this.fibonacciWorkerHost.run(n);
    return this.fibonacciWorker.runTask({ n });
  }
}
