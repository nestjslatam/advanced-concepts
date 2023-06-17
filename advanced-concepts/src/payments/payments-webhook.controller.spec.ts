import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsWebhookController } from './payments-webhook.controller';

describe('PaymentsWebhookController', () => {
  let controller: PaymentsWebhookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsWebhookController],
    }).compile();

    controller = module.get<PaymentsWebhookController>(PaymentsWebhookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
