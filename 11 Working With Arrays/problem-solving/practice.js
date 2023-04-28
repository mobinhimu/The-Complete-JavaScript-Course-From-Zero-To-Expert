// // Coding Challenge #1

// const checkDogs = function (dogsJulia, dogsKate) {
//   //   this is my work
//   const removeCat = [...dogsJulia];

//   //   this is jonas work
//   //   const removeCat = dogsJulia.slice();
//   removeCat.splice(0, 1);
//   removeCat.splice(-2);

//   //   this is my work
//   const corrected = [...removeCat, ...dogsKate];

//   //   this is jonas work
//   //   const corrected = removeCat.concat(dogsKate);

//   corrected.forEach((age, dog) => {
//     if (age >= 3) {
//       console.log(`Dog number ${dog + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${dog + 1} is still a puppy 🐶`);
//     }
//   });

//   console.log(corrected);
// };

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// // Coding Challenge #2

// const calcAverageHumanAge = function (dogsAge) {
//   const shallowDogsAge = dogsAge.slice();

//   const humanAge = shallowDogsAge.map((dogAge, i) => {
//     if (dogAge <= 2) {
//       return 2 * dogAge;
//     } else {
//       return 16 + dogAge * 4;
//     }
//   });

//   const adultHuman = humanAge.filter((adult) => adult >= 10);
//   let len = adultHuman.length;

//   const avgHumanAge = adultHuman.reduce((acc, i) => acc + i, 0) / len;
//   return avgHumanAge;
// };

// // console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// // console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach((dog) => {
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
// });

// console.log(dogs);

// const sarahDogsInformation = dogs.find((dog) => dog.owners.includes("Sarah"));
// if (sarahDogsInformation.curFood > sarahDogsInformation.recommendedFood) {
//   console.log("it's eating too much");
// } else {
//   console.log("it's eating too little");
// }

// const ownersEatTooMuch = dogs.filter(
//   (dog) => dog.curFood > dog.recommendedFood
// );

// const ownersEatTooLittle = [];

// console.log(ownersEatTooMuch);

//  After Completing My Eid ===================>

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1 .
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2
const sarahDogs = dogs.filter((dog) => dog.owners.includes("Sarah"));
sarahDogs.forEach((dog) =>
  dog.curFood > dog.recommendedFood
    ? console.log("Eating too much")
    : console.log("Eating too little")
);

// 3 .
const ownersEatTooMuch = dogs.filter(
  (dog) => dog.curFood > dog.recommendedFood
);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(
  (dog) => dog.curFood < dog.recommendedFood
);
console.log(ownersEatTooLittle);

// 4 .
const ownersEatingTooMuch = ownersEatTooMuch
  .map((owner) => owner.owners)
  .flat(1)
  .join(" and ");
console.log(`${ownersEatingTooMuch}'s dogs eat too much!`);

const ownersEatingTooLittle = ownersEatTooLittle
  .flatMap((owner) => owner.owners)
  .join(" and ");

console.log(`${ownersEatingTooLittle}'s dogs eat too little!`);

// 5 .
const exactlyAmountOfFood = dogs.some(
  (exactlyAmount) => exactlyAmount.curFood === exactlyAmount.recommendedFood
);

console.log(exactlyAmountOfFood);
// 6 .

const checkEatingOkay = function (dog) {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
};

console.log(dogs.some((dog) => checkEatingOkay(dog)));

// 7.
const okayAmountArr = dogs.filter((dog) => checkEatingOkay(dog));

console.log(okayAmountArr);

// const shallowCopyDogs = dogs.slice();
const shallowCopyDogs = [...dogs];
shallowCopyDogs.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(shallowCopyDogs);
