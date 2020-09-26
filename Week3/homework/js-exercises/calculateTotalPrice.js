'use strict';

/* Create an object named cartForParty with 5 properties. 
Each property should be a grocery item and hold a number value. */
const cartForParty = {
  cookies: 4.99,
  chips: 7.99,
  paperTowels: 6.99,
  plates: 11.50,
  glasses: 14.75
}

/* Write a function called calculateTotalPrice. 
It takes 1 argument: an object that contains properties that only contain number values. */
function calculateTotalPrice(items) {

  // Loop through the object and add all the number values together.
  let totalValue = 0;
  for (let key in cartForParty) {
    if (cartForParty.hasOwnProperty(key)) {
      totalValue += cartForParty[key];
    }
}
  // Return a string: "Total: €[TOTAL_PRICE_ITEMS]"
  return console.log("Total: €" + totalValue);
}

// Call the function giving it the object cartForParty as an argument.
calculateTotalPrice(cartForParty);
