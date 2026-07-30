"use strict";
console.log("\n----------------Complete Test Tracker:-----------------\n");

let testTracker = {
    suiteName: "Login Module",
    environment: "Staging",
    browser: "Chrome",
    tests: [{
        name : "Valid credentials",
        result : "PASSED",
        duration : 2.5
    },
    {
        name : "Invalid password",
        result : "FAILED",
        duration : 1.8
    },
    {
        name : "Empty username",
        result : "PASSED",
        duration : 1.2
    },
    {
        name : "Remember me checkbox",
        result : "SKIPPED",
        duration : 2.1
    },
    {
        name : "Payment Test",
        result : "PASSED",
        duration : 4.1
    }], //(array of test objects with name, result, duration)
    suite_information(){
        console.log("Suite Information:");
        console.log(` SuiteName : ${this.suiteName}`);
        console.log(` Environment: ${this.environment}`);
        console.log(` Browser :  ${this.browser}\n`);
    },
    test_result(){
        console.log("Test Results:");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        this.total_test = 0;
        this.passed_test = 0;
        this.failed_test = 0;
        this.skipped_test = 0;
        this.total_duration = 0;
        for(let i in this.tests){
            if(this.tests[parseInt(i)].result.toUpperCase().trim() === "PASSED"){
                console.log(`✓ Test ${parseInt(i)+1} : ${this.tests[parseInt(i)].name}`);
                this.passed_test++;
            }
            else if(this.tests[parseInt(i)].result.toUpperCase().trim() ==="FAILED"){
                console.log(`✗ Test ${parseInt(i)+1} : ${this.tests[parseInt(i)].name}`);
                this.failed_test++;
            }
            else if(this.tests[parseInt(i)].result.toUpperCase().trim() ==="SKIPPED"){
                console.log(`⊘ Test ${parseInt(i)+1} : ${this.tests[parseInt(i)].name}`);
                this.skipped_test++;
            }
            else 
                console.log(`  Test ${parseInt(i)+1} : ${this.tests[parseInt(i)].name}`);
            console.log(`  Result : ${this.tests[parseInt(i)].result}`);
            console.log(`  Duration : ${this.tests[parseInt(i)].duration}s\n`);
            this.total_test++;
            this.total_duration = this.total_duration + this.tests[parseInt(i)].duration;

        }
    },
    Statistics(){
        console.log("Summary Statistics:");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log(` Total tests : ${this.total_test}`);
        console.log(` Passed : ${this.passed_test} (${((this.passed_test/this.total_test) * 100).toPrecision(4)} %) `);
        console.log(` Failed : ${this.failed_test} (${((this.failed_test/this.total_test) * 100).toPrecision(4)} %) `);
        console.log(` skipped : ${this.skipped_test} (${((this.skipped_test/this.total_test) * 100).toPrecision(4)} %) `);
        console.log(` Total duration : ${this.total_duration}s`);
        console.log(` Average duration : ${this.total_duration/this.total_test}s`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
    },
    consolidation(){
        console.log("╔══════════════════════════════════════════╗");
        console.log("║       TEST SUITE EXECUTION REPORT        ║");
        console.log("╚══════════════════════════════════════════╝");
        this.suite_information();
        this.test_result();
        this,this.Statistics();
    }

}

testTracker.consolidation();
//testTracker.suite_information();
//testTracker.test_result();
//testTracker.Statistics();
console.log("------------------------------------------------------------------------")
