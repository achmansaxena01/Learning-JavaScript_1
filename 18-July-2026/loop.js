//for each
//do while
//while

let testCases = ["Login", "Logout", "Search", "Checkout", "Payment"];

for (let i = 0; i < testCases.length; i++) {
  console.log(i + 1 + ". " + testCases[i]);
}

//for of loop
console.log("=====");
for (let testCase of testCases) {
  console.log(testCase);
}

let count = 6;
while (count < 5) {
  console.log("count:", count);
  count++;
}
//The difference between while and do-while is that with do-while,
// your code will at least execute once.
do {
  //count 5//do while may confuse the reader of the intention.
  console.log("count:", count);
  count++;
} while (count < 5);

let attempts = 0;
let maxAttempts = 2;
do {
  attempts++;
  console.log("  Attempt " + attempts + "...");

  passed = runFlakyTest();

  if (passed) {
    console.log("  ✓ Test PASSED!");
  } else {
    console.log("  ✗ Test FAILED");
    if (attempts < maxAttempts) {
      console.log("  Retrying...");
    }
  }
} while (!passed && attempts < maxAttempts);
