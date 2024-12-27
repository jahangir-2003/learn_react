// The rest operator in JavaScript allows a function
// to accept an indefinite number of arguments as an array.
//  It is represented by three dots (...) followed by
// the parameter name and must be the last parameter in the function.
// This enables flexible and dynamic argument handling

// Important: The rest parameter must be the last argument to the function.

// syntax
function functionName(...parameters) {
  // statements
}

// example---->

function join(seprate, ...values) {
  // console.log(seprate, " ", values);

  return values.join(seprate);
}

console.log(join(" | ", "one", "two"));

console.log("\n");
function sum(...values) {
  console.log(values);
  return values.map((item) => item * item);
}

console.log(sum(1, 2, 3, 5));
