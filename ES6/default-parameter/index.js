// Similar to Python and other languages, you can now declare default values
//for parameters passed in to a function.
function fun(name, age = 20) {
  console.log(name, age);
}

fun("jahangir");

// You can also assign default values when using destructuring assigment on objects.

const { age = 21, name = "jahangir" } = { name: "vikash" };
console.log(age, name);
