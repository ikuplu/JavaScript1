'use strict';

/*Declare a variable that holds an array of 3 objects, 
where each object describes a book and has properties for the title (string), 
author (string), and alreadyRead (boolean indicating if you read it yet).*/
let booksArray = [ 
 {
   'title': 'Les Miserables',
   'author': 'Victor Hugo',
   alreadyRead: true,
 },
 {
  'title': 'The Alchemist',
  'author': 'Paulo Coelho',
  alreadyRead: true,
 },
 {
  'title': 'The Chronicles of Narnia',
  'author': 'C. S. Lewis',
  alreadyRead: false,
 }
]

// Loop through the array of books.
for (let i in booksArray) {

  // For each book, log the book title and book author.
  console.log('"' + booksArray[i].title + ' by ' + booksArray[i].author + '"');

  // Create a conditional statement to change the log depending on whether you read it yet or not.
  if (booksArray[i].alreadyRead === true) {
    console.log("You've already read " + booksArray[i].title + ".");
  } else {
    console.log("You still need to read " + booksArray[i].title + ".");
  }
}
