'use strict';

// Create a function with two arguments to check and compare the data type of each.
function typeChecker(var1, var2) {
  if (typeof var1 === typeof var2) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same...');
  }
}

//Declare 4 variables: 2 must be strings and 2 must be objects.
let myString = "";
let anotherString = "";
let myObject = {};
let anotherObject = {};

/*Create 6 conditional statements, 
where for each you check if the data type of one variable is the same as the other. */
if (typeof myString === typeof anotherString) { 
  console.log('SAME');
 } else {
   console.log('Not the same...');
 }


if (typeof myString === typeof myObject) { 
  console.log('SAME');
 } else {
   console.log('Not the same...');
 }


if (typeof anotherString === typeof myObject) { 
  console.log('SAME');
 } else {
   console.log('Not the same...');
 }


if (typeof myObject === typeof anotherObject) { 
  console.log('SAME');
 } else {
   console.log('Not the same...');
 }


if (typeof myString === typeof anotherObject) { 
  console.log('SAME');
 } else {
   console.log('Not the same...');
 }


if (typeof anotherObject === typeof anotherString) { 
  console.log('SAME');
 } else {
   console.log('Not the same...');
 }


//Write 2 console.log statements to log the type of 2 variables, each with a different data type.
console.log("The type of the variable is " + typeof myString);
console.log("The type of the variable is " + typeof myObject);


/*Now compare the types of your different variables with one another.
Log 'Not the same...' when the types are different*/
typeChecker(myString, anotherString);
typeChecker(myString, myObject);
typeChecker(anotherString, myObject);
typeChecker(myObject, anotherObject);
typeChecker(myString, anotherObject);
typeChecker(anotherObject, anotherString);
