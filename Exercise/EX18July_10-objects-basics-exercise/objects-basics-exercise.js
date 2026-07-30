console.log("\n----------------Create Test Case Object:-----------------\n");

console.log("Test Case Details");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

let testCase = {
    id: "TC-001",
    name: "Login with valid credentials",
    priority: "High",
    status: "Passed",
    duration: 2.5,
    browser: "Chrome"
}

console.log("Id is "+testCase.id);
console.log("Name is "+testCase.name);
console.log("Priority is "+testCase.priority);
console.log("Status is "+testCase.status);
console.log("Duration is "+testCase.duration);
console.log("Browser is "+testCase.browser);

console.log("Adding tester...");
testCase.tester = "John Doe";
console.log("Changing status...");
testCase.status = "Failed";

console.log(testCase);
