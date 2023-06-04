// "strict mode";
// Named export
// ---------------------------

// import { userHobby, age as userAge, name, greet } from "./shoppingCart.js";

// console.log(userHobby, userAge, name);
// greet(name);

// import * as ShoppingCart from "./shoppingCart.js";

// console.log(ShoppingCart.age, ShoppingCart.name, ShoppingCart.userHobby);

// ShoppingCart.greet(ShoppingCart.name);

// Default export
// ---------------------------

// import greet, { name, age, userHobby } from "./shoppingCart.js";

// greet(name);
// greet("Himon");
// greet("Kona");
// console.log(userHobby);

// console.log("Hello Bangladesh First");
// (async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// })();

// const res = await fetch("https://jsonplaceholder.typicode.com/todos");
// const data = await res.json();
// console.log(data);

// console.log("Hello Bangladesh");

// const arr = [];

// for (let i = 1; i <= 10; i++) {
//   i % 2 === 0 ? arr.push(i) : null;
// }
// console.log(arr);

// using npm
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import "core-js/stable";

const himonBio = {
  name: "Himon",
  age: 28,
  hobby: ["coding", "Playing PUBG", "sleeping"],
};

// const mobinBio = { ...himonBio };
// const mobinBio = Object.assign({}, himonBio);
const mobinBio = cloneDeep(himonBio);
// console.log(himonBio);
// console.log(mobinBio);

mobinBio.name = "Mobin";
mobinBio.hobby.push("Loving Her GF");

console.log(himonBio);
console.log(mobinBio);

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((elementOfArray) => console.log(elementOfArray));
arr.find((el) => el === 5);
