console.log("\n----------------Test Data Generator-----------------\n");
// Function to generate email
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

// Function to generate username
function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

// Function to generate password
function generatePassword(prefix) {
    return prefix + "@123";
}

function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

// Use helper functions from Part 1
let user1 = generateTestUser("John", "Doe");
let user2 = generateTestUser("Jane", "Smith");

console.log(user1);
console.log(user2);