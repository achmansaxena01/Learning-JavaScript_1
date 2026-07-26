console.log("\n----------------Test Suite Array :-----------------\n");

let testCases = ["Valid credentials",
   "Invalid password",
   "Empty username",
   "Empty password",
   "Remember me checkbox"]

   console.log(`The complete array is : [${testCases}]`);
   console.log("The number of testcases are : " +testCases.length );
   console.log("The first test case is : " + testCases[0]);
   console.log("The last test case is : " +testCases[(testCases.length)-1]);

console.log("\n----------------Test Suite Array :-----------------\n");

let testResults =[]; let count =0
console.log("Running Test Suite...");
testResults[0] = "PASSED";
console.log(`Test 1 completed: ${testResults[0]}`);
count++;
testResults[1] = "PASSED";
console.log(`Test 2 completed: ${testResults[1]}`);
count++;
testResults[2] = "FAILED";
console.log(`Test 3 completed: ${testResults[2]}`);
count++;
testResults[3] = "PASSED";
console.log(`Test 4 completed: ${testResults[3]}`);
count++;
testResults[4] = "SKIPPED";
console.log(`Test 5 completed: ${testResults[4]}`);
count++;
console.log("Total number of test cases are : "+count);
console.log(`Full array is : [${testResults}]`);
console.log("Index of  FAILED is : "+testResults.indexOf("FAILED"));

console.log("\n----------------Test Data Management :-----------------\n");
let testEmails = [ "user1@test.com" , "user2@test.com" , "user3@test.com" ];

console.log("Test Email Management");
console.log(`Initial email : [${testEmails}] `);
console.log("Initial email : ["+testEmails+"]");
console.log("\n----------------Test Data Management :-----------------\n");

