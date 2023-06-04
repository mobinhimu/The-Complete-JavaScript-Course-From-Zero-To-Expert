// Named Exports
// ----------------------------------

console.log("Working With Name Export");
const name = "Himon";
const age = 18;
const hobby = [];

// export const name = "Mobin";
// export const age = 18;
// export const hobby = [];

// export  greet = function (name) {
//   hobby.push(name);
//   const greetMessage = `Hey , ${name} How Are You Dear`;
//   console.log(greetMessage);
// };

export default function (name) {
  hobby.push(name);
  const greetMessage = `Hey , ${name} How Are You Dear`;
  console.log(greetMessage);
}

export { name, age, hobby as userHobby };
// Default export
// ---------------------------
