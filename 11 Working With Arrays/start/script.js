// // 142 Simple Array Methods
// // slice [don't muted the original array !]
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2, 4));
// console.log(arr.slice());
// console.log(arr.slice(3, 1));
// console.log([...arr]);
// console.log(arr.slice(-4, -3));
// // splice  [be muted]
// console.log(arr.splice(2, 2));
// console.log(arr);

// // [be muted]
// arr = ["f", "g", "h", "i", "j"];
// console.log(arr.reverse());
// console.log(arr);

// // concat [don't be muted]
// let arr2 = ["a", "b", "c", "d", "e"];
// console.log(arr2.concat(arr.reverse()));
// console.log(arr);

// // join
// console.log([...arr, ...arr2].join(" - "));

// // at method [not muted]
// arr2 = ["a", "b", "c", "d", "e"];
// console.log(arr2[0]);
// console.log(arr2[arr.length - 1]);
// console.log(arr2.slice(-1)[0]);
// console.log(arr2.at(-1));
// console.log(arr2.at(2));
// console.log(arr2);

// // forEach Method

// const map = new Map([
//   ["Name", "Mobin"],
//   ["Email", "mobin@gamil.com"],
//   ["DOB", "10-17-2004"],
// ]);
// map.forEach((value, key, map) => {
//   console.log(`${key} : ${value}`);
// });

// const set = new Set(["Mobin", "mobin@gamil.com", "10-17-2004"]);
// console.log(set);

//

// Data
const account1 = {
  owner: "Rayhan Uddin Mobin",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Borhand Uddin Himon",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Rafi Al Mahmud",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Tanvir Hasan Zisan",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// const account5 = {
//   owner: "Takiya Sharmin Tonni",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 5555,
// };
const accounts = [account1, account2, account3, account4];

(function userName(accounts) {
  accounts.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
})(accounts);

// console.log(accounts);

// filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const withdrawals = movements.filter((withd) => withd < 0);
// console.log(withdrawals);
// for of
const withdrawalsFor = [];
for (const withd of movements) {
  withdrawalsFor.push(withd < 0);
}
// console.log(movements);

// const max = movements.reduce((acc, curr) => {
//   if (acc > curr) return acc;
//   else return curr;
// }, movements[0]);
// console.log(max);

// const min = movements.reduce((acc, i) => {
//   if (acc > i) {
//     return i;
//   } else {
//     return acc;
//   }
// });
// console.log(min);

// const takiya = accounts.find(
//   (account) => account.owner === "Takiya Sharmin Tonni"
// );
// console.log(takiya);

// for (const takiya of accounts) {
//   takiya.owner === "Rayhan Uddin Mobin" ? console.log(takiya) : false;
// }

// let moneyUsers = 0;
// const allUsersMoney = accounts
//   .map((money) => money.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allUsersMoney);

// const allMovements = accounts
//   .flatMap((mov) => mov.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(allMovements);

const nestedArr = [
  [1, 2, 3, 4, 5],
  [6, 7, [8, [9, [10]]]],
];
// const odd = nestedArr.flat(5).reduce((acc, nes) => acc + nes);
// console.log(odd);

// Nina's answer is great. It explains what you did wrong and how to fix it.

// But if you're looking for a simpler recursive version, you might try something like this:

// const deepArr = [1, [2], 3, [4, 5, [6, 7], 8, [[[[9, 10]]]]]];
// const countArrays = (xs) =>
//   Array.isArray(xs) ? 1 + xs.map(countArrays).reduce((a, b) => a + b, 0) : 0;

// const arrDeepNess = countArrays(deepArr);

// function oddNumberOfALlArray(arrDeepNess, arr) {
//   const result = arr.flat(arrDeepNess).reduce((acc, i) => acc + i);
//   return result;
// }
// console.log(oddNumberOfALlArray(arrDeepNess, deepArr));

// const hundredDice = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );

// console.log(hundredDice);

// Bank Deposit Sum

const bankDepositSum = accounts
  .flatMap((account) => account.movements)
  .filter((dep) => dep > 0)
  .reduce((acc, cur) => acc + cur);
console.log(bankDepositSum);

// Bank Deposit At Least 1000
// const oneThousand = accounts
//   .flatMap((account) => account.movements)
//   .filter((dep) => dep >= 1000).length;
// console.log(oneThousand);

// const oneThousand = accounts
//   .flatMap((account) => account.movements)
//   .reduce((acc, i, value) => acc);
// console.log(oneThousand);

//  3

// const [deposit, withdraw] = accounts
//   .flatMap((account) => account.movements)
//   .reduce(
//     (sums, curr) => {
//       curr > 0 ? (sums[0] += curr) : (sums[1] += curr);
//       return sums;
//     },
//     [0, 0]
//   );
// console.log(deposit, withdraw);

// 4 title case

const myName = "rayhan uddin mobin is a good boy";

const titleCase = function (str) {
  const output = str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      word.length <= 1
        ? word[0].toLowerCase()
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return output;
};
console.log(titleCase(myName));
console.log(
  titleCase(
    "hello my name is mobin , im a good boy , i have a girlfriend . i have no pain that. cz she is also a good girl. her name is takiya"
  )
);
