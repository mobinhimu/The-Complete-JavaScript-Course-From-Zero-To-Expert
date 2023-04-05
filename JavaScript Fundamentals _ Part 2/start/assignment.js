// LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its
//     capital city is ${capitalCity}`;
// }
// const bangladesh = describeCountry("Bangladesh", 169, "Dhaka");
// const india = describeCountry("India", 1.5, "New Delhi");
// const iran = describeCountry("Iran", 43, "Baghdad");
// console.log(bangladesh);
// console.log(india);
// console.log(iran);
// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return `${(population / 7900) * 100}%`;
}
const bangladeshPopulation = percentageOfWorld1(169);
const pakistanPopulation = percentageOfWorld1(231);
const iranPopulation = percentageOfWorld1(43);
console.log(bangladeshPopulation);
console.log(pakistanPopulation);
console.log(iranPopulation);

// const percentageOfWorld2 = function (population) {
//   return `${(population / 7900) * 100}%`;
// };
// const bangladeshPopulation2 = percentageOfWorld2(169);
// const pakistanPopulation2 = percentageOfWorld2(213);
// const iranPopulation2 = percentageOfWorld2(43);
// console.log(bangladeshPopulation2, pakistanPopulation2, iranPopulation2);

// LECTURE: Arrow Functions
// const percentageOfWorld3 = (population) => `${(population / 7900) * 100}% `;
// const bangladeshPopulation3 = percentageOfWorld3(169);
// const pakistanPopulation3 = percentageOfWorld3(213);
// const iranPopulation3 = percentageOfWorld3(43);
// console.log(bangladeshPopulation3, pakistanPopulation3, iranPopulation3);

// LECTURE: Functions Calling Other Functions

function describePopulation(country, population) {
  return `${country} has ${population} million people,
    which is about ${percentageOfWorld1(population)}% of the world`;
}

const bangladesh = describePopulation("Bangladesh", 169);
const china = describePopulation("China", 1441);
console.log(bangladesh);
console.log(china);

// LECTURE: Introduction to Arrays
const bangladeshP = 169;
const pakistanP = 231;
const iranP = 87;
const japanP = 125;

const populations = [bangladeshP, pakistanP, iranP, japanP];
console.log(populations);
// const fourEle = populations
//   ? populations.length === 4
//   : populations.length - 1 !== 4;
// console.log(fourEle);

if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [
  percentageOfWorld1(bangladeshP),
  percentageOfWorld1(pakistanP),
  percentageOfWorld1(iranP),
  percentageOfWorld1(japanP),
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbors = ["Bangladesh", "India", "Pakistan"];
neighbors.push("Utopia");
neighbors.pop();
console.log(neighbors);
// const germanyEuo = !neighbors.includes("Germany")
//   ? "Probably not a central European country :D"
//   : "This is central European country :D";
// console.log(germanyEuo);

if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbors[neighbors.indexOf("India")] = "Republic Of India!";
console.log(neighbors);

// Object
const mobin = {
  name: "Mobin",
  birthYear: 2004,
  isDrivingLicense: false,
  userInfo: function () {
    return `${this.name} is ${2023 - this.birthYear} year old, and he has ${
      this.isDrivingLicense ? "a" : "no"
    } driving license !`;
  },
};
console.log(mobin.userInfo());

// LECTURE: Introduction to Objects
const myCountry = {
  country: "Bangladesh",
  capital: "Dhaka",
  language: "Bangla",
  population: 169,
  neighbors: ["India", "Pakistan", "Afghanistan"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length}  neighboring countries
    and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    return (this.isIsland = !this.neighbors.length ? true : false);
  },
};
// LECTURE: Dot vs. Bracket Notation
myCountry.population += 2;
myCountry["population"] += 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries
and a capital called ${myCountry.capital}`);

// LECTURE: Object Methods
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// LECTURE: Iteration: The for Loop
for (let index = 1; index <= 50; index++) {
  console.log(`Voter number ${index} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
// const percentages2 = [];
// for (let index = 0; index < populations.length; index++) {
//   percentages2[index] = percentageOfWorld1(populations[index]);
// }
// console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let index = 0; index < listOfNeighbors.length; index++) {
  for (let country = 0; country < listOfNeighbors[index].length; country++) {
    console.log(listOfNeighbors[index][country]);
  }
}
// LECTURE: The while Loop

// LECTURE: Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let index = 0; index < populations.length; index++) {
  percentages2[index] = percentageOfWorld1(populations[index]);
}
console.log(percentages2);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3[i] = percentageOfWorld1(populations[i]);
  i++;
}
console.log(percentages3);
