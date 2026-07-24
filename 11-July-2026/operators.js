/**
 * Arithmetic operators
 * Compound Assingment operators
 */
let count;
count = 3;
const abc = 5;
console.log("before initializing", count);
count += 3; //count = count + 3
console.log("after initializing", count);
count *= 5; //count = count * 5;
console.log("after *=", count);
count++;
console.log("after ++", count);
++count;
count--;
--count;
console.log((count = 5)); //assignment
console.log(count == 5); //comparison always results in one of the two outputs - either true or false
let name = "mark";
name = "Steve";
count = 7;
if ((count = 5)) {
  console.log("Printed inside the if statement");
}

/**
 * Truthy and falsy values in Javascript
 * zero in javascript evaluates to false
 * Any non-zero number in Javascript evalautes to true
 */
// ==, !=, >=, <=, >,<, !==, ===

let responseTime = 2.5;
let threshold = 3;

console.log("Response time: " + responseTime + " seconds");
console.log("Threshold: " + threshold + " seconds");

//conditiona statement - if else
if (responseTime > threshold) {
  console.log("❌ Response too slow");
} else {
  console.log("✅ Response time acceptable");
}

/**
 * Logical operators
 *
 * AND - &&, OR - ||
 */
let username = "testuser";
let password = "Test@123";
if (username != "" && password != "") {
}

if (true && true) {
}

console.log("true  && true  = " + (true && true));
console.log("true  && false = " + (true && false));
console.log("false && true  = " + (false && true));
console.log("false && false = " + (false && false));

let status1 = "SKIPPED";

if (status1 == "PASSED" || status1 == "SKIPPED") {
  console.log("Test case either passed or skipped");
} else {
  console.log("Test case failed");
}

console.log("true  || true  = " + (true || true));
console.log("true  || false = " + (true || false));
console.log("false || true  = " + (false || true));
console.log("false || false = " + (false || false));

let hasErrors = true;

//! flips the boolean value to the other. So if the boolean value is true apply ! before it makes it false
//if boolean value is false then applying ! before it makes it true

if (hasErrors) {
  //false
  console.log("There are errors");
} else {
  console.log("There are no errors");
}
//
if (!hasErrors) {
  //true
  console.log("There are no errors");
} else {
  console.log("There are errors");
}
