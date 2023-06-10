import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci.controller';
import { FibonnaciWorkerHost } from './fibonacci.host';

@Module({
  controllers: [FibonacciController],
  providers: [FibonnaciWorkerHost],
})
export class FibonacciModule {}
