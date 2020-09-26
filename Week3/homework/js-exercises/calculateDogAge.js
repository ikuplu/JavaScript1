'use strict';

// Write a function named calculateDogAge.
function calculateDogAge (age) {
  
  //Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
  let dogAge = age * 7;

  //Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
  return console.log("Your doggie is " + dogAge + " years old in dog years!");
}

//Call the function three times with different sets of values.
calculateDogAge(3);
calculateDogAge(6);
calculateDogAge(9);