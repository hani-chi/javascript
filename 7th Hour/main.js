// arrays and for loops

let fnames = ["anna", "elvis", "joe"];
let lname = "smith";

let fullName = [];

//for loop
for (let i = 0; i < fnames.length; i++) {
  console.log(i);
  console.log(fnames[i]);
  const names = `${fnames[i]} ${lname}`;

  fullName.push(names);
}

console.log(fnames);
console.log(fullName);

// function, return, arrays, for loop
// end of month expenses

const gas = [20, 40, 100];
const food = [10, 45, 50];

function calcTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});

// reference vs value
// primitive is a fundamental data type that cannot be broken down into a more simple data type
// primitive DATA TYPES: string, number, symbol, boolean, undefined, and null
// arrays, functions, objects = objects
// typeof

//when assigning p. data type value to a variable any changes are
//made directly to that value, without affecting original value

let num1 = 1;
let num2 = 2;
num2 = 7;

console.log(`first number is ${num1}`);
console.log(`second number is ${num2}`);
// when assigning non-prim. data type value to a variable is done
//by reference so any changes will affect all the references

let person = { fname: "elvis" };
let person2 = person;

person2.fname = "dave";
console.log(`first person is ${person.fname}`);
console.log(`second person is ${person2.fname}`);

// null and undefined
// both represent 'no value'
// undefined - JS cant find value for this variable (didnt declare or assign a variable)
// null - is set by dev (assigned null to a variable)

let number = 22 + null; // (22 + 0)
let number2 = 22 + undefined; // NaN (not a number)

// truthy and falsy
// falsy values: "", '', ``, 0, -0, NaN, false, null, undefined
// truthy values: everything else

const bool1 = true;
const bool2 = 2 > 1;
const text = "";

if (text) {
  console.log(`hey the value is truthy!`);
} else {
  console.log("hey its falsy -_-");
}

//ternary operator
// condition ?
