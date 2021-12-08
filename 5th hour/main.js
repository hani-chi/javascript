// ==, ===
// = assigning the value
// == checks only if the value is equal
// === checks if the value is equal and type is the same
/*
const num1 = 10;
const num2 = 10;

const result = num1 * num2;
console.log(result);

const value = num1 != num2;
const value2 = num1 !== num2;

console.log(value);
console.log(value2); */

// logical operators
// || - OR      && - AND      ! - NOT

// with ||, you only need 1 condition to be true
// with &&, you need both to be true

/* let fname = "hanah";

let age = 17;

if (fname === "elvis" || age === 17) {
  console.log("hello user");
} else {
  console.log("your values don't match");
}*/

// switch statements
// dice value 1-6

const dice = 1;

/* if (dice === 1) {
  console.log("you rolled 1");
} else if (dice === 2) {
  console.log("you rolled 2");
} else if (dice === 3) {
  console.log("you rolled 3");
} else if (dice === 4) {
  console.log("you rolled 4");
} else if (dice === 5) {
  console.log("you rolled 5");
} else if (dice === 6) {
  console.log("you rolled 6");
} else {
  console.log("roll again >:c");
} */

switch (dice) {
  case 1:
    console.log("you rolled 1");
    break;
  case 2:
    console.log("you rolled 2");
    break;
  case 3:
    console.log("you rolled 3");
    break;
  case 4:
    console.log("you rolled 4");
    break;
  case 5:
    console.log("you rolled 5");
    break;
  case 6:
    console.log("you rolled 6");
    break;
  default:
    console.log("you need to roll again");
} // easier if statement

//LOOPS - repeatedly run a block of code while a condition is tru

// While Loop

let amount = 10;

// while (amount > 0) {
//   console.log("I have " + amount + "dollars");
//   amount--;
// }

// Do While Loop

let money = 12;

do {
  console.log("you have" + money + " dollars");
  money++;
} while (money <= 10);

// For Loop

/*
loops: 1st statement are ran before the loop, 
2nd terminates loop, 
3rd is run after every i (iterator) of a loop
*/

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// using variable

for (let number = 11; number >= 0; number--) {
  console.log("and number is " + number);
}
