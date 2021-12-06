// calc 1 in = 2.54 cm

function calc(pants) {
  // console.lol("the value for height in cm is " + pants * 2.54 + "cm");
  // return pants * 2.54;
  let newValue = pants * 2.54;
  return newValue;
}

const wallW = 20;
const wallH = 40;

let width = calc(10);
let height = calc(wallH);

let dimensions = [width, height];
console.log(dimensions);

// function declaration
function addValues(num1, num2) {
  return num1 + num2;
}

console.log(addValues(5, 5));

let firstValue = addValues(2, 2);
console.log(firstValue);
let secondValue = addValues(3, 3);
console.log(secondValue);

// function expression

let add = function (num1, num2) {
  return num1 + num2;
};
console.log(add(3, 5));

// arrow functions
let mult = (num1, num2) => num1 * num2;
console.log(mult(30, 50));

// Objects (collection of properties)
// methods (aka functions)
// dot notation

let person = {
  name: "ronald",
  age: 18,
  education: false,
  married: "to his ego",
  virgin: true,
  friends: ["ron,", "ego", "charlie"],
  greeting: function () {
    console.log("Welcome to CAPS");
  },
};

// dot notation
console.log(person.name);
console.log(person.friends[0]);
person.greeting(); // method

person.name = "butthead";
console.log(person);

// assigning to variable
const age = person.age;

console.log(age);

// conditional statements
// >, <, >=, <=, ==, ===,!=, !===
let userActive = false;

if (false) {
  console.log("this user is active");
} else {
  console.log("this user is NOT active");
}

/* let value = 5 > 25;

if (value) {
    console.log('this is correct');
} else if {
    console.log("this is correct");
} else {
    console.log('this is not correct');
} */

let num1 = 6;
let num2 = 6;
const result = num1 >= num2;

if (num1 > num2) {
  console.log("first # is bigger than first");
} else if (result) {
  console.log("both #s are equal");
} else {
  console.log("second # is bigger than first");
}

if (age > 10) {
  console.log("older than 10");
} else if (age === 10) {
  console.log("is exactly 10");
} else {
  console.log("younger than 10");
}

let fname = "joe";

if (fname) {
  console.log("you are not joe you are hanah");
} else {
  console.log("hi joe");
}

/* function checkAge(age) {
    // = is to declare variables; == is auto convert diff types to each other; === is exact or for checking
    if (age > 10) {
      console.log("older than 10");
    } else if (age === 10) {
      console.log("is exactly 10");
    } else {
      console.log("younger than 10");
    }
  }
  
  checkAge(8);
  checkAge(10);
  checkAge(21); */
