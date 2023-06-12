import { PetFactoryMixin } from './pet-factory.mixing';
import { Robot } from './robot';

export class RoboCat extends PetFactoryMixin(Robot) {
  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }
}
