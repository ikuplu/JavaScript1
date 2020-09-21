'use strict';

// Declare a variable that holds an empty array, called drinkTray
const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

/*Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. 
The drinkTray can only hold at most two instances of the same drink type. */
let i = 0;
while (i < drinkTypes.length) {
  drinkTray.push(drinkTypes[i]);

  if (drinkTray.length === 5) {
    break;
  }

  // If there are already two instances of a drinkType then start with the next drink in the array.
  if (drinkTray.filter(drink => drink === drinkTypes[i]).length !== 2) {
    continue;
  } else {
    i++
  }
}  

// Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!"
console.log("Hey guys, I brought a " + drinkTray + "!")
