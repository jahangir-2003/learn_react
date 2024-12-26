var x = 1;
var y = 2;

function printer() {
  var x = 3;
  var z = 4;
  console.log(x); // logs 3
  console.log(y); // logs 2
  console.log(z); // logs 4
}

printer();
console.log(x); // logs 1
// console.log(z); // throws a ReferenceError it means we can't acces z outside block

console.log("\n");

let a = 1;
let b = null;

for (let i = 0; i < 3; ++i) {
  console.log(a); // logs 1 3 times
  console.log(i); // logs 0, 1, then 2
  b = i;
}

console.log(b); // logs 2
// console.log(i) // throws a ReferenceError
