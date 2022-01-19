// // unary operator - typeof

// let text = "some text";

// console.log(typeof text);

// //binary operator - assignment
// let text1 = "some text";

// // ternary operator
// // condition ? (runs if true) : (runs if false)
// // : means otherwise
// // exchangeable with if else statements

// value ? console.log(`it is true`) : console.log(`it is false`);

// let value = true;

// if (value) {
//   console.log(`it is true`);
// } else {
//   console.log(`it is false`);
// }

// global scope vs local scope
// any variable outside of code block ({}, function, or if else) is said to be in global scope and vise versa
// cannot be accessed from outside block
// if - NOT VAR

let fname = "hanah"; // global scope
fname = "abby";

function calc() {
  console.log(`first ${fname}`); // local scope
  fname = "alex";
  function inner() {
    fname = `imani`;
    console.log(`this is from inner function ${fname}`);
  }
  inner();
}
calc();

// JS does variable look up first local scope, then global, then undefined

{
  // this is a code block
}

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 20;
  let result = num1 + num2 + globalNumber;
  console.log(result);
  function mult() {
    const globalNumber = 2;
    let multResult = result * globalNumber;
    console.log(multResult);
  }
  mult();
}
add(2, 6);

// callback function, higher order function, functions are first class objects/citizens

// functions are first class objects - stored in a variable (expression)
//passed as an argument to another function, return from the function (closure).

// higher order function - accepts another function as an argument or
//return another function as a result

// callback function - passed to another function as an argument and exceuted
//inside that function

// CALLBACK FUNCTION
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
morning("hanah");

function afternoon(name) {
  return `good afternoon ${name.repeat(3)}`; //.repeat mean to repeat data however many times
}

// HIGHER ORDER FUNCTION
function greet(name, cb) {
  const myName = "hanah";
  console.log(`${cb(name)}, my name is ${myName}`);
}
greet("elvis", morning); //no need to invoke cb function
greet("imani", afternoon);

// powerful array methods
// forEach. map, filter, find, reduce
// iterate over array - no for loop required
// accepts callback function as an argument, calls cb against each item in array.
// references item in the cb parameter

let friends = ["hanah", "imani", "manny", "abby"];

// show all friends one by one
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[1]);
// }

let people = [
  {
    name: "hanah",
    age: 18,
    position: "student",
  },
  {
    name: "akir",
    age: 12,
    position: "brother",
  },
  {
    name: "alex",
    age: 1,
    position: "intern",
  },
];

//forEach - does not return new array

// function showPerson(person) {
//   console.log(person);
// }
//people.forEach(showPerson);

//instead

// anonymous function
people.forEach(function (item) {
  console.log(item.age);
});

// or

people.forEach((item) => {
  console.log(item.age);
});
