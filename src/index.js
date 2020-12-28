import getClasses from "./getClasses";

getClasses();

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
};
console.log("ES7 Object spread example: ", elvenGauntletsRecipe);

// ES8 Object.values example
console.log("ES8 Object.values example", Object.values(elvenGauntletsRecipe));
