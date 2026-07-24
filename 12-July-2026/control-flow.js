let responseTime = 30;

let threshold = 40;
//conditiona statement - if else

if (responseTime > threshold) {
  console.log("❌ Response too slow");
} else {
  console.log("✅ Response time acceptable");
}

let testResult = "FAILED";

if (testResult === "PASSED") {
  console.log("✓ Test passed");
} else if (testResult === "FAILED") {
  console.log("✗ Test failed");
} else if (testResult === "SKIPPED") {
  console.log("⊘ Test skipped");
} else {
  console.log("? Unknown test result");
}

let score = 85;

console.log("Score: " + score);

if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score >= 80) {
  console.log("Grade: B (Good)");
} else if (score >= 70) {
  console.log("Grade: C (Average)");
} else if (score >= 60) {
  console.log("Grade: D (Pass)");
} else {
  console.log("Grade: F (Fail)");
}

testResult = "FAILED";
switch (testResult) {
  case "PASSED":
    console.log("Test Case Is ", testResult);
    break;
  case "FAILED":
    console.log("Test Case Is ", testResult, " log the defect.");
    break;
  case "SKIPPED":
    console.log("Test Case Is ", testResult, " find out the reason");
    break;
  default:
    console.log("Invalid Status");
}
console.log();

testResult = "ANDROID";
switch (testResult) {
  case "WINDOWS":
    console.log("Test Case Is ", testResult);
    break;
  case "LINUX":
    console.log("Test Case Is ", testResult, " log the defect.");
    break;
  case "ANDROID":
    console.log("Test Case Is ", testResult, " find out the reason");
    break;
  default:
    console.log("IOS");
}

let priority = "High";

switch (priority) {
  case "Critical":
  case "High":
    console.log("⚠️  Address immediately");
    console.log("   Priority level: " + priority);
    break;
  case "Medium":
    console.log("📋 Address soon");
    break;
  case "Low":
    console.log("📝 Address when possible");
    break;
  default:
    console.log("Unknown priority");
}

let errorCode = 404;

console.log("HTTP Status Code: " + errorCode);

switch (errorCode) {
  case 200:
    console.log("✓ Success");
    break;
  case 4 * 100:
    console.log("✗ Bad Request");
    break;
  case 401:
    console.log("✗ Unauthorized");
    break;
  case 404:
    console.log("✗ Not Found");
    break;
  case 500:
    console.log("✗ Server Error");
    break;
  default:
    console.log("✗ Unknown error: " + errorCode);
}

const x = 10;

switch (true) {
  case x > 0 && x < 5:
    console.log("Between 1 and 4");
    break;
  case x >= 5 && x <= 10:
    console.log("Between 5 and 10");
    break;
}

if (responseTime > threshold) {
  console.log("❌ Response too slow");
} else {
  console.log("✅ Response time acceptable");
}
//ternary operator

let respCheck =
  responseTime > threshold ? "Response too slow" : "Response time acceptable";

//Communication
