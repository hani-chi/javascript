// declare variable

var num = 22;

let fname = "hanah";

const person = true;

// number, string, boolean, null, undefined, array, object, subject, function

let names = ["elvis", "hanah", "abby"];

console.log(names[1]);

names[1] = "Sydney";

let name1 = "hanah";
let name2 = "zupancic";

console.log("hi my name is " + name1 + " " + name2);
console.log(`hi my name is ${name1} ${name2}`); //back ticks!!

//object

let person1 = {
  name: "elvis",
  age: 34,
  active: true,
};

//dot notation
console.log(person1.name);

// working hyperlink

const website = "Google";
const url = `http://${website}.com`;

console.log(url);

// implicit type

let num345 = 123;
let num678 = "123";

console.log(num345, num678);

// CHANGE COPYRIGHT YEAR ACTIVITY

let date = new Date();
let year = date.getFullYear(); //method

let copyYear = document.getElementById("current-year");

copyYear.innerHTML = year;

// PROJECT TITLE ACTIVITY

let project1 = {
  title: "This is Project 1",
  desc: "this is a basic description",
  age: 18,
};

let title = document.getElementById("project1.title");

title.innerHTML = project1.title;

let age = document.getElementById("age");
age.innerHTML = project1.age;
