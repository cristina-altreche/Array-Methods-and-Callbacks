import { fifaData } from "./fifa.js";
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const ht2014 = fifaData.filter((s) => {
  return s.Stage === "Final" && s.Year === 2014;
});
// console.log(ht2014.map((s) => s["Home Team Name"]));
// console.log(ht2014.map((s) => s["Away Team Name"]));
// console.log(ht2014.map((s) => s["Home Team Goals"]));
// console.log(ht2014.map((s) => s["Away Team Goals"]));
// console.log(ht2014.map((s) => s["Win conditions"]));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr) {
  return arr.filter((f) => f.Stage === "Final");
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  return callback.map((y) => y.Year);
}

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  let winners = [];

  let homeWinners = callback.filter(
    (w) => w[`Home Team Goals`] > w[`Away Team Goals`]
  );
  let awayWinners = callback.filter(
    (w) => w[`Away Team Goals`] > w[`Home Team Goals`]
  );
  let tiedGame = callback.filter(
    (t) => t[`Home Team Goals`] === t[`Away Team Goals`]
  );

  let hNames = homeWinners.map((mh) => mh[`Home Team Name`]);
  let aNames = awayWinners.map((ma) => ma[`Away Team Name`]);
  let tNames = tiedGame.map((mt) => mt[`Home Team Name`]);

  winners = hNames.concat(aNames, tNames);
  return winners;
}

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWinners, cbYears) {
  let year = cbYears;
  let country = cbWinners;

  for (let i = 0; i < year.length; i++) {
    console.log(`In ${year[i]}, ${country[i]} won the world cup!`);
  }
}

// console.log(
//   getWinnersByYear(
//     getWinners(getFinals(fifaData)),
//     getYears(getFinals(fifaData))
//   )
// );

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(callback) {
  let averageHome = callback.reduce((acc, currentValue) => {
    return (acc += currentValue["Home Team Goals"]);
  }, 0);
  let averageAway = callback.reduce((acc, currentValue) => {
    return (acc += currentValue["Away Team Goals"]);
  }, 0);
  console.log(averageHome / 851);
  console.log(averageAway / 851);
}
getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* STRETCH 5: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(callback, initials) {}

// console.log(getCountryWins(getFinals(fifaData), "URU"));
