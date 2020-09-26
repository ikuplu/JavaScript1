'use strict';

/* Create 4 arrays with the names numChildren, partnerNames, locations and jobs. 
Give each array 5 random string values that have to do with the name of the variable. */
const numChildren = [6, 3, 4, 5, 7];
const partnerNames = ['Julia', 'John', 'Tom', 'Alice', 'Rebecca'];
const locations = ['India', 'Russia', 'USA', 'Brazil', 'Netherlands'];
const jobs = ['software developer', 'doctor', 'journalist', 'scientist', 'politician'];

// Write a function named tellFortune.
function tellFortune(numberKids, partnerName, location, jobTitle) {
  
  // Randomly select values from the arrays.
  numberKids = numChildren[Math.floor(Math.random() * numChildren.length)];
  partnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
  location = locations[Math.floor(Math.random() * locations.length)];
  jobTitle = jobs[Math.floor(Math.random() * jobs.length)];

  // Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
  let output = console.log("You will be a " + jobTitle + " in " + location + ", married to " + partnerName + " with " + numberKids + " kids.");
  return output;
}

// Call the function 3 times, by passing the arrays as the argument.
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);