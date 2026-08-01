let testResults = [
  "PASSED",
  "FAILED",
  "PASSED",
  "SKIPPED",
  "BLOCKED",
  "FLAKY",
  "FAILED",
];
//Slice is not going to modify the existing array.

let subset = testResults.slice(1, 4); //index 1 till 4-1 i.e. 3

subset = testResults.slice(3); //from index 3 till end of the array

subset = testResults.slice(-3); //last 3 elements
subset = testResults.slice();
console.log(subset);
