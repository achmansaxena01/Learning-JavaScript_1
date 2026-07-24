
let username = "testuser";
let password = "Test@123";
let email = "" ;
let age = 1;

function validateCompleteUser(username, password, email, age){
    console.log("---------------------------------------------------------------");
    console.log("Validating test user...\n");
    if (username.trim() !== "" && username.length>2 && username.length<21){
        if (password.trim() !== "" && password.length>7){
            if (email.trim() !== "" && email.includes('@') && email.includes('.')){
                if(17<age<121){
                    console.log("Checking username... ✓");
                    console.log("Checking password... ✓");
                    console.log("Checking email... ✓");
                    console.log("Checking age... ✓");
                    return ("✅ All validations passed - User is valid!");
                    }
                else
                    return ("❌ Age should be between 18 and 120 (current: "+age) ;
                }
            else 
                return ("❌ Email should NOT be empty AND contains both '@' and '.' (current: "+email) ;
        }
        else 
            return ("❌ Password should NOT be empty AND length should be at least 8 characters (current: "+password.length) ;
    }
    else 
        return ("❌ Username must NOT be empty AND length should be between 3-20 characters (current: "+username) ;
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
