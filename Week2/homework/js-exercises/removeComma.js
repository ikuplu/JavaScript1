'use strict';

// Declare a string variable called myString.
let myString = 'hello,this,is,a,difficult,to,read,sentence';

// Log the length of myString.
console.log(myString.length);

/* Replace the commas with spaces by using replace method to make it more readable. */
myString = myString.replace(/,/g, " ");

// After replacing the commas, log myString again to check the last form.
console.log(myString);