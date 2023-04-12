const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// team
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1, players2);
// // goalkeepers
// const gkNeuer = players1[0];
// const gkBurki = players2[0];
// console.log(gkNeuer, gkBurki);
// // fieldPlayers
// // function fieldPlayers(players) {
// //   return players.filter((player, index) => players[0] !== players[index]);
// // }
// // const fieldPlayers1 = fieldPlayers([...players1]);
// // const fieldPlayers2 = fieldPlayers([...players2]);
// // console.log(fieldPlayers1, fieldPlayers2);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
// console.log(players1Final);

// 1 .
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(players1Final); // 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
function printGoals(...players) {
  console.log(`${players.length} `);
}
printGoals("mobin", "Himon", "mihad");
printGoals("mobin", "Himon", "mihad", "lasd", "lasjkdf");
printGoals(...game.scored);

// 7.
console.log(game.odds.team1, game.odds.team2);
game.odds.team1 < game.odds.team2 && console.log("Team1 won");
game.odds.team1 > game.odds.team2 && console.log("Team2 won");

// Coding Challenge #2
// 1.
for (const [key, name] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${name}`);
}
// 2.
const values = Object.values(game.odds);
let avg = 0;
for (const value of values) {
  avg += value;
}
console.log(avg / values.length);

// 3.
let forTeam1, forDraw, forTeam2;
for (const i of values) {
  if (i === team1) {
    console.log(`Odd of victory ${game.team1}: ${i}`);
  } else if (i === draw) {
    console.log(`Odd of draw: ${i}`);
  } else if (i === team2) {
    console.log(`Odd of victory ${game.team2}: ${i}`);
  }
}

// const scorers = {};
let arr = game.scored;
console.log(arr);
let obj = arr.reduce((ac, a, index) => ({ ...ac, [a]: index + 1 }), {});
console.log(obj);
console.log(`---------Coding Challenge #3--------`);
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔃 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔃 Substitution"],
  [64, "🟡 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔃 Substitution"],
  [72, "🔃 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟡 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);
// 3.
console.log(`An event happened, on
average, every ${
  [...gameEvents.keys()][[...gameEvents.keys()].length] / gameEvents.size
} minutes`);
// 4.
for (const [time, score] of gameEvents) {
  const event =
    time <= 45
      ? `[FIRST HALF] ${time}: ${score}`
      : `[Second HALF] ${time}: ${score}`;
  console.log(event);
}

console.log(`================= Coding Challenge #4 ==========`);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const textarea = document.querySelector("textarea").value;
  let text = textarea.split("\n").join(" ").toLowerCase().trim().split(" ");

  for (const [index, iterator] of text.entries()) {
    let ite = iterator.split("_").join(" ").split(" ");
    if (ite.includes("")) continue;
    const final = ite.map((i) => {
      return i[0].toUpperCase() + i.slice(1);
    });
    let camelCase = final.join("");
    console.log(
      camelCase
        .replace(camelCase[0], camelCase[0].toLowerCase())
        .padEnd(30, " ") + "🔫".repeat(index + 1)
    );
  }
});
