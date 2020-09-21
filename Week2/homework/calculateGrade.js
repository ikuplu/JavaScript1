'use strict';

// Write a function.
function calculateGrade(testScore) {
  

  // Converts the score into a percentage.
  let percentage = Math.floor((testScore / 100) * 100);
  let grade;

  // Calculates what grade corresponds with that percentage.
  switch (true) {
    case 90 <= percentage && percentage <= 100:
      grade = "A";
      break;
    case 80 <= percentage && percentage <= 89:
      grade = "B";
      break;
    case 70 <= percentage && percentage <= 79:
      grade = "C";
      break;
    case 60 <= percentage && percentage <= 69:
      grade = "D";
      break;
    case 50 <= percentage && percentage <= 59:
      grade = "E";
      break;
    case 0 <= percentage && percentage <= 49:
      grade = "F";
      break;
    default:
      break;
  }

  // Returns the result to the console with a template string.
  console.log("You got a " + grade + " (" + percentage + "%)!");

}

// Test some corner values.
calculateGrade(0);
calculateGrade(49);
calculateGrade(50);
calculateGrade(69)
calculateGrade(70);
calculateGrade(89);
calculateGrade(90);
calculateGrade(100);
