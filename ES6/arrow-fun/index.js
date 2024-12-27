// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(1, 5));

// let multi = (a, b) => {
//   return a * b;
// };

// console.log(multi(12, 65));

// const hello = (a) => "Hello World! " + a;

// console.log(hello(12));

// difference between regular function and Arrow function

function sum1(a, b) {
  return a + b;
}

console.log("regular function", sum1(34, 12));

const sum2 = (a, b) => {
  return a + b;
};

console.log("arrow function", sum2(12, 20));

console.log("regular function", sum3(34, 12));
//output will be 46 because of we can get answer due to hoisting function it auto go to top of scope
function sum3(a, b) {
  return a + b;
}

console.log("arrow", sum4(12, 1)); //throw error
// we can't access arrow function before initialization because here sum4 is treated as variable and due to temporale dead zone
const sum4 = (a, b) => {
  return a + b;
};
