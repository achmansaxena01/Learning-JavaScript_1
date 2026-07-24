"use strict";

let Total_tests = 11;
let Passed_tests = 9;
let Failed_tests = 2;
let Pass_rate = (Passed_tests/Total_tests)*100.00;
let Test_suite_name = "Test execution 1";
let All_tests_passed = true;

console.log(Total_tests);
console.log(Passed_tests);
console.log(Failed_tests);
console.log(Pass_rate);
console.log(Test_suite_name);
console.log(All_tests_passed);

console.log("==========================================*=Test Execution Metrix=*=========================================\n");
console.log("|| Test Suite Name || Total Tests || Passed Tests || Failed Tests || Pass Rate || If All Tests are passed ||\n");
console.log("============================================================================================================\n");
console.log("||" + Test_suite_name +" ||      " + Total_tests +"     ||       "+ Passed_tests +"      ||       " + Failed_tests+"      ||  " + Pass_rate.toFixed(2) + "%   ||            "+All_tests_passed+"         ||\n");
console.log("============================================================================================================\n");
