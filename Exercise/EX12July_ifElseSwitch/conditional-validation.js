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

console.log("\n----------------Password Strength Checker:-----------------\n");

let password = "Test@123";

function pswdchecker(password) {
    if (password.length<6 || password.trim() === "" )
        console.log("❌ Weak password - too short");
    else if (password.length < 10)
        console.log("⚠️ Medium password strength");
    else
        console.log("✅ Strong password");

}

pswdchecker("Test");
pswdchecker("Test@123");
pswdchecker("Test@12345");
