//In JavaScript, a function can return a function.
function makeValidator(minLength) {
  return function (password) {
    // returns a new function
    return password.length >= minLength;
  };
}

function add(a, b) {
  return a + b;
}
normalUser("abf@asda");
normalUser("asda");
normalUser = makeValidator(8);

const normalUser = makeValidator(8);

const adminUser = makeValidator(16);

let userPassword = "abc@1#weqw";
let adminPassword = "Ksdheriskfal";
console.log("Is a allowed user passowrd", normalUser(userPassword));
console.log("Is a allowed Admin passowrd", adminUser(adminPassword));
