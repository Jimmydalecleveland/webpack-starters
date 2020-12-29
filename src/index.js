// Used for method polyfills, and replaces @babel/polyfill
// Note: the .babelrc configuration options are stripping out
// any unused polyfills through the `"useBuiltIns": "usage"` property
// import "core-js";
// ABOVE CURRENTLY DOES NOT WORK WITH BABEL CONFIG

// Polyfill for .values method of Object
// import "core-js/modules/es.object.values";
// import "core-js/modules/es.promise";
// This is required for generators, including async/await
// It seems that async/await is not built on generators,
// but babel transpiles is to one for backwards support.
// import "regenerator-runtime/runtime";

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

// async/await example from MDN
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

// This will throw an error without the regenerator-runtime import
async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
