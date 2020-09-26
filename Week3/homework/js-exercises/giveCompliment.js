'use strict';

// Write a function with one parameter as a name.
function giveCompliment(name) {
  
  // Define a variable that holds an array with 10 compliments as strings.
  const compliments = [
    'great',
    'amazing',
    'awesome',
    'excellent',
    'wonderful',
    'the best',
    'unbelievable',
    'supersmart',
    'so cool',
    'fantastic',
  ];

  //Write code that randomly selects a compliment.
  const compliment = compliments[Math.floor(Math.random() * compliments.length)];

  // Return a string: "You are [COMPLIMENT], [YOUR_NAME]!
  return console.log("You are " + compliment + ", " + name + "!");
  
}

//Call the function three times, giving each function call the same argument: your name.
giveCompliment('Ismail');
giveCompliment('Ismail');
giveCompliment('Ismail');
