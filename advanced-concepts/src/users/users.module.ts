import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DataSourceModule } from 'src/data-source/data-source.module';

@Module({
  imports: [DataSourceModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
