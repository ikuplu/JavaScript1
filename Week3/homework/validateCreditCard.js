'use strict';

// Write a function called validateCreditNumber.
function validateCreditNumber(num) {

  // Input must be 16 characters.
  if (num.length !== 16) {
    return console.log("Invalid! The input " + num + " must contain 16 characters!");
  } 

  // All characters must be numbers.
  if (num.match(/\D/) !== null) {
    return console.log("Invalid! The input " + num + " should contain only numbers!");
  }

  let arr = Array.from(num, Number);  // Convert input into an array of numbers.
  let sum = arr.reduce(function(a, b) { return a + b; }, 0);   // Declare a variable as the sum of the numbers in the array.

  // At least two different numbers should be represented.
  if ((sum / arr.length) === arr[0]) {
    return console.log("Invalid! The input " + num + " should contain at least two different numbers!");
  }

  // The last number must be even.
  if (arr[arr.length-1] % 2 !== 0) {
    return console.log("Invalid! The input " + num + " should have an even last number!");
  }

  // The sum of all the numbers must be greater than 16.
  if (sum <= 16) {
    return console.log("Invalid! The sum of all the numbers of input " + num + " must be greater than 16!");
  }

  else {
    return console.log("Success! The input " + num + " is a valid credit card number!");
  }
}

// Test to see if the code works as expected.
validateCreditNumber('6666654657483');
validateCreditNumber('63547554657586ab');
validateCreditNumber('6666666666666666');
validateCreditNumber('6666646575843625');
validateCreditNumber('1111111111111110');
validateCreditNumber('4657837366577868');
