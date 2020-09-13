"use strict";

// Declare a variable z and assign the number 7.25 to it.
let z = 7.25;

// Write a console.log statement in which you log the value of z.
console.log(z);

// Declare another variable a that has the value of z but rounded to the nearest integer.
let a = Math.round(z);

// Write a console.log statement in which you log the value of a.
console.log(a);

/*So now we have z and a find a way to compare the two values and 
store the highest of the two in a new variable.*/
let highestValue = Math.max(z, a);

// Write a console.log statement in which you log the value of the highest value.
console.log(highestValue);