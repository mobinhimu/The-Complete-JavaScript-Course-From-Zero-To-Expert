"use strict";
// //  Default Parameters
// const arr = [];
// function defaultPha(name = "Mobin", age = 18, price = 10 * age) {
//   const pha = {
//     name,
//     age,
//     price,
//   };
//   console.log(pha);
//   arr.push(pha);
// }
// defaultPha("Mobin", 18, 100);
// defaultPha("Himon", 19, 124);
// defaultPha("Himon", 19);
// defaultPha("Himon", undefined, 20);
// console.log(arr);

// // 129 How Passing Arguments Works_ Value vs. Reference
// const me = {
//   name: "Mobin",
//   color: "Black",
// };
// const age = 40;
// function objectPass(person, age) {
//   (age = 45), (person.name = "Mr. " + person.name);
//   console.log(person, age);
// }
// objectPass(me, age);
// console.log(me, age);

// // 131 Functions Accepting Callback Functions
// function oneWordLower(str) {
//   return str.split(" ").join("").toLowerCase();
// }

// function lastUpperCase(str) {
//   const arr = str.split(" ");
//   arr.unshift(arr[0].toUpperCase());
//   arr.splice(1, 1);
//   arr.push(arr[arr.length - 1].toUpperCase());
//   console.log();
//   arr.splice(arr.length - 2, 1);
//   return arr.join(" ");
// }

// function updater(str, fun) {
//   console.log(`Here Is You String : ${str}`);
//   console.log(`Here Is Your Function : ${fun(str)}`);
//   console.log(`Function Name  : ${fun.name}`);
// }

// updater("Hello Bangladesh", oneWordLower);
// updater("Hello Bangladesh Two", lastUpperCase);

// // 132 Functions Returning Functions

// const greet = (greeting) => (name) => console.log(`${greeting} ! ${name}`);

// const greetMsg = greet("Hello");
// greet("Hello");

// greetMsg("Mobin");

// greet("Hello Bangladesh")("Himon");

// 133 The call and apply Methods
// const mobin = {
//   name: "Mobin",
//   age: 25,
//   girlFriend: true,
//   bio(gf = 0) {
//     gf <= 0 ? (this.girlFriend = false) || (gf = "No") : this.girlFriend;
//     console.log(
//       `${this.name} is a ${
//         this.girlFriend ? "Bad" : "Good"
//       } Boy. Because He Has ${gf} girlfriend${
//         gf > 1 ? "'s" : ""
//       }, But , He Is Now ${this.age}  `
//     );
//   },
// };

// console.log(mobin);
// mobin.bio(2);
// mobin.bio();
// mobin.bio(1);
// mobin.bio(-2);
// mobin.bio(5);
// mobin.bio(5);
// mobin.bio(-52);

// const himon = {
//   name: "Himon",
//   age: 22,
//   girlFriend: true,
// };
// console.log(himon);
// const bio = mobin.bio;
// // call
// bio.call(himon, 2);
// bio.call(himon, 3);
// // apply
// const himonData1 = [24];
// const himonData2 = [2];
// bio.apply(himon, himonData1);
// bio.apply(himon, himonData2);
// call mehtond to apply convert 🎇
// bio.call(himon, ...himonData1);
// bio.call(himon, ...himonData2);

// 134 The bind Method
// const addTAX = (rate) => {
//   return function (value) {
//     return value + value * rate;
//   };
// };

const addTAXRate = (rate) => (value) => value + value * rate;
// console.log(addTAXRate(0.23)(100));
// console.log(addTAXRate(0.23)(23));
// console.log(addTAXRate(0.23)(25));

// object bind method
const mobin = {
  name: "Mobin",
  age: 25,
  girlFriend: true,
  bio(gf = 0) {
    gf <= 0 ? (this.girlFriend = false) || (gf = "No") : this.girlFriend;
    console.log(
      `${this.name} is a ${
        this.girlFriend ? "Bad" : "Good"
      } Boy. Because He Has ${gf} girlfriend${
        gf > 1 ? "'s" : ""
      }, But He Is Now ${this.age}  `
    );
  },
};

const zishan = {
  name: "Zishan",
  age: 18,
  girlFriend: true,
};
// mobin.bio.call(zishan, 52);
// mobin.bio.apply(zishan, [5643156]);
// const gfCount = [10];
// mobin.bio.call(zishan, 10);

// -------------------

// Bind Method
// const gf25 = mobin.bio.bind(zishan, 25);
// gf25();

zishan.neGfNow = 10;
zishan.neGf = function () {
  console.log(this);
  this.neGfNow++;
  console.log(this.neGfNow);
};
console.log(zishan);

document
  .querySelector("button")
  .addEventListener("click", zishan.neGf.bind(zishan));

// const addTAX = (value, rate) => value + value * rate;

// const addVat = addTAX.bind(null, 200);
// console.log(addVat(0.1));

const addTAX = (value) => (rate) => console.log(value + value * rate);
addTAX(200)(0.1);
addTAX(200)(0.23);

(function myNameImmediately() {
  console.log("Mobin Himu");
})();

(async function () {
  const d = await Promise.resolve("Hello World");
  console.log(d);
})();
