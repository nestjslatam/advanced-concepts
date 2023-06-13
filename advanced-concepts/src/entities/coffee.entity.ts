import { WithUuid } from 'src/common/mixins/with-uuid.mixin/with-uuid.mixin';

export class Coffee {
  constructor(public name: string) {}
}

const CoffeeWithUuid = WithUuid(Coffee);

const myCofee = new CoffeeWithUuid('Latte');
myCofee.regenerateUuid();

console.log(myCofee.uuid);
