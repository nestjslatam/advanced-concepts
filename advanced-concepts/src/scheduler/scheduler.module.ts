import { Module } from '@nestjs/common';
import { IntervalScheduler } from './interval.scheduler/interval.scheduler';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [DiscoveryModule],
  providers: [IntervalScheduler],
})
export class SchedulerModule {}
