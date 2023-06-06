import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci.controller';

@Module({
  controllers: [FibonacciController]
})
export class FibonacciModule {}
