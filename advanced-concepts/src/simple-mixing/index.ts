import { Cat } from './cat';
import { petMixing } from './pet.mixing';
import { RoboCat } from './robocat';

const myCat = new Cat('Mittens', 2);
myCat.printInfo();

const myCat2 = new Cat('Mittens', 2);
Object.assign(myCat2, petMixing);

myCat2.printInfo();

const myRoboCat = new RoboCat('RoboMittens', 2);
myRoboCat.printInfo();
myRoboCat.recharge();
