// console.log("log");

// document.querySelectorAll(".btn").forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("Hello CAPS");
//   });
// });

// // helper methods

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
