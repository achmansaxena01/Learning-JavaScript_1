"use strict";
console.log("\n----------------Exercise 1: Test Suite Array-----------------\n");

let testCases = ["Valid credentials",
   "Invalid password",
   "Empty username",
   "Empty password",
   "Remember me checkbox"];

console.log("Complete array is : ", testCases);
console.log("Total number of test cases : ", testCases.length);
console.log("The first test case : ", testCases[0]);
console.log("The last test case : ", testCases[testCases.length-1]);

console.log("\n----------------Exercise 2: Test Results Tracker-----------------\n");

let testResults =[];
console.log("Running Test Suite...");
testResults[0] = "PASSED";
console.log(`Test ${testResults.length} completed: ${testResults[0]}`);
testResults[1] = "PASSED";
console.log(`Test ${testResults.length} completed: ${testResults[1]}`);
testResults[2] = "FAILED";
console.log(`Test ${testResults.length} completed: ${testResults[2]}`);
testResults[3] = "PASSED";
console.log(`Test ${testResults.length} completed: ${testResults[3]}`);
testResults[4] = "SKIPPED";
console.log(`Test ${testResults.length} completed: ${testResults[4]}`);
console.log("\nTest Summary:")
console.log("Total number of test cases are : "+ testResults.length);
console.log(`Full array is : [${testResults}]`);
console.log("Index of  FAILED is : "+testResults.indexOf("FAILED"));

console.log("\n----------------Exercise 3: Test Data Management :-----------------\n");

let testEmails = [ '"user1@test.com"' , '"user2@test.com"' , '"user3@test.com"' ];

console.log("Test Email Management");
console.log(`Initial email : \n[${testEmails}] `);
console.log("Count of element : "+testEmails.length ,"\n");

testEmails.push('"user4@test.com"');//adds value at the end of ARRAY;
console.log(`Adding element at the end using method : \n[${testEmails}] `);
console.log("Count of element : "+testEmails.length +"\n");

testEmails.unshift('"admin@test.com"');//adds value at the beginning of ARRAY;
console.log(`Adding element at the begining using method :\n[${testEmails}] `);
console.log("Count of element : "+testEmails.length +"\n");

let removed = testEmails.pop();//remove value at the end of ARRAY;
console.log(`Removed from the end using method :\n[${testEmails}] `);
console.log("Count of element : "+testEmails.length);
console.log("element removed : "+removed +"\n");

removed = testEmails.shift();//Remove value at the beginning of ARRAY;
console.log(`Removed from the begining using method :\n[${testEmails}] `);
console.log("Count of element : "+testEmails.length);
console.log("element removed : "+removed +"\n");


console.log("\n----------------Exercise 4: Test Score Analysis :-----------------\n");

let testScores = [85, 92, 78, 95, 88, 73, 90];
console.log(testScores);
console.log(`Total number of score is : ${testScores.length}`);
console.log(`First score is : ${testScores[0]}`);
console.log(`Last score is : ${testScores[testScores.length-1]}`);
console.log("Checking for specific scores...");
let c ;
function indexoffelement (c){
if(testScores.indexOf(c) !== -1)
   console.log(`Score ${c} found : Yes (at index: ${testScores.indexOf(c)})`);
else 
   console.log(`Score ${c} found : NO (at index: ${testScores.indexOf(c)})`);
}
indexoffelement(95);
indexoffelement(2);
indexoffelement(100);

console.log("\n----------------Exercise 5: slice() - Extract Test Subsets :-----------------\n");

let testSuite = ["Smoke1", "Smoke2", "Smoke3", "Regression1", "Regression2", "Regression3"];

let smokeTests = [];
smokeTests = testSuite.slice(0,3);
console.log(`Smoke tests only (first 3):  ${smokeTests}`);

let regressionTests = [];
regressionTests = testSuite.slice(-3);
console.log(`Regression tests only (last 3): ${regressionTests}`);
console.log(`\nFull copy: ${testSuite}`);

let Middle = [];
Middle = testSuite.slice(2,5);
console.log(`Regression tests only (last 3): ${regressionTests}`);
console.log(`\nFull copy: ${testSuite}`);
Middle tests (index 2-5): 


