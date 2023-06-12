import { Pet } from './pet';

export class Cat extends Pet {
  constructor(name: string, age: number) {
    super(name, age);
  }
}
