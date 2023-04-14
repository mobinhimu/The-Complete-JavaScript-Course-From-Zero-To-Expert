"use strict";
// my solution
// A Closer Look at Functions
// Coding Challenge #1
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let userInput = Number(
//       prompt(`${this.question} \n ${this.options.join(" \n ")}`)
//     );
//     return userInput > this.question.length || userInput < 0
//       ? alert("Please Enter Your Number Between (0 - 3)") || "not-valid"
//       : userInput;
//   },
//   displayResults() {
//     // let input = prompt("");
//     let input = "Hello";
//     if (typeof input === "string") {
//       console.log(`Poll results are ${input}`);
//     } else {
//       console.log(input);
//     }
//   },
// };

// document.querySelector("button").addEventListener("click", () => {
//   let favLanguage = poll.registerNewAnswer();
//   const answersPoll = poll.answers;
//   answersPoll.splice(favLanguage - 1, 1, favLanguage);
//   favLanguage === "not-valid" ? null : console.log(poll.answers);
// });

// poll.displayResults();

// jonas solution

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let userInput = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    userInput < this.options.length &&
      userInput > 0 &&
      !isNaN(userInput) &&
      (this.answers[userInput] = userInput + 1);
    console.log(this.answers);
    this.displayResults("array");
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers}`);
    }
  },
};
// poll.answers = [1, 5, 3, 9, 6, 1];
// const data1 = poll.displayResults.bind(poll);
// data1("string");
// data1("array");
poll.displayResults.call(
  {
    answers: [1, 5, 3, 9, 6, 1],
  },
  "string"
);
document
  .querySelector("button")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
