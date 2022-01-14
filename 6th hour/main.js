// string properties and methods
//same like objects

//google js string methods

let text = "Elvis Mahmutovic";
let result = text.length;

console.log(result); // it counts white spaces

console.log(text.toLowerCase()); // method

console.log(text.charAt(0)); // 0 index based (same like arrays)

console.log(text.charAt(text.length - 1)); // get last value by property and method

console.log(text.indexOf("E")); // will return first index and stop
console.log(text.indexOf("z")); // won't return unless something else there

console.log(text.trim()); // takes out empty space

// let trimVersion = text.trim(); OR (below)

console.log(text.trim().startsWith("Elvis")); //chaining methods and properties

console.log(text.includes("ron")); // checks if it is there

console.log(text.slice(0, 2)); // new string from existing (substring)

console.log(text.slice(-1)); // gives you the last value at the end

/* const person = {
    name: 'elvis', //property some value
    greeting() {
        //method
        console.log('hi, I am elvis');
    },
};
*/

// console.log(person);
// console.log(person.name); // dot notation
// person.greeting();

// DONE WITH STRINGS

// template literals - ES6+ last major update
// backtick characters ``
// interpolation ${} - insert value

let fname = "John";
let age = "100";

// let sentence = 'hi my name is ' + fname + 'and he is' + age;
let sentence = `Hi my name is ${fname} and I am ${age}`;

// array properties and methods

let anything = ["pants", "pants1", "pants2", "pants3", "pants4"];

//length
console.log(anything.length);

// by index
console.log(anything[3]);

// last item index
console.log(anything[anything.length - 1]);

// concat - new array combine two arrays
let something = ["suit", "dress", "toys", "rope", "foot"];

const everything = anything.concat(something);

console.log(everything);

// reverse array
console.log(everything.reverse());

// unshift - adds at the start of the array
everything.unshift("computer");
console.log(everything);

// shift - removes first item of the array
everything.shift();
console.log(everything);

// push - adds at the end array
everything.push("elvisssss");
console.log(everything);

// pop - removes from the end of the array
everything.pop();
console.log(everything);

// splice - mutates original array (updates it)
// first number is where you want it to start (index)
// second number is how many you want to delete
// third number (+) is whatever items you want to add to the array

// const names = ['joe', 'bob', 'frank']
//names.splice(1, 2, 'robby', etc)

// slice - to grab a chunk of an array (no changes)
// first number is where you want it to start
// second number is where you want it to end (not index based)(not inclusive)
// names.slice(0,3)

let nothing = everything.splice(2, 2);
console.log(nothing);
