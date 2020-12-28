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
// Note: Will not transpile without babel polyfills because it is a new method
console.log("ES8 Object.values example", Object.values(elvenGauntletsRecipe));

// Event queue block scoping example
// Check babel output to see that `let` isn't simply switched to `var`
// because the code would not have the same output.
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}
