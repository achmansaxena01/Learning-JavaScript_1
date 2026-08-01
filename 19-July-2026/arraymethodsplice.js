let testResults = [
  "PASSED",
  "FAILED",
  "PASSED",
  "SKIPPED",
  "BLOCKED",
  "FLAKY",
  "FAILED",
];

//let whatRemoved = testResults.splice(2, 2);
testResults.splice(1, 1, "SMOKE", "REGRESSION");
//console.log(whatRemoved);
console.log(testResults);
