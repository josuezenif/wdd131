// function name with no variable being assigned to it
function fullName(first, last) {
    `${first} ${last}`
}

// with function beign assigned to a varaible
const fullName = function (first, last) {
    `${first} ${last}`
}

// arrow function expression  --> the arrow is a type of return 
const fulName = (first, last) => `${first} ${last}`;


// code to call fullName function and writes it in a html document
document.querySelector("#fullName").textContent = fullName(first, last);


// to get the last value in an array (list)
array.length - 1;

// more sepecific with an example
let fruits = ["apple", "banana", "orange"];
let lastIndex = fruits.length - 1; // index 2
let lastItem = fruits[lastIndex]; // orange
