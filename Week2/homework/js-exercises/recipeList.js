'use strict';

// Declare a variable that holds an empty object literal (your meal recipe).
let myRecipe = {};

// Declared another object variable to specify the expected key names to log out to the console in the end.
let myRecipeKeys = {
  title: "Meal name",
  servings: "Serves",
  ingredients: "Ingredients",
}

/*Give the empty object 3 properties: a title (string), a servings (number) and 
an ingredients (array of strings) property.*/
myRecipe.title = 'Pilav';
myRecipe.servings = 4;
myRecipe.ingredients = ['400 grams rice', ' 2 tablespoon butter', ' 3 glass water', ' 1/4 tablespoon salt'];


// Log each property out separately, using a loop.
for (let key in myRecipe) {
  if (myRecipe.hasOwnProperty(key)) {
  console.log(myRecipeKeys[key] + ": " +  myRecipe[key]);
}
}
