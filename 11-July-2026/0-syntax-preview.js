// ─────────────────────────────────────────────────────────────────────────────
//  DAY 1 — A FIRST LOOK AT JAVASCRIPT SYNTAX
//  Don't worry about memorising this today.
//  We're just getting your eyes used to the shapes on the screen.
// ─────────────────────────────────────────────────────────────────────────────

// ── GLOBAL VARIABLE ──────────────────────────────────────────────────────────
//  Lives outside every curly brace { }
//  The whole program can see and use it.

let clinicName = "City Health Clinic";

// ── FUNCTION ─────────────────────────────────────────────────────────────────
//  A reusable block of instructions wrapped in curly braces { }
//  LOCAL VARIABLE: `greeting` exists only inside this function's { }

function welcomePatient(patientName) {
  // <── ( ) holds input
  let greeting = "Welcome to " + clinicName; // local variable
  console.log(greeting + ", " + patientName + "!");
} // <── function ends here

// ── BLOCK SCOPE  (let) ───────────────────────────────────────────────────────
//  Every pair of { } creates a new "block".
//  Variables declared with `let` stay INSIDE that block.

function checkAgeWithLet(age) {
  if (age >= 18) {
    // <── block starts
    let status = "Adult patient"; // only visible inside this if-block
    console.log("Inside block:", status);
  } // <── block ends, `status` is gone

  // console.log(status);                    // ← CRASH — `status` is out of scope
}

// ── var AND ITS CHALLENGES ────────────────────────────────────────────────────
//  `var` is the OLD way to declare variables (before 2015).
//  It does NOT respect block scope — it leaks OUT of if/for blocks.
//  It only respects function boundaries, not { } boundaries.

//  CHALLENGE 1 — var leaks out of blocks
function checkAgeWithVar(age) {
  if (age >= 18) {
    // <── block starts
    var status = "Adult patient"; // declared inside the if-block...
    console.log("Inside block:", status);
  } // <── block ends

  console.log("Outside block:", status); // ← still works! var leaked out
  //   `let` would have crashed here
}

//  CHALLENGE 2 — var is hoisted (moved to the top invisibly)
//  JavaScript quietly moves the DECLARATION (not the value) to the top of the function.
//  So you can reference a var before the line where you wrote it — but it reads as `undefined`.

function demonstrateHoisting() {
  console.log("Before declaration:", score); // prints: undefined  (not a crash!)
  var score = 100;
  console.log("After declaration:", score); // prints: 100

  // With `let` this WOULD crash: "Cannot access 'score' before initialization"
}

//  CHALLENGE 3 — var in a for-loop leaks the loop counter
function showLoopLeak() {
  for (var i = 0; i < 3; i++) {
    // `i` declared with var
    console.log("Inside loop:", i); // 0, 1, 2
  }
  console.log("After loop:", i); // 3 — var leaked out of the for-block!
}

function showLoopFixed() {
  for (let j = 0; j < 3; j++) {
    // `j` declared with let
    console.log("Inside loop:", j); // 0, 1, 2
  }
  // console.log("After loop:", j);          // ← CRASH — let stays inside the block
}

// ── "use strict" ─────────────────────────────────────────────────────────────
//  A string you place at the very top of a file (or function) that tells
//  JavaScript to apply stricter rules — turning silent mistakes into loud errors.
//
//  Without strict mode, JavaScript quietly lets certain bad code run.
//  With strict mode, the same code throws an error immediately so you catch
//  the problem early instead of hunting a mysterious bug later.

//  HOW TO ENABLE — place the string at the very first line of your file:
//
//      "use strict";
//      // ... rest of your code

//  Or inside a single function only:
//
//      function myFunction() {
//          "use strict";
//          // strict rules apply here only
//      }

//  NOTE: ES6 modules (import/export) and classes are ALWAYS in strict mode
//  automatically — you don't need to write "use strict" in those files.

//  STRICT MODE CATCH 1 — using a variable without declaring it
//  Without strict mode this silently creates a global variable (a nasty bug).
//  With strict mode it throws: ReferenceError: patientAge is not defined

function strictCatch1_undeclaredVariable() {
  "use strict";
  // patientAge = 30;                        // ← CRASH in strict mode
  //   Without strict: silently becomes global!
  let patientAge = 30; // ← correct way
  console.log("Patient age:", patientAge);
}

//  STRICT MODE CATCH 2 — duplicating a parameter name
//  JavaScript normally allows this (last one wins, silently).
//  Strict mode throws: SyntaxError — duplicate parameter name not allowed

// function badFunction(name, name) {         // ← SyntaxError in strict mode
//     "use strict";
//     console.log(name);
// }

//  STRICT MODE CATCH 3 — deleting a variable
//  Without strict mode, `delete` on a variable silently does nothing.
//  Strict mode throws: SyntaxError — Delete of an unqualified identifier

function strictCatch3_deleteVariable() {
  "use strict";
  let record = "patient-001";
  // delete record;                          // ← SyntaxError in strict mode
  console.log("Record:", record);
}

//  STRICT MODE CATCH 4 — writing to a read-only property
//  Without strict mode this silently fails (the value just doesn't change).
//  Strict mode throws: TypeError — Cannot assign to read only property

function strictCatch4_readOnlyProperty() {
  "use strict";
  const config = Object.freeze({ maxPatients: 50 }); // freeze makes all props read-only
  // config.maxPatients = 100;              // ← TypeError in strict mode
  //   Without strict: silently ignored
  console.log("Max patients:", config.maxPatients);
}

//  QUICK COMPARISON — the same mistake, two different outcomes
//
//  WITHOUT strict mode:          WITH strict mode:
//  ─────────────────────         ──────────────────────────────
//  typoVariable = 5;  → OK       typoVariable = 5;  → ReferenceError
//  Looks like it works, but      Crashes immediately, points you
//  creates an invisible global   to the exact line of the mistake

// ── CLASS ─────────────────────────────────────────────────────────────────────
//  A blueprint for creating objects.
//  Uses curly braces { } to group its constructor and methods together.

class Patient {
  // <── class block starts

  constructor(name, age) {
    // <── runs when a new Patient is created
    this.name = name; //     stores data on the object
    this.age = age;
  } // <── constructor block ends

  greet() {
    // <── method (a function inside a class)
    let message = this.name + " is " + this.age + " years old.";
    console.log(message);
  }

  isAdult() {
    if (this.age >= 18) {
      // <── nested block inside a method
      let label = "Adult"; //     local to this if-block
      return label;
    } else {
      let label = "Minor"; //     different block — different variable
      return label;
    }
  }
} // <── class block ends

// ── PUTTING IT ALL TOGETHER ───────────────────────────────────────────────────

let patient1 = new Patient("Aisha", 34);
let patient2 = new Patient("Ben", 15);

welcomePatient(patient1.name); // "Welcome to City Health Clinic, Aisha!"
welcomePatient(patient2.name); // "Welcome to City Health Clinic, Ben!"

checkAgeWithLet(patient1.age); // "Inside block: Adult patient"
checkAgeWithVar(patient1.age); // "Inside block: Adult patient"
// "Outside block: Adult patient"  ← var leaked!

demonstrateHoisting(); // "Before declaration: undefined"
// "After declaration: 100"

showLoopLeak(); // loop prints 0,1,2 then leaks i=3
showLoopFixed(); // loop prints 0,1,2 — j stays contained

patient1.greet(); // "Aisha is 34 years old."
console.log(patient1.isAdult()); // "Adult"
console.log(patient2.isAdult()); // "Minor"

// ─────────────────────────────────────────────────────────────────────────────
//  WHAT TO NOTICE (we will revisit each of these today and tomorrow)
//
//  { }   Curly braces mark where a block STARTS and ENDS
//        — functions, classes, if/else, for-loops all use them
//
//  let   Block-scoped. Variable lives only inside the { } it was declared in.
//        Crashes if you try to use it before its declaration line.
//
//  const Same block-scope rules as let, but the value cannot be reassigned.
//
//  var   Function-scoped (old style). Ignores if/for block boundaries.
//        Gets "hoisted" — declaration silently moves to top of the function.
//        Avoid in modern code; you will still see it in older codebases.
//
//  "use strict"  Written at the top of a file or function.
//        Turns silent JavaScript mistakes into loud, immediate errors.
//        ES6 classes and modules are always strict automatically.
//        Rule of thumb: always use it in script files.
//
//  ( )   Parentheses hold inputs going INTO a function (parameters)
//
//  class A template; `new Patient(...)` stamps out a fresh copy each time
//
//  this  Inside a class, refers to the specific object being worked on
// ─────────────────────────────────────────────────────────────────────────────

let option = 5;
if (true) {
  //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
  let score = 100;
  console.log("After declaration:", score);
  console.log(score);
}
//hoisting
console.log(score); //cannot use this as it is block scope and works within if only
