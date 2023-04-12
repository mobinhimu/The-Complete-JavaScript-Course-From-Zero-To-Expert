// 121 Working With Strings - Part 1
const bdAir = "Biman Bangladesh Airlines";

console.log(bdAir.indexOf(" "));
console.log(bdAir.lastIndexOf(" "));
console.log(bdAir.slice(bdAir.indexOf(" ") + 1, bdAir.lastIndexOf(" ")));

function checkMiddleSeat(seat) {
  const middleSeat =
    seat.slice(-1) === "B" || seat.slice(-1) === "E"
      ? "You Got The Middle Seat !"
      : "How Lucky You Are !";
  console.log(middleSeat);
}
checkMiddleSeat("11B");
checkMiddleSeat("13C");
checkMiddleSeat("17E");

// 122 Working With Strings - Part 2
function capitalizationName(userName) {
  return userName
    .toLowerCase()
    .split(" ")
    .map((firstItem) => firstItem[0].toUpperCase() + firstItem.slice(1))
    .join(" ");
}
let myName = "himon";
console.log(capitalizationName("rayHan uDDin moBIn"));
