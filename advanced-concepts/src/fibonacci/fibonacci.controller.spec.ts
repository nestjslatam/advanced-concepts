import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciController } from './fibonacci.controller';

describe('FibonacciController', () => {
  let controller: FibonacciController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FibonacciController],
    }).compile();

    controller = module.get<FibonacciController>(FibonacciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
