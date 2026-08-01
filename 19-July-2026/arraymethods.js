let testResults = ["PASSED", "FAILED", "PASSED"];
testResults[0] = "FAILED";
testResults[testResults.length] = "BLOCKED";
//testResults[7] = "FAILED";//creates gaps
testResults.push("SKIPPED"); //add at the end
testResults.unshift("PASSED"); // add at the start
let whatRemoved = testResults.pop();
console.log(whatRemoved);
whatRemoved = testResults.shift();
let position = testResults.indexOf("PASSED");
console.log("Possition of Passed -", position);
console.log(whatRemoved);
console.log(testResults);
