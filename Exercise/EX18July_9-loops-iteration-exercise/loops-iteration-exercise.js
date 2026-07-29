console.log("\n----------------Print All Test Cases:-----------------\n");

let testCases = ["Login with valid credentials",
   "Login with invalid password",
   "Login with empty username",
   "Logout functionality",
   "Remember me checkbox"];

console.log("Login Module Test Suite");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
   for (let i = 0;i<testCases.length;i++){
    console.log(`${i+1}. : ${testCases[i]}`);
   }
console.log("\nTestCase Count : "+testCases.length);

console.log("\n----------------Refactor with for...of Loop-----------------\n");

console.log("Login Module Test Suite (for...of version)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
let count =1;
for (let i of testCases) {
    console.log(`${count}. : ${i}`);
    count++;
}
console.log("\nTestCase Count : "+testCases.length);

console.log("\n----------------Count Test Results-----------------\n");

let testResults = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];

console.log("Test Execution Results");
console.log("━━━━━━━━━━━━━━━━━━━━━━");
let Total_tests = 0;
let PASSED_tests = 0;
let FAILED_tests = 0;
let SKIPPED_tests = 0;
count = 0;
for (let i of testResults) {
    console.log(`${count}. : ${i}`);
    count++;
    if (i === "PASSED") PASSED_tests++;
    if (i === "FAILED") FAILED_tests++;
    if (i === "SKIPPED") SKIPPED_tests++;
}
console.log("\nTestCase Count : "+testCases.length);

console.log("\nCounting results...");
console.log("Test Statistics:");
console.log(" Total tests: "+ count);
console.log("Passed: " +PASSED_tests+ "✓");
console.log("Failed: " +FAILED_tests+ "✗");
console.log("Skipped: " +SKIPPED_tests+ "⊘");
console.log("Pass rate: " + ((PASSED_tests)*100/count)+"%");
console.log("Fail rate: " + ((FAILED_tests)*100/count)+"%");


console.log("\n----------------Calculate Test Scores-----------------\n");

let testScores = [85, 92, 78, 95, 88, 73, 90, 87];
let lowest_score = testScores[0];
let highest_score = testScores[0];  // Start with first score
let total_score = 0;
for (let i = 0; i < testScores.length; i++) {
    total_score = total_score + testScores[i];
    if (testScores[i] > highest_score) highest_score = testScores[i];
    if (testScores[i] < lowest_score) lowest_score = testScores[i];
}

console.log("Test Score Analysis");
console.log("━━━━━━━━━━━━━━━━━━━");
console.log("Score : "+testScores);
console.log("Calculating statistics...");
console.log("Result");
console.log("  Total: "+total_score);
console.log("  Average: "+(total_score/(testScores.length)));
console.log("  Highest: "+highest_score);
console.log("  Lowest: "+lowest_score);

console.log("\n----------------Find Failed Tests-----------------\n");

let testNames = ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
 testResults = ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];

console.log("Test Execution Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("All Tests: ");
let Failed_Tests = [];
for(let i=0;i<testNames.length;i++){
    if (testResults[i] === "PASSED")
    console.log(` ${i+1}. ${testNames[i]} : ${testResults[i]} ✓`);
    if (testResults[i] === "FAILED"){
        console.log(` ${i+1}. ${testNames[i]} : ${testResults[i]} ✗`);
        Failed_Tests.push(testNames[i]);
    }
}

console.log("\nFailed Tests (requires attention):");
for(let k of Failed_Tests){
    console.log(" - "+ k);
}

console.log("Count of failed test : "+Failed_Tests.length)

console.log("\n----------------Retry Logic with do...while-----------------\n");


console.log("Retry Logic Test Runner");
console.log("━━━━━━━━━━━━━━━━━━━━━━━");
let testname = "Login Test"
let attempts = 0;
let maxAttempts = 5;
let testPassed = false ;

function runFlakyTest() {
       return Math.random() > 0.7;  // 30% success rate
   }

console.log("Running: "+ testname);
console.log("Max Attempts : "+maxAttempts);

do{
attempts++;
    console.log("Attempt " + attempts + "...");
    testPassed = runFlakyTest();

    if (testPassed) {
        console.log("\n✓ Test passed !!!");
    } else {
            console.log("✗ Test FAILED");
        if (attempts < maxAttempts)
            console.log("Retrying...\n");
    }
} while (!testPassed && attempts < maxAttempts);

if (testPassed) console.log("\n✓ Test passed on attempt "+attempts);
else console.log("✗ Test failed after "+ attempts + " Attempts")

