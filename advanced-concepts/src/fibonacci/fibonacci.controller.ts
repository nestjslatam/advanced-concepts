import { Controller, Get, Query } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
  @Get()
  fibonnaci(@Query('n') n = 10) {
    if (n < 2) return n;

    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }
}
