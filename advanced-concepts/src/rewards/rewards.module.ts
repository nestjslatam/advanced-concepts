import { Module } from '@nestjs/common';
import { RewardsService } from './rewards.service';

@Module({
  providers: [RewardsService],
})
export class RewardsModule {}
