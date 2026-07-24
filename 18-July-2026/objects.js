/***
 * Collection of Key Value Pairs
 * For example, employee data as a single variable
 */

let test1 = {
  name: "Login Test",
  result: "PASSED",
  duration: 2.5,
};

let test2 = {
  name: "Logout Test",
  result: "FAILED",
  duration: 0.5,
  execute() {
    console.log("Execute this test case");
  },

  report: function () {
    console.log("Add this test case into report");
  },
};

test2.execute();
test2.report();

console.log(test1);
console.log(test1.name);
console.log(test1["name"]);
console.log(test1["duration"]);
console.log(test2.name);
test2.group = "Regression";
test2.name = "SignOut Test";
test2.duratin = 40;
console.log(test2);
delete test2.duration;
console.log(test2);
console.log(typeof test1);

let data = {
  salary: 40000,
  testStatus: "PASS",
};

let testData = {
  username: "testuser",
  password: "Test@123",
  sessionToken: "abc123", // Temporary data
};
//status;
let testCase = {
  name: "Login Test",
  status: "PENDING",
  duration: 0,
  startTime: null,

  start: function () {
    this.status = "RUNNING";
    this.startTime = Date.now();
    console.log("Started: " + this.name);
  },
};
testCase.start();

testCase = {
  name: "Login Test",
  result: "PASSED",
  duration: 2.5,
  browser: "Chrome",
  run() {
    name = "ABC";
    console.log("run");
  },
};

for (let key in testCase) {
  console.log(key + ": " + testCase[key]);
}

let keys = Object.keys(testCase);
console.log(keys);
