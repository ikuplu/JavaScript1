'use strict';

// Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items.
const firstArray = [1, 2, 3, 4];
const secondArray = ['a', 'b', 'c', false, {color: 'red'}, 99, 'f'];


// Write a console.log statement that shows the length of each array.
console.log('The length of the firstArray is ' + firstArray.length);
console.log('The length of the secondArray is ' + secondArray.length);


/* Write a conditional statement that checks if both are of equal length. 
If they are, log to the console 'They are the same!', if not log 'Two different sizes' */
if (firstArray.length === secondArray.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}