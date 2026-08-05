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
    password: generatePassword("Anubhav"),
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