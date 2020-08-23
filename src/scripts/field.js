const growingField = [];

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === false) {
        console.log("not the corn array, push this one to the field");
        growingField.push(seedObj);
    } else {
        console.log("it's the corn array")
        const seeds = seedObj.slice();
    //     if it is the corn Array, then it needs to be sliced first into objects before 
    //     adding to the growingField
        for (const seed in seeds) {
            const moveCorn = seeds[seed];
            growingField.push(moveCorn);
        }
    }
}

export const usePlants = () => {
    return growingField
}