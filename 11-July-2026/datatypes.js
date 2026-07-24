/**
 * Revision:
 * variables
 * var, let, const
 * data types
 * - string
 * - number
 * - boolean
 * - undefined
 * - null
 * - Symbol
 * - BingInt
 *
 * - Arithmetic Operators, assignment operators, i++, ++i, i--, --i
 * - concatenation
 */

let option = 5;
if (true) {
  //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
  let score = 100;
  console.log("After declaration:", score);
  console.log(score);
}
//hoisting
console.log(score); //cannot use this as it is block scope and works within if only
