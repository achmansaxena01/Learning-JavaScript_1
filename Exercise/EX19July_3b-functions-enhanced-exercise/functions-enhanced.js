"use strict";
console.log("\n----------------Default Parameters - Test Runner:-----------------\n");
function configureTest(testName, browser = "Chrome", timeout = 30000, environment = "staging"){
    console.log("   Test: "+ testName);
    console.log("   Browser:  "+ browser);
    console.log("   Timeout: "+ timeout + "ms");
    console.log("   Environment: "+ environment);
    console.log("\n");
}

console.log("--- All defaults ---");
configureTest("Login Test");
console.log("--- Custom browser 1---");
configureTest("Login Test", "Firefox");
console.log("--- Custom browser 2---");
configureTest("Login Test", "Safari", 60000);
console.log("--- Custom browser 3---");
configureTest("Login Test", "Chrome", 30000, "production");
console.log("--- Custom browser edge case---");
configureTest("Edge Case", "");        // empty string
configureTest("Edge Case", undefined); // explicit undefined

console.log("\n----------------Exercise 2: Guard Clauses - Form Validator-----------------\n");

function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                return "✅ Form is valid";
            } else {
                return "❌ Must be 18 or older";
            }
        } else {
            return "❌ Password must be at least 8 characters";
        }
    } else {
        return "❌ Username is required";
    }
}

function validateFormGuard(username, password, age) {
    if (username === "") return "❌ Username is required";
    if (password.length < 8) return "❌ Password must be at least 8 characters";
    if (age < 17) return "❌ Must be 18 or older";
    return "✅ Form is valid";                          
}

function calling (username, password, age) {
    console.log(" Nested: " +  validateFormNested(username, password, age) );
    console.log(" Guard: " +  validateFormGuard(username, password, age) +"\n" );
}
//**Test Cases:**
calling("", "Test@123", 25);
calling("john", "abc", 25);
calling("john", "Test@123", 16);
calling("john", "Test@123", 25);



console.log("\n----------------Exercise 2: Guard Clauses - Form Validator-----------------\n");