'use strict';

// Create an array called shoppingCart that holds the following strings: "bananas" and "milk".
const shoppingCart = ['bananas', 'milk'];

// Write a function named addToShoppingCart.
function addToShoppingCart(item) {

  // Add grocery item to shoppingCart. 
  shoppingCart.push(item);

  // If the amount of items is more than 3 remove the first one in the array.
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }

  // Loops through the array in order to list out the items. 
  let items = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    items += ", " + shoppingCart[i];
  }
  
  /* Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!". 
  Substring method is used to get rid of the first comma and the output to be exactly as expected. */
  items = "You bought" + items.substring(1) + "!";
  return console.log(items);
}

addToShoppingCart('chocolate');
addToShoppingCart('candy');
addToShoppingCart('coffee');