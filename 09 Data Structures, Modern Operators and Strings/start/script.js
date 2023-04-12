"use strict";
// Optional Chaining (_.) ======

const me = {
  name: "Mobin",
  age: 18,
  //   hello: "Hello Bangladesh",
  bio() {
    return `${this.name} is ${this.age} year old !`;
  },
};

console.log(me.bio?.());
console.log(me?.greet?.message());

// 114 Looping Objects_ Object Keys, Values, and Entries

const keys = Object.keys(me);
const values = Object.values(me);
const entries = Object.entries(me);
console.log(keys.length);
console.log(values);
console.log(entries);
// for (const [name, mobin] of entries) {
//   console.log(name, mobin);
// }
// 116 Sets
const friends = new Set(["Mobin", "Robin", "ashraful"]);
// console.log(friends.add("Nafiz"));
// console.log(friends.has("Robin"));
// console.log(friends.size);
// console.log(friends);
// 117 Maps_ Fundamentals

const rest = new Map();

rest.set("Name", "Mobin");
rest.set("Age", 27);
rest.set("Branch", "Bangladesh").set("Branch2", "India");
rest.delete("Age");
const arr = ["hello"];
rest.set(arr, "Hello World");
console.log(rest.get(arr));
console.log(rest);
