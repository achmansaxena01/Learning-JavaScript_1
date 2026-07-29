console.log("\n----------------Test Validator Function-----------------\n");

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

// Test it
console.log(validateEmail("test@example.com"));  // VALID
console.log(validateEmail("notanemail"));         // INVALID
