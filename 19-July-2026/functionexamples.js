/**
 * What can a function return?
 * any data types, it can return an object
 */

function generateEmail(firstName, lastName) {
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
  return email;
}
//Setting the second parameter default value
function generateUsername(firstName, lastName = "Jobs") {
  return firstName.toLowerCase() + lastName.toLowerCase();
}

function generatePassword(prefix) {
  return prefix + "@123";
}

function generateTestUser(firstName, lastName) {
  return {
    email: generateEmail(firstName, lastName),
    username: generateUsername(firstName, lastName),
    password: "Test@123",
    userId: 1000,
    isActive: true,
  };
}

let user1 = generateTestUser("Mark", "Gates");
console.log(user1);
console.log(user1.password);

let pass = generatePassword();
console.log(pass);
let fName = generateUsername("Steve");
console.log(fName);

fName = generateUsername("Steve", "Mark");
console.log(fName);

/**
 *
 * Some time we need functions with optional parameters
 */
function runTest(testName, browser = "Chrome", timeout = 30000) {
  console.log(`Running ${testName} on ${browser} with ${timeout}ms timeout`);
}

function validateUserNested(username, password, age) {
  if (username !== "") {
    if (password.length >= 8) {
      if (age >= 18) {
        return "Valid user";
      } else {
        return "Must be 18+";
      }
    } else {
      return "Password too short";
    }
  } else {
    return "Username required";
  }
}
//Early return - guard each bad case at the top,
let outputOfFunction = validateUserEarly("Mark", "Steve@123", 24);
console.log(outputOfFunction);

function validateUserEarly(username, password, age) {
  if (username === "") {
    return "Username required";
  } // guard
  if (password.length < 8) return "Password too short"; // guard
  if (age < 18) return "Must be 18+"; // guard
  return "Valid user"; // happy path
}
//add(4, 5);
//Function expression - not hoisted
const add = function (a, b = 4) {
  return a + b;
};
add(4, 5);
let anotherAdd = add;
anotherAdd(6, 7);
console.log(typeof anotherAdd);
console.log(add(5, 6));
function abcd(anotherfunction, andoneMorefunction) {}
console.log(typeof add);
outputOfFunction = add(4);
console.log(outputOfFunction);
add();

//In JavaScript, a function can return a function call.
function makeValidator(minLength) {
  return function (password) {
    // returns a new function
    return password.length >= minLength;
  };
}
const normalUser = makeValidator(8);

const adminUser = makeValidator(16);
function adminUser(password) {
  return password.length >= 16;
}

let userPassword = "abc@1#weqw";
let adminPassword = "Ksdheriskfal";
console.log("Is a allowed user passowrd", normalUser(userPassword));
console.log("Is a allowed Admin passowrd", adminUser(adminPassword));
