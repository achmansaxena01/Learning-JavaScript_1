"use strict";

console.log("========================================");
console.log("         TEST USER DATABASE");
console.log("========================================\n");
let id = 1;
function testdata(FirstName , LastName = "Saxena"){

        console.log("User : " + id);
        console.log("-------------------------");
        console.log("Name : " + FirstName + " "+ LastName);
        console.log("Username : " + FirstName + id);
        console.log("Email : "  + FirstName.toLowerCase() + "."+ LastName.toLowerCase() + "."+ id + "@gmail.com");
        console.log("Password : " + "password" + FirstName + LastName + id);
        console.log("\n================================================\n")
        id++;
}

testdata("Achman");
testdata("Anubhav","Saxena");
testdata("Kaashvi","Khare");
testdata("Shrankhla", "Kahre");