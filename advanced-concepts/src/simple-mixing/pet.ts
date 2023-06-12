export class Pet {
  constructor(public name: string, public age: number) {}

  printInfo() {
    console.log(`{${this.name}´ is ${this.age} years old`);
  }
}
