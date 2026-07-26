/**
* It has how many instance variables? 4
*/
 
/**
* A class contains the following
* Instance variables
* Constructor
* Instance Methods
* "this" keyword refers to the object which is calling the methods.
* Constructor is used to initialize the instance variables.
* Constructor is optional, but it is a good practice
* to use the constructor to initialize your instance variables.
*/
class Test {
  // Constructor
  constructor(name, priority = "MEDIUM") {
    this.name = name;
    this.priority = priority;
    this.status = "PENDING";
    this.errors = [];
  }
 
  // Instance methods
  start() {
    console.log(`  Starting: ${this.name} (${this.priority} priority)`);
    this.status = "RUNNING";
  }
 
  fail(error) {
    this.errors.push(error);
    this.status = "FAILED";
    console.log(`  ✗ ${this.name} FAILED: ${error}`);
  }
 
  pass() {
    this.status = "PASSED";
    console.log(`  ✓ ${this.name} PASSED`);
  }
 
  getReport() {
    return {
      name: this.name,
      priority: this.priority,
      status: this.status,
      errorCount: this.errors.length,
    };
  }
}
 
let uiTest = new Test("UI Test", "HIGH");
let securityTest = new Test("Security", "VERY HIGH");
uiTest.getReport();
securityTest.getReport();
console.log(uiTest.name);
console.log(uiTest.priority);
console.log(uiTest.status);
console.log(uiTest.errors);
uiTest.start();
console.log(uiTest.getReport());