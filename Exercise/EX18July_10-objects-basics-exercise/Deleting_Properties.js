"use strict";
console.log("\n----------------Object Methods and 'this' Keyword:-----------------\n");

let testData= {
    username: "testuser@example.com",
    password: "Test@123",
    sessionToken: "abc123xyz",
    firstName: "John",
    lastName: "Doe"
}

console.log("Cleanup Sensitive Data");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Before cleanup:");
console.log(testData);

delete(testData.password);
delete(testData.sessionToken);

console.log("\nAfter cleanup:");
console.log(testData);

if ("username" in testData){
        console.log("Does 'Username' exist? : true");
        if ("password" in testData)
                console.log("Does 'password' exist? : true");
        else 
            console.log("Does 'password' exist? : false");
        console.log("✓ Sensitive data removed successfully!");
}