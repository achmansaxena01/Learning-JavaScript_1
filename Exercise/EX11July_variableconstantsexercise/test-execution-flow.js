"use strict";

console.log("========================================");
console.log("      TEST EXECUTION FLOW");
console.log("========================================\n");
let stepNumber = 1;
let testStatus = "IN PROGRESS";
const Test_Name = "Login Functionality Test";
let Tester = "Achman";

console.log("Test Name: " + Test_Name);
console.log("Tester : " + Tester);

console.log("\nStep " + stepNumber +": Opening browser");
console.log("Status : " + testStatus);
console.log("\nStep " + stepNumber++ +": Navigating to login page");
console.log("Status : " + testStatus);
console.log("\nStep " + stepNumber++ +": Entering credentials");
console.log("UserName : testuser@example.com");
console.log("Status : " + testStatus);
console.log("\nStep " + stepNumber++ +": Clicking login button");
console.log("Status : " + testStatus);
console.log("\nStep " + stepNumber++ +": Verifying dashboard");
testStatus = "COMPLETED";
console.log("Status : " + testStatus);
testStatus = "PASSED";

console.log("==========================================");
console.log("Final Status : "+ testStatus);
console.log("Test Duration: 2.5 seconds ");
console.log("==========================================");

