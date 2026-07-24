/*
   **Requirements:**
1. Print a test suite name (e.g., "Login Test Suite")
2. Print 5 different test cases with names
3. Each test should have a status: PASSED, FAILED, or SKIPPED
4. Use blank lines to make it readable
5. Print a summary at the end (e.g., "3 Passed, 2 Failed")

*/

"use strict";

console.log("==========================================");
console.log("           LOGIN TEST SUITE");
console.log("==========================================\n");
let total_tests = 0;
let passed_tests = 0;
let failed_tests = 0;
let username ;
let password ;

function login(username,password){
    let status;
    if((username === "achman.saxena@gmail.com" || username === "%%") && (password === "1234" || password === "" ))
        status = true ;
    else
        status = false ;
    console.log("STATUS :" + status + "\n");

    if (status)
        passed_tests = passed_tests + 1;
    else
        failed_tests = failed_tests + 1;        
}

console.log("Test 1: Login with valid credentials");
login("achman.saxena@gmail.com" , "1234");

console.log("Test 2: Login with invalid password");
login("achman.saxena@gmail.com" , "");

console.log("Test 3: Login with empty username field");
login("", "1234");

console.log("Test 4: Login with special characters in username");
login("%%", "1234");

console.log("Test 5: Login with blank in password");
login("%%", "");

total_tests = failed_tests + passed_tests;

console.log("==========================================");
console.log("             TEST SUMMARY");
console.log("==========================================");
console.log("Total Tests : " + total_tests);
console.log("PASSED : " + failed_tests);
console.log("FAILED : " + passed_tests);