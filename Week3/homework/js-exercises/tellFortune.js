'use strict';

/* Create 4 arrays with the names numChildren, partnerNames, locations and jobs. 
Give each array 5 random string values that have to do with the name of the variable. */
const numChildren = [6, 3, 4, 5, 7];
const partnerNames = ['Julia', 'John', 'Tom', 'Alice', 'Rebecca'];
const locations = ['India', 'Russia', 'USA', 'Brazil', 'Netherlands'];
const jobs = [
  'software developer',
  'doctor',
  'journalist',
  'scientist',
  'politician',
];

// Write a function named tellFortune.
function tellFortune(numberKids, partnerNames, locations, jobTitles) {
  // Randomly select values from the arrays.
  const randomNumberKids = numberKids[Math.floor(Math.random() * numberKids.length)];
  const partnerName = partnerName[Math.floor(Math.random() * partnerName.length)];
  const location = location[Math.floor(Math.random() * location.length)];
  const jobTitle = jobTitle[Math.floor(Math.random() * jobTitle.length)];

  // Return a string: "You will be a [JOB_TITLE] in [LOCATION], married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
  return console.log(
    'You will be a ' +
      jobTitle +
      ' in ' +
      location +
      ', married to ' +
      partnerName +
      ' with ' +
      randomNumberKids +
      ' kids.',
  );
}

// Call the function 3 times, by passing the arrays as the argument.
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
