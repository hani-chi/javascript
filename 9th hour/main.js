// powerful array methods
// iterates over array - no for loop required
// forEach. map, filter, find, reduce

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

// map - most popular and powerful
// DOES return a new array - takes items from og array and makes new array
// DOESNT change size of the original array
// uses values from original array when making a new one

const products = [
  {
    id: 1,
    product: "shoes",
    make: "nike",
    price: 69.99,
  },
  {
    id: 2,
    product: "socks",
    make: "adidas",
    price: 9.99,
  },
  {
    id: 3,
    product: "pants",
    make: "puma",
    price: 49.99,
  },
];

const singleProduct = products.map(function (item) {
  return item.make;
});
console.log(singleProduct);

const newProducts = products.map((p) => {
  return {
    productMake: p.make,
    productPrice: p.price + 1.0,
  };
});
console.log(newProducts);

const makes = products.map((hs) => {
  return `<div>Make: ${hs.make}</div>`;
});
console.log(makes);

document.body.innerHTML = makes.join(""); // accessing dom (making elements show up on screen)
// .join('') - removes commas between

// FILTER method
// does return a new method
// DOES change size of new array
// returns based on conditions
// map changes each item in array while filter doesn't

const cheapShoes = products.filter(function (s) {
  return s.price <= 20;
});
console.log(cheapShoes);

const adidas = products.filter(function (ad) {
  return ad.make === "adidas";
});
console.log(adidas);

// find method
// returns object
// returns first match, if no match undefined
// great for getting unique value

const productID = products.find(function (p) {
  return p.id === 2;
});

console.log(productID);
console.log(productID.price);
console.log(productID.make);

// REDUCE method
// iterates, callback function
// reduces to a single value - number, array, object
// 1st param: ('acc', '') - accumulator: total of all calculations
// 2nd param: ('','curr') - current: current iteration value

const cost = products.reduce(function (acc, currItem) {
  console.log(`Total ACC: ${acc}`);
  console.log(`Cost Current Item ${currItem.price}`);
  acc += currItem.price;
  return acc;
}, 0);
console.log(`cost of everything is $${cost}`);

// MATH OBJECTS
// standard built-in objects

// rounding up
const num1 = 4.56789;
const result = Math.ceil(num1); // Math.ceil is rounding UP
console.log(result);

//rounding down
const num2 = 4.56789;
const result2 = Math.floor(num2);
console.log(result2);

// square root
const num3 = 16;
const result3 = Math.sqrt(num3);
console.log(result3);

// Pi
const result4 = Math.PI;
console.log(result4);

// min and max (work the same way)
const res5 = Math.min(3, 4, 5, 6);
console.log(res5);

// random (number) up to 10 (ex.)
const res6 = Math.ceil(Math.random() * 10);
console.log(res6);

// Date Global Object

const months = ["January", "february", "march", "april", "june", "july"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const date = new Date();
const month = date.getMonth();
let day = date.getDay();

console.log(months[month]);
console.log(days[day]);

console.log(date.getFullYear());

console.log(date.getDate());

const webDate = `Hello people, welcome! Today is ${days[day]} ${months[month]}
${date.getDate()}, ${date.getFullYear()}`;
console.log(webDate);

document.body.innerHTML = webDate;
