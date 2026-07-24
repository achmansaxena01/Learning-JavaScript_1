let score; //only declaration
score = 4;
let name = "Mark";

function login(user, pass) {
  console.log("Enter Username");
  copnsole.log("Enter Password");
  console.log("Submit Button");
}

function demonstrateHoisting() {
  let option = 5;
  if (true) {
    //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
    let score = 100; //Block scope
    console.log("After declaration:", score);
    console.log(score);
  }
  //hoisting
  console.log(score); //cannot use this as it is block scope and works within if only
}

let option = 5;
if (true) {
  //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
  let score = 100;
  console.log("After declaration:", score);
  console.log(score);
}
//hoisting
console.log(score); //cannot use this as it is block scope and works within if only

let option = 5;
if (true) {
  //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
  let score = 100;
  console.log("After declaration:", score);
  console.log(score);
}
//hoisting
console.log(score); //cannot use this as it is block scope and works within if only
