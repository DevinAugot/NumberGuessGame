// Created by: Devin Augot
// Date: June 15th, 2023

const readLine = require("readline");

var minNum = 1;
var maxNum = 100;
const ANSWER = 42;

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Please guess a number between 1-100: ");

rl.on("line", function (userGuess) {
  userGuess = parseInt(userGuess);

  if (userGuess < minNum || userGuess > maxNum) {
    console.log("Error: Invalid number. Try again!");
  } else if (userGuess !== ANSWER) {
    console.log(userGuess);
    console.log("Incorrect. Please try again!");
  } else {
    console.log("Correct!");
    rl.close();
  }
});
