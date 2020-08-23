import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"





export const plantSeeds = (plantingPlan) => {
    for (const arrayOfPlants of plantingPlan) {
        for (const plant of arrayOfPlants) {

    if (plant === "asparagus") {
        const seed = createAsparagus()
        addPlant(seed)
    } else if (plant === "corn") {
        const seed = createCorn()
        addPlant(seed[0]),
        addPlant(seed[1])
    } else if (plant === "potato") {
        const seed = createPotato()
        addPlant(seed)
    } else if (plant === "soybean") {
        const seed = createSoybean()
        addPlant(seed)
    } else if (plant === "sunflower") {
        const seed = createSunflower()
        addPlant(seed)
    } else if (plant === "wheat") {
        const seed = createWheat()
        addPlant(seed)   
    }
   }
  }
}