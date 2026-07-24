function letScope() {
  let option = 5;
  //let score = 7;
  if (true) {
    //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
    let score = 100; //Block scope
    console.log("After declaration:", score);
    console.log(score);
  }
  //hoisting
  console.log(score); //cannot use this as it is block scope and works within if only
}

//letscope();
varScope();
function varScope() {
  var score;

  var option = 6;
  console.log(score);
  if (option === 6) {
    //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
    var score = 100; //function scope
    console.log("After declaration:", score);
    console.log(score);
  }
  //hoisting
  console.log(score); //cannot use this as it is block scope and works within if only
}
console.log(score);
