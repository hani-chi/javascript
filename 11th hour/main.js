// createElement('element')
// const bodyDiv = document.createElement("div");

// // createTextNode('text content')
// const text = document.createTextNode("hey soul sisters :*");

// // element.appendChild(childElement)
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// const result = document.getElementById("result");
// const first = document.querySelector(".red");

// //adding it to result
// const heading2 = document.createElement("h2");
// const headingText = document.createTextNode("dynamic heading");

// heading2.appendChild(headingText);
// result.appendChild(heading2);
// heading2.classList.add("blue");

// insertBefore('li', 'location');
// li.1
//
// li.2
//
// li.3

// const heading2 = document.createElement("h2");
// const headingText = document.createTextNode("dynamic heading");
// heading2.appendChild(headingText);
// result.appendChild(heading2);

// result.insertBefore('new', 'old');

//replaceChild('new', 'old');
const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(`I am small text`);

smallHeading.classList.add("red");
smallHeading.appendChild(smallText);

document.body.replaceChild(smallHeading, result);

const result2 = document.querySelector("#result");
result2.removeChild(); // ('new', 'old')

// innerHTML
// textContent

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(list.textContent); // just text content
console.log(list.innerHTML); // you get html content

const ul = document.createElement("ul");
const randomValue = "random value";

ul.innerHTML = `
<li>${randomValue}</li>
<li>list item</li>
<li>list item</li>
`;

document.body.appendChild(ul);
