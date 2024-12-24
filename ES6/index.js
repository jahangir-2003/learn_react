let variable = 42;
const a = 5;

console.log("let ==>", variable);
console.log("const =>", a);

variable = 50; // it means when we initial any variable using let then we can reinitialize
// a = 55;//we will get error this means we can't reinitialize const variable
console.log(variable);
console.log("const ->", a);

// let ==>let is for variables that you may want to reassign and let is block scope

// const =>const is for variables that you don’t want to reassign and const is also block scope

// Example====>
