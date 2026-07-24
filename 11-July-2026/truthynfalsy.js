/**
 * Falsy values
 * - false
 * - number 0
 * - blank string
 * - null
 * - undefined
 * - NaN
 */

let name = "Mark";

if (name) {
  //true
}

name = "";
if (name) {
  //false
}

/**
 * Ideally, in an if statement, you use a comparison, and that comparison evaluates to either true or false
 * What we are talking about now is: what if the if statement does not have a comparison?
 * It has a value.
 * In that situation, which values will be considered as True and
 * which values will be considered as False is what we are discussing.
 *
 * Truthy values
 * - true
 * - non zero numbers
 * - non empty string
 *
 */

let salaries = [];
let jsonResponse = {};
// 1. false
if (false) {
  console.log("This won't run");
} else {
  console.log("1. false is falsy ✓");
}

// 2. 0 (zero)
if (0) {
  console.log("This won't run");
} else {
  console.log("2. 0 is falsy ✓");
}

// 3. "" (empty string)
if ("") {
  console.log("This won't run");
} else {
  console.log("3. Empty string is falsy ✓");
}

// 4. null
if (null) {
  console.log("This won't run");
} else {
  console.log("4. null is falsy ✓");
}

// 5. undefined
if (undefined) {
  console.log("This won't run");
} else {
  console.log("5. undefined is falsy ✓");
}

// 6. NaN (Not a Number)
if (NaN) {
  console.log("This won't run");
} else {
  console.log("6. NaN is falsy ✓");
}
