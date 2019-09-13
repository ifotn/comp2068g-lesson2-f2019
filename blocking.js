// synchronous blocking code to read and output 2 text files

// include node's built-in file system module so we can read external files
var fs = require('fs');

// read food file
var food = fs.readFileSync('food.txt', 'utf-8');

// display a heading for food
console.log('FOOD:');

// display file contents
console.log(food);

// read drinks file
var drinks = fs.readFileSync('drinks.txt', 'utf-8');

// drinks heading
console.log('DRINKS:');

// display file contents
console.log(drinks);
