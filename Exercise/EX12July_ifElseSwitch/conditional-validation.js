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

console.log("\n----------------Test Score Grading:-----------------\n");

let score = 85
function GradingToScore(score){
    if (score>=90)
        console.log(`Grade: A (Excellent) : Score is ${score}`);
    else if (80<=score<=89)
        console.log(`Grade: B (Good) : Score is ${score} `);
    else if (70<=score<=79)
        console.log(`Grade: C (Average) : Score is ${score} `);
    else if (60<=score<=69)
        console.log(`Grade: D (Pass) : Score is ${score} `);
    else if (59<=score<=0)
        console.log(`Grade: F (Fail) : Score is ${score} `);
    else
        console.log("Invalid input");
}

GradingToScore(95);
GradingToScore(85);
GradingToScore(75);
GradingToScore(65);
GradingToScore(55);

console.log("\n----------------Early returnpattern using guard clause:-----------------\n");


function checkTestData(result, duration) {
    if (result === null) return console.log("Error: No result");
    if (duration < 0) return console.log("Error: Negative duration");
    if (duration > 10)return console.log("Error: Duration too long");
    return console.log("Valid: " + result + " in " + duration + "s");
}

checkTestData(null, 3);
checkTestData("PASSED", -1);
checkTestData("PASSED", 15);
checkTestData("PASSED", 2);



