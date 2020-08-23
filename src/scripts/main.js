console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from './seeds/potato.js';


const yearlyPlan = createPlan();
console.log(yearlyPlan);


const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

const potatoSeed = createPotato();
console.log(potatoSeed);