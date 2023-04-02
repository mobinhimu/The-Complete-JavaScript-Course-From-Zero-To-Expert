// LECTURE: Values and Variables
let country = "Bangladesh";
let continent = "Asia";
let population = 169;
console.log(country);
console.log(continent);
console.log(population);
// LECTURE: Data Types
let isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
// LECTURE: let, const and var
language = "Bangla";
console.log(language);
// LECTURE: Basic Operators
const halpPopulation = "Ban " + population / 2;
console.log(halpPopulation);
console.log(++population);
const myCountryPopulation = 169 - 6;
console.log(myCountryPopulation);
const avgPopulation = 33;
console.log(myCountryPopulation - 33);
let description =
  "Portugal is in Europe, and its 11 million \n\
people speak portuguese";
console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million \n\
people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population <= 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${population - 33} million below average`
  );
}

// LECTURE: Type Conversion and Coercion
console.log("9" - "5"); // predict => 4
console.log("19" - "13" + "17"); // predict => 23 😿 will be 617
console.log("19" - "13" + 17); // predict => 23
console.log("123" < 57); // predict => false
console.log(5 + 6 + "4" + 9 - 4 - 2); // predict => 1143

// LECTURE: Equality Operators: == vs. ===
// let numNeighbors = prompt(
//   "How many neighbour countries does your country \n\
// have?"
// );

// if (Number(numNeighbors) === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// LECTURE: Logical Operators
if ((!isIsland && language === "English") || population < 50) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

// LECTURE: The Conditional (Ternary) Operator
population = 130;
let bdPopulation =
  population >= 33
    ? ` ${country} 's population is above average`
    : ` ${country} 's population is below average`;
console.log(bdPopulation);
