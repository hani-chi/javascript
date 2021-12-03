// console.log("log");

// document.querySelectorAll(".btn").forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("Hello CAPS");
//   });
// });

// helper methods

// alert({ name: "HiHi Hani", age: 17, email: "hanah@hanah.com", active: true });
// document.write({ name: "HiHi Hani", email: "hanah@hanah.com" });
// console.log({ name: "HiHi Hani", email: "hanah@hanah.com" });

// Declare Variable

let age1 = 17;
// const age = 12;

console.log(age1);

// let lastName;
// lastName = "Sakinovic";

const firstName = "Hanah";
const lastName = "Sakinovic";

let fullName;

fullName = firstName + " " + lastName;

// OR to define on single line: let fullName = firstName + ' ' + lastName;

console.log("Hey! My full name is " + fullName + " :3");

// console.log(lastName);

const finn = "Adventure Time c'mon grab your friends!";

console.log(finn);

const website = "google";

const url = "http://www." + website + ".com";

console.log(url);

// let a = 5;
// let b = 10;

// age = 34;

// console.log(`Fifteen is ${age}`);

let name = "hanah"; //string
// let age = 10; //number
// let age = "46"; //STRING, not a #; REMEMBER strings are BLACK and #s are BLUE
let userProfile = true; //boolean

// functions

function checkAge(age) {
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
checkAge(21);

/*
loops: 1st statement are ran before the loop, 
2nd terminates loop, 
3rd is run after every i (iterator) of a loop
*/

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// numbers

let age = 34; // integer
let age2 = 2.2; // decimal

const add = age + age2;
const sub = age - age2;
const mult = age * age2;
const div = age / age2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

// +=. -=. *=, ++, --, % (module)

let num = 40;
num += 4;
num -= 1;
num++;
num--;
console.log(num);

// % gets remainder for when you do division

let account = 10;

let rem = account % 3;
console.log(rem);

let pizza = 10;
let children = 3;

const slices = pizza % children;
console.log("i will have " + slices + " for myself");

// basic math operations

const random = 4 + 6 + 10 * 10;
console.log(random);

const random2 = (4 + 6 + 10) * 10;
console.log(random2);

let num1 = 3;

let num3 = num1 - "1";
console.log(num3);

// example of implicit type

const randomNumber = 9;

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type " + value);
  console.log("sum of two values");
  console.log(randomNumber + value);
});

// data types

// string
let abby = "abby rocks";
console.log(typeof abby);

//number
let ron = 25;
console.log(typeof ron);

//boolean
let hanah = true;
let alex = false;
console.log(hanah);
console.log(alex);

//null
let result = null;
console.log(typeof result);

//undefined
let fname;
console.log(typeof fname);

//array

const friend1 = "friend 1";
const friend2 = "friend 2";
const friend3 = "friend 3";

let friends = ["friend 1", "friend 2", "friend 3", "zachawy uwu"];

// change value
friends[3] = "Me";

let bestFriend = friends[3];
console.log(bestFriend);
