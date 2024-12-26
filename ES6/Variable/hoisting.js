//  Hoisting is JavaScript's default behavior of
//  moving all declarations to the top
//  of the current scope (to the top of the
//  current script or the current function).

x = 10;
console.log(x);
var x;

y = 21; //The variable is in a "temporal dead zone" from
//the start of the block until it is declared:

let y;
console.log(y); //ReferenceError: Cannot access 'y' before initialization
// when we declare variable as const or let because it is block scope variable

z = 12;
const z = 12;
console.log(z);
