// DOM - Document Object Model
// document.body.style.backgroundColor = ""; // example
// document.body.style.color = "yellow";
// document.getElementById("btn").style.color = "pink";

// assign to a variable

// let button = document.getElementById("btn");
// button.style.color = "white";
// console.log(button);

// window object - this is where we are getting stuff from "document."
// console.log(window);

// returns a node object or a node list, which is an array like object (some methods we
// can use like on array)

// const btn = document.getElementById("btn");
// const bname = btn.nodeName;
// const css = btn.style;

// console.log(btn);
// console.log(css);
// console.log(bname);

// select the element or group of elements that we want
// decide what effects we want to apply to the selection

// getElementById("element"); // css id from html
// const title = document.getElementById("title");
// title.style.color = "darkorange";

// btn.style.backgroundColor = "orange";

// getElementsByTagName("tagname");
// node list = array-like object
// index, length property but not array methods

// let h1 = document.getElementsByTagName("h1");

// h1[0].style.color = "orange";

const items = document.getElementsByTagName("li");

// fruits[0].style.color = "red";
// fruits[1].style.color = "purple";
// fruits[2].style.color = "green";
// fruits[3].style.color = "orange";

const betterItems = [...items]; // spread operator - copies items and saving them as betterItems

betterItems.forEach(function (i) {
  // anonymous function
  console.log(i);
});

//getElementsByClassName('className'); // multiple elements
// node-list = array-like
// index, length, but not array methods

// const fruits = document.getElementsByClassName("special");
// console.log(fruits);
// fruits[0].style.color = "red";

// querySelector('any css') // select single (first element)
// querySelectorAll('any css') // selects all and is able to use methods (forEach)
// must use . or # in for class or id, otherwise use tags

// const fruits = document.querySelector(".special");
// console.log(fruits);
// fruits.style.color = "red";

// const lastChild = document.querySelector("li:last-child");
// lastChild.style.color = "lightpink";

// const list = document.querySelectorAll(".special");
// console.log(list);

// list.forEach(function (i) {
//   console.log(i);
//   i.style.color = "blue";
// });

//childNodes - returns all childNodes including whitespace which is treated as text

// const fruits = document.querySelector("#fruits");
// console.log(fruits);

// // children
// const allChildren = fruits.children;
// console.log(allChildren);

// parent element

// const heading2 = document.querySelector("h2");
// console.log(heading2.parentElement);

// const parent = heading2.parentElement;
// console.log(parent);
// parent.style.backgroundColor = "orange";

// previousSibling
// nextSibling
// return whitespace - so type it twice to target the first

// const first = document.querySelector(".first");
// first.style.color = "red";

// const second = first.nextSibling.nextSibling.nextSibling.nextSibling;
// second.style.color = "orange";
// console.log(second);

// getAttribute
// setAttribute

// const first = document.querySelector(".first");
// const classValue = first.getAttribute("class");
// console.log(classValue);

// const link = document.getElementById("link");

// const pants = link.nextElementSibling;
// pants.setAttribute("class", "soccer");

// className - can be overwritten by accident!
// classList - to add class

// let first = document.getElementById("first");
// let second = document.getElementById("second");

// const classValue = first.className;
// const classValue2 = second.className;
// console.log(classValue);
// console.log(classValue2);

// first.className = "colors text";

// second.classList.add("bing"); // to add multiple classes, do ("", "", "")
// second.classList.remove("bing");
