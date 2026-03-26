let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];


// creating an array from names array
// names only that start with "B"
let namesB = names.filter(name => name.charAt(0) === "B");

// gets the number of letters for each name
let namesLength = names.map((name) => name.length);

// expression that returns average string length from names array
names.reduce((total, name) => total + name.length, 0) / names.length;  // expected output: 5.8


const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
// Colombia, Costa Rica