import { Module } from '@nestjs/common';
import { DataSourceService } from './data-source.service';

@Module({
  providers: [DataSourceService],
  exports: [DataSourceService],
})
export class DataSourceModule {}
