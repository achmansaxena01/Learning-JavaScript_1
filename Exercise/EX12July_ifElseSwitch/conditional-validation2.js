console.log("\n----------------Test Result Validation:-----------------\n");

let testResult = ["PASSED","FAILED","SKIPPED","PENDING"];
for(let i =0;i<testResult.length;i++){
switch(testResult[i]){
    case "PASSED" : console.log("✅ Test case passed");
    break;
    case "FAILED" : console.log("❌ Test case failed");
    break;
    case "SKIPPED" : console.log("⚠️ Test case skipped");
    break;
    case "PENDING" : console.log("⏳ Test case pending");
    break;
}
}

console.log("\n----------------Switch — Grouping Cases (Multiple Cases, One Outcome):-----------------\n");

let statusCode = [200,201,400,401,403,404,500,502,503,418];

for(let i =0;i<statusCode.length;i++){
switch(statusCode[i]){
case 200: console.log("✅ 200 OK — request successful");
break;
case 201: console.log("✅ 201 Created — resource created");
break;
case 400:
case 401:
case 403: console.log("❌ Client error — check your request");
break;
case 404: console.log("❌ 404 Not Found — endpoint does not exist");
break;
case 500:
case 502:
case 503: console.log("🔥 Server error — backend issue");
break;
default: console.log("? Unknown status code: " + statusCode);
}
}

console.log("\n----------------Test Score Grading:-----------------\n");

let score = 85
function GradingToScore(score){
switch(Math.floor(score / 10)){
    case 10:
    case 9:
        console.log(`Grade: A (Excellent) : Score is ${score}`);
        break;
    case 8:
        console.log(`Grade: B (Good) : Score is ${score} `);
        break;
    case 7:
        console.log(`Grade: C (Average) : Score is ${score} `);
        break;
    case 6:
        console.log(`Grade: D (Pass) : Score is ${score} `);
        break;
    default:
        console.log(`Grade: F (Fail) : Score is ${score} `);
    }
}

GradingToScore(95);
GradingToScore(85);
GradingToScore(75);
GradingToScore(65);
GradingToScore(55);

console.log("\n----------------Duration:-----------------\n");

let duration = 3.5;  // test duration in seconds

function timecheck(duration){
switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
    }
}   

timecheck(0.5);
timecheck(2);
timecheck(4);
timecheck(8);

console.log("\n----------------Check:-----------------\n");

let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}

let x = 2;

switch (x) {
    case 1:
        console.log("one");
    case 2:
        console.log("two");
    case 3:
        console.log("three");
    default:
        console.log("other");
}

console.log("\n----------------Complete Test User Validation :-----------------\n");

let username = "testuser";
let password = "Test@123";
let email = "" ;
let age = 1;

function validateCompleteUser(username, password, email, age){
    console.log("---------------------------------------------------------------");
    console.log("Validating test user...");
    if (username.trim() === "" || username.length<3 || username.length>21)
        return (`❌ Username must NOT be empty AND length should be between 3-20 characters (current: ${username}`) ;
    if (password.trim() === "" || password.length<8)
        return (`❌ Password should NOT be empty AND length should be at least 8 characters (current: "${password.length}`) ;
    if (email.trim() === "" || email.includes('@')===false || email.includes('.') === false) 
        return (`❌ Email should NOT be empty AND contains both '@' and '.' (current: ${email}`) ;
    if (17 > age || age > 121) 
        return (`❌ Age should be between 18 and 120 (current: "${age}`) ;
    console.log("Checking username... ✓");
    console.log("Checking password... ✓");
    console.log("Checking email... ✓");
    console.log("Checking age... ✓");
    return ("✅ All validations passed - User is valid!");
}

// Test with valid user
let result = validateCompleteUser(
    "testuser",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);

// Test with invalid user (short username)
result = validateCompleteUser(
    "ab",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);



