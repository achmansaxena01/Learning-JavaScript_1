"use strict";
console.log("\n----------------Test Result Array:-----------------\n");

let testResults = [{
        name : "Login Test",
        result : "PASSED",
        duration : 2.5
    },
    {
        name : "Logout Test",
        result : "FAILED",
        duration : 1.8
    },
    {
        name : "Search Test",
        result : "PASSED",
        duration : 3.2
    },
    {
        name : "Checkout Test",
        result : "SKIPPED",
        duration : 0.0
    },
    {
        name : "Payment Test",
        result : "PASSED",
        duration : 2.1
    }
];

let total_test = 0;
let failed_test = 0;
let passed_test = 0;
let skipped_test = 0;
let total_duration = 0;

console.log("Test Execution report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Test Result : \n");
for(let i of testResults){
    console.log(`User ${(testResults.indexOf(i)+1)} : `);
    console.log(`  Name : ${i.name}`);
    console.log(`  Result : ${i.result}`);
    console.log(`  Duration : ${i.duration}s\n`);
    total_test++;
    if(i.result.toUpperCase().trim() === "PASSED")
        passed_test++;
    if(i.result.toUpperCase().trim() === "FAILED")
        failed_test++;
    if(i.result.toUpperCase().trim() === "SKIPPED")
        skipped_test++;
    total_duration = total_duration + i.duration;
}

console.log("Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(` Total tests : ${total_test}`);
console.log(` Passed : ${passed_test} (${((passed_test/total_test) * 100).toPrecision(4)} %) `);
console.log(` Failed : ${failed_test} (${((failed_test/total_test) * 100).toPrecision(4)} %) `);
console.log(` skipped : ${skipped_test} (${((skipped_test/total_test) * 100).toPrecision(4)} %) `);
console.log(` Total duration : ${total_duration}s`);
console.log(` Average duration : ${total_duration/total_test}s`);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
