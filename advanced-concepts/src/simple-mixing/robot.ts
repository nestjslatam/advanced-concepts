export class Robot {
  constructor(public name: string) {}
  recharge() {
    console.log(`${this.name} says: baterry full charged!`);
  }
}
