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


// methods with arrays (lists)
let numbers = [1, 5, 10, 15, 23, 82];

numbers.filter((x) => x > 10); // return a new array with all the numbers from "numbers"
//                             // array that are above 10

numbers.map((x) => x + 10); // transforms each number from the array + 10
//                          // expected output: [11, 15, 20, 25, 33, 92]


// 1 + 5 + 10 + 15 + 23 + 82  method: array.reduce(accumulator, current value, current index, and source array);
const initialValue = 0;
const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial); // expected output: 136
