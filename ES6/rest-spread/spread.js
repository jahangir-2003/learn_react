// The spread operator consists of prepending
// three dots to an array when passing it as a parameter to a function.
//  This “spreads” the array values across the available named parameters.

function sum(first, second) {
  //it will take 1 and 2
  //   return 1+2
  return first + second;
}
const num = [11, 2, 1, 12, 435, 545, 9];
console.log(sum(...num));

const [one, two, ...rest] = num;
console.log(rest);

// we can use spread operator to make a shallow copy of an array

const arr = [12, 1213, 435, 242];

const arr1 = [...arr];
arr1.push(12); //after push element arr remains unaffected
console.log("initial array=>", arr, "copied array=>", arr1);

// it is used to combine array and element

// without using spread

console.log("\n");
console.log("concat two arrays");
let newArr = [12, 1213, 2453];

const newArr1 = [121, 5, 3, 6];

arr1.concat(newArr1);
console.log("without spread", arr1);

const a = [12, 21, 23];
const b = [43, 6, 87, 97];

const updatedArray = [...a, ...b];
console.log("using spread operator=>  ", updatedArray);
