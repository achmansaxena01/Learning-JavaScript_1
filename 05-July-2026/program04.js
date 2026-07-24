//"use strict";
const API_KEY = "truyrfyfjffk";
console.log(API_KEY);
let counter = 5;
counter = counter +5;
console.log(counter);

counter++; //first use then increment
console.log(counter); //11

++counter; //first increment then use
console.log(counter); //12

let guess = 5 + ++counter;
console.log(guess);//18, 13

guess = 5 + counter++;
console.log(guess);//

console.log("total" , 5 + 4);
console.log("total" + 5 + 4);
console.log("total" + (5 + 4));
//+ ->airthmetic operators if both operands are numbers
//+ ->when one of the operand is a string then it does not do airthmetic operators, it concatanate


