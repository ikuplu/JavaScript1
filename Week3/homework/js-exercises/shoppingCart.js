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
  let items = shoppingCart.join(', ');

  // Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!".
  items = `You bought ${items}!`;
  return console.log(items);
}

addToShoppingCart('chocolate');
addToShoppingCart('candy');
addToShoppingCart('coffee');
