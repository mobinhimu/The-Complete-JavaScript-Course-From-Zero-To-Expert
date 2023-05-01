// Numbers

console.log("50");
console.log(Number.parseFloat(520.565));
console.log(Number.parseInt(520.565));
console.log(Number.isFinite(+"65456"));
console.log(Number.isInteger(Number.parseInt(4564.456)));
// console.log(Number.isNaN(!"asdjfkl"));
console.log(Number.isNaN("px6px515px"));

// Numeric Separator
console.log(19_564);

// Operations with date

const date1 = new Date(2030, 10, 28);
const date2 = new Date(2030, 10, 24);

const dayPass = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
const currDay = dayPass(new Date(), date1);
console.log(currDay);
