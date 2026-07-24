//Coercion;
let output = "5" + 3; //Javascropt converts number to string. and then concatenates.
console.log(output);
let guess = "10" - 3;
console.log(guess);
let nowWhat = "abc" - 5;
console.log(nowWhat);

let tellMeNow = true + 1;
console.log(tellMeNow);
tellMeNow = "abc" + true;
console.log("with String", tellMeNow);

let thisIsInteresting = null + 1;
console.log(thisIsInteresting);
thisIsInteresting = null + "ABC";
console.log(thisIsInteresting);

let thisIsGoingTobe = undefined + 5;
console.log(thisIsGoingTobe);

thisIsGoingTobe = undefined + "XYZ";
console.log(thisIsGoingTobe);

let howBoolean = null + true;
console.log(howBoolean);
howBoolean = undefined + false;
console.log(howBoolean);
/**
 * - with undefined, it is NaN with number,boolean and with string it is concatenation
 * - null - is zero with number and boolean
 * - other operators with string and number, string gets converted to number
 * - plus sign with other other than string are converted to string and concatenation
 */

let loose = "5" == 5;
console.log(loose);

let guessAgain = "5" === 5;
console.log(guessAgain);
