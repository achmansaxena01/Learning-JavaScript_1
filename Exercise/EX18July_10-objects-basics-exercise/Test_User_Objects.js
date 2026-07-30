"use strict";
console.log("\n----------------Test User Objects:-----------------\n");

let User_1 = {
        username : "Achman_01",
        password : "ABcdef@12",
        email : "achman.saxena@gmail.com",
        role : "User"
    };
let User_2 = {
        username : "Kaashvi_01",
        password : "CDcdef@12",
        email : "kaashvi.saxena@gmail.com",
        role : "Admin"
    };
let User_3 = {
        username : "Shrankhla_01",
        password : "Shcdef@12",
        email : "shrankhla.saxena@gmail.com",
        role : "UsEr"
    };

let testUsers = [];
testUsers.push(User_1);
testUsers.push(User_2);
testUsers.push(User_3);

let admin_user =0;
let gen_user = 0;
let total_user = 0;
console.log("Test Users Database");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(testUsers);
for(let i of testUsers){
    console.log(`User ${(testUsers.indexOf(i)+1)} : `);
    console.log(`  Username: ${i.username}`);
    console.log(`  Password: ${i.password}`);
    console.log(`  Email: ${i.email}`);
    console.log(`  Role: ${i.role} \n`);
    total_user++;
    if(i.role.toLowerCase().trim() === "admin")
        admin_user++;
    if(i.role.trim().toLowerCase()  === "user")
        gen_user++;

}
Summary:
console.log("Summary:");
console.log(` Total users : ${total_user}`);
console.log(` Admins : ${admin_user}`);
console.log(` Regular users : ${gen_user}`);
