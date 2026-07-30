"use strict";
console.log("\n----------------Object Methods and 'this' Keyword:-----------------\n");

let testRunner = {
    name : "Login Test",
    totalTests: 5,
    passedTests: 0,
    failedTests: 0,

    start : function(){
        console.log("Running test suite: "+ this.name);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    },
    pass() {//increments passedTests and prints the count
        this.passedTests++;
        console.log("✓ Test passed! Total passed: "+this.passed_test);
        },
    fail() {//increments failedTests and prints the count   
        this.failedTests++;
        console.log("✗ Test failed! Total failed: "+this.failed_test);
        },
    getReport() {//prints a summary with pass rate
        this.start();
        this.pass();
        this.pass();
        this.pass();
        this.fail();
        console.log("\nTest Suite Report:");
        console.log(` Name : ${this.name}`);
        console.log(` Total Test : ${this.totalTests} `);
        console.log(` Passed : ${this.passedTests} (${((this.passedTests/this.totalTests) * 100).toPrecision(4)} %) `);
        console.log(` Failed : ${this.failedTests} (${((this.failedTests/this.totalTests) * 100).toPrecision(4)} %) `);
        console.log(` Not yet run: ${(this.totalTests-(this.passedTests + this.failedTests))}`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
        }
    }

testRunner.getReport();
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

let testCase = {
    name : "Login Test",
    status : "notdefined",
    duration : 0 ,
    startTime : 0 ,
    start() {//sets status to "RUNNING" and records start time
        this.status = "RUNNING";
        this.startTime = Date.now()-Math.random();
    },
    pass() {//sets status to "PASSED" and calculates duration
        this.status = "PASSED";
        this.duration = Date.now()-this.startTime;
    },
    fail(reason) {//sets status to "FAILED" with reason
        this.status = "FAILED";
        this.reason = reason;
    },
    getReport() {
        console.log("Test Case with Methods:\n");
        this.start();
        console.log("✓ Started: " +this.name );
        console.log(" Status : " +this.status); 
        this.pass();
        console.log("\n✓ Login Test : " +this.status);
        console.log(" Duration : " +this.duration +"s");
        this.fail("no idea");
        console.log("\n✓ Login Test : " +this.status);
        console.log(" Reason : " +this.reason +"s");

 //   ✓ Login Test PASSED
  //    Duration: 0.05s
  //  ```
    }
};

testCase.getReport();