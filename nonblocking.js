// read files in parallel using callbacks

// link to file system module to read files
var fs = require('fs');

// add heading 1
console.log('FOOD:');

// open and read food file
var food = fs.readFile('food.txt', 'utf-8', (err, food) => {
    console.log(food);
});

// add heading 2
console.log('DRINKS:');

// open and read drinks file
var drinks = fs.readFile('drinks.txt', 'utf-8', (err, drinks) => {
   console.log(drinks);
});