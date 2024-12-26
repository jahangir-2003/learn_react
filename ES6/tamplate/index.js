// Template literals, also known as template strings,
// are a feature in JavaScript that allows for easier creation
//  and manipulation of strings. They are enclosed by backtick (`)
// characters instead of single or double quotes and provide several
// advantages over traditional string literals.

// Before tamplate literals

function getFullName(title, fname, lname, degree) {
  return title + " " + fname + " " + lname + ", " + degree;
}
// returns 'Rear Admiral Grace Hopper, PhD'
console.log(getFullName("Rear Admiral", "Grace", "Hopper", "PhD"));

// After tamplate literal

console.log("\n");
console.log("After tamplate literal=>");

function getFullName(title, fname, lname, degree) {
  return `${title} ${fname} ${lname}, ${degree}`;
}
// returns 'Rear Admiral Grace Hopper, PhD'
console.log(getFullName("Rear Admiral", "Grace", "Hopper", "PhD"));

console.log("\n");

function showYourWork(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
}
// returns '3 + 4 = 7'
console.log(showYourWork(3, 4));
