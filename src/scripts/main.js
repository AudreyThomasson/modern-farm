console.log("Welcome to the main module")

import { CreatePlan } from './scripts/plan.js';

const yearlyPlan = CreatePlan();
console.log(yearlyPlan);