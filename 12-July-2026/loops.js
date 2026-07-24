for (let i = 2; i <= 5; i++) {
  console.log("Value of i is -", i);
}
console.log("===================");
for (let i = 5; i >= 2; i--) {
  console.log("Value of i is -", i);
}

let testCases = ["Login", "Logout", "Search", "Checkout"];

for (let i = 0; i < testCases.length; i++) {
  console.log(i + 1 + ". " + testCases[i]);
}
console.log("===================");
for (let i = 0; i < testCases.length; i++) {
  console.log(`${i + 1}- ${testCases[i]}`);
}
