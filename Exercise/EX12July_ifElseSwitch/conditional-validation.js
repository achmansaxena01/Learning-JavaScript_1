let email = "";
function validateEmail(email) {
    if (email.trim() === "")
        console.log("Email is required");
    else if (!email.includes("@"))
        console.log("❌ Invalid email format");
    else if (!email.includes("."))
        console.log("❌ Invalid email format");
    else
        console.log("✅ Valid email format");
}

validateEmail("testuser@example.com");
validateEmail("notanemail");
validateEmail("missing@domain");

console.log("\n----------------Test Result Validation:-----------------\n");

let testResult = ["PASSED","FAILED","SKIPPED","PENDING"];
for (let i = 0; i < testResult.length; i++) {
    if (testResult[i] === "PASSED")
        console.log("✅ Test case passed");
    else if (testResult[i] === "FAILED")
        console.log("❌ Test case failed");
    else if (testResult[i] === "SKIPPED")
        console.log("⚠️ Test case skipped");
    else if (testResult[i] === "PENDING")
        console.log("⏳ Test case pending");
}

consol