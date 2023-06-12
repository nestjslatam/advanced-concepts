export const PetFactoryMixin = (superclass: any) =>
  class extends superclass {
    printInfo() {
      console.log(`${this.name} is ${this.age} years old`);
    }
  };
