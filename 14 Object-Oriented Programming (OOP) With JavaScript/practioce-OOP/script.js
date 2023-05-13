// "use strict";
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //this is to much bad
//   //   this.calcAge = function () {
//   //     return this.firstName - 2037;
//   //   };
// };
// Person.hey = function () {
//   return `Hey `;
// };

// // console.log(Person.hey());
// // const mobin = new Person("Mobin", 2004);
// const kona = new Person("Kona", 2002);
// const himon = new Person("Himon", 2000);

// // const name = "Hello";
// // console.log(mobin instanceof Person);
// // console.log(name instanceof Person);

// Person.prototype.calcAge = function () {
//   // console.log(2037 - this.birthYear);
// };

// // mobin.calcAge();
// // kona.calcAge();
// // himon.calcAge();

// // console.log(mobin.__proto__);
// // console.log(Person.prototype);
// // console.log(mobin.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(mobin));
// // console.log(Person.prototype.isPrototypeOf(himon));
// // console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.spices = "Homo Sapiens";
// // console.log(mobin.spices, kona.spices);

// // console.log(mobin.hasOwnProperty("birthYear"));
// // console.log(mobin.hasOwnProperty("spices"));

// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // instance method
//   get greeting() {
//     return `${this.firstName} is a bad boy`;
//   }

//   // set fullName(name) {
//   //   console.log(name);
//   //   if (name.includes(" ")) this._fullName = name;
//   //   else alert(`${name} is not valid`);
//   // }

//   // get fullName() {
//   //   return this._fullName;
//   // }

//   // static method
//   static hey() {
//     // console.log(this);
//     // console.log(`Hello Person`);
//   }
// }
// PersonCL.hey();

// const mobin = new PersonCL("Mobin Himon", 2007);
// const sazid = new PersonCL("Sazid", 2007);
// // console.log(mobin);
// // console.log(sazid);

// // console.log(mobin.__proto__ === Person.prototype);
// // console.log(mobin.__proto__ === PersonCL.prototype);
// // console.log(mobin.greeting);

// const person = {
//   name: "Mobin",
//   movements: [10, 20, 45, 0, 89, 255],
//   birthYear: 2004,

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
// };

// // console.log(person.latest);
// // inheritance
// const PersonProto = {
//   calcAge() {
//     return `${this.firstName} is  ${2037 - this.birthYear} years old`;
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const mobin1 = Object.create(PersonProto);
// mobin1.birthYear = 2004;
// mobin1.firstName = "Mobin";
// // console.log(mobin1);
// // console.log(mobin1.calcAge());

// const mihad = Object.create(PersonProto);
// mihad.init("Mihad", 2016);
// // console.log(mihad.calcAge());

// //

// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   clcAge() {
//     return 2037 - this.birthYear;
//   }
//   // instance method
//   get greeting() {
//     return `${this.fullName} is a bad boy`;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not valid`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // static method
//   static hey() {
//     console.log(this);
//     console.log(`Hello Person`);
//   }
// }

// // const mobin = new PersonCL("Mobin Himu", 2004);
// // console.log(mobin.greeting);

// class StudentCl extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     return `${this.fullName} is ${
//       2037 - this.birthYear
//     } years old . he is the student of ${this.course}`;
//   }
// }

// const himon = new StudentCl("Himon miah", 2009, "Computer Science");
// console.log(himon);
// console.log(himon.introduce());
// console.log(himon.clcAge());
// console.log(himon.greeting);

// const PersonProto = {
//   calcAge() {
//     return `${this.firstName} is  ${2037 - this.birthYear} years old`;
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My Name is ${this.firstName} . and i study in ${this.course} `);
// };

// const mobin = Object.create(StudentProto);

// mobin.init("Mobin", 2007, "Computer Science");
// console.log(mobin);
// mobin.introduce();
// console.log(mobin.calcAge());

// encapsulation -> class fields -> truly private class and methods
/*
  1. public fields 
  2. public methods 
  3. private methods 
  4. private methods 
*/

class Account {
  // public fields
  locale = navigator.language;
  // _movements = [];

  // private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // _ this means this just protected
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }
  getPin() {
    return this.#pin;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // _ this means this just protected
  // #approveLoan() {
  //   return true;
  // }

  reqLoan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log(`Your Get ${val} takas loan`);
      return this;
    } else {
      console.log(`loan request failed`);
    }
  }

  // private methods
  #approveLoan() {
    return true;
  }
}

const account1 = new Account("Mobin", "bn", 1111);
account1.deposit(100);
account1.reqLoan(1500);
account1.withdraw(500);
account1.reqLoan(3500);
console.log(account1.getMovements());
console.log(account1);
// console.log(account1.#approveLoan);
// console.log(account1.getPin());
// console.log(account1.#movements);

// chaining method
account1.deposit(500).withdraw(15000).reqLoan(150000).withdraw(1500);
console.log(account1.getMovements());

// section overview