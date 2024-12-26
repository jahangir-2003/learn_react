// Destructuring in JavaScript is a powerful feature
// that allows you to unpack values from arrays or
// properties from objects into distinct variables.
// This syntax provides a concise and readable way to extract
// data from complex structures.

// Object
const person = {
  fName: "jahangir",
  lName: "Alam",
  age: 21,
};

// array
const fruit = ["apple", "mango"];

// unpacking or destructuring of object

let { fName, lName, age } = person;

// unpacking or destructuring of array
let [first, second] = fruit;

// unpacking or destructuring of array
console.log(fName);
console.log(lName);
console.log(age);

console.log("first==>:", first, "  ", "Second==>:", second);

console.log("\n");

const str = "jahangir@gmail.com";

const rgx = /\@(\w+\.\w+)/;

let [, match] = str.match(rgx) || [];

console.log(match);

console.log("\n");

//swap two numbers

let a = 10;
let b = 32;

console.log("before swaping");
console.log("a->", a, "b->", b);

[b, a] = [a, b];
console.log("After swaping");
console.log("a->", a, "b->", b);
