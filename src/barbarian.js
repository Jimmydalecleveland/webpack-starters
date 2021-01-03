// Terrible, imports all of "lodash"
// import { get } from "lodash";

// Better, but still not great.
// import get from "lodash/get";

// Same as above
// import { get } from "lodash-es";

// Optimal, especially when only using a few lodash methods
import get from "lodash.get";

const obj = {
  one: {
    two: {
      three: "woof",
    },
  },
};

const getWoof = get(obj, "one.two.three");
console.log("getWoof ->", getWoof);

export const barbarian = "Hjulmar";
