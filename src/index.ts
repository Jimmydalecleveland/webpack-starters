// Simple example showing that TS is compiling properly.
const dig: number = 132;
console.log(dig);

const obj = {
  one: {
    two: {
      three: "awoooo",
    },
  },
};

// The use of `any` is purely as an example here and should be avoided in real projects
function woof(noise: any) {
  // This should not throw errors but will return inconsistent results
  // depending on input. e.g. `0` returns `0`, not `undefined`, even though it's falsey
  console.log(
    "I should make a noise: ",
    noise && noise.one && noise.one.two && noise.one.two.three
  );
  // conditional chaining: outputs `undefined` if not given proper input
  console.log("I should make a noise: ", noise?.one?.two?.three);
}

woof(0);
console.log("---------");
woof(obj);
