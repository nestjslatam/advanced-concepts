import { RewardsService } from './../rewards/rewards.service';
import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class CoffeesService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async create(createCoffeeDto: CreateCoffeeDto) {
    const rewardsModuleRef = await this.lazyModuleLoader.load(() =>
      import('../rewards/rewards.module').then((m) => m.RewardsModule),
    );

    console.time();

    const { RewardsService } = await import('../rewards/rewards.service');

    const rewardsService = rewardsModuleRef.get<RewardsService>(RewardsService);

    rewardsService.grantTo();

    console.timeEnd();

    return 'This action adds a new coffee';
  }

  findAll() {
    return `This action returns all coffees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
