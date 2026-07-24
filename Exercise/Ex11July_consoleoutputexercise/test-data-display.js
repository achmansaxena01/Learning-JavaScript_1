"use strict";

console.log("=============");
console.log("TEST DATA SET");
console.log("=============\n");
let id;
function testdata(username){
    for (id = 1;id<=5;id++){
        console.log("User : " + id);
        console.log("Username : " + username + id);
        console.log("Email : "  + username + id + "@gmail.com");
        console.log("Password : " + "password" + id + username);
        console.log("\n================================================\n")
    }
}

testdata("Achman");