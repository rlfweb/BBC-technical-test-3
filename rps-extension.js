// BBC Assessment Technical Test - Option 3 – Rock, Paper, Scissors Game

// EXTENSION to existing function during BBC Interview

// Computer wants to cheat and win at least three times out of four.
// Three times out of four, the computer takes player's choice and beats it.
// One time out of four, it will use the existing random computerChoice function, so it may win, lose or draw.

// Player's choice input as a string - change input from "Rock" to "Paper" to "Scissors"
const playerChoice = "Rock";
console.log(`You chose ${playerChoice}.`);

// The cheating win function
function win(playerChoice) {
  if (playerChoice === "Rock") return "Paper";
  if (playerChoice === "Paper") return "Scissors";
  if (playerChoice === "Scissors") return "Rock";
}

// Giving computer 4 possible random outcomes
let randomWin = Math.floor(Math.random() * 4);
console.log(randomWin);

// random computerChoice
const randomChoice = ["Rock", "Paper", "Scissors"];
let computerChoice =
  randomChoice[Math.floor(Math.random() * randomChoice.length)];
console.log(`The computer chose ${computerChoice}.`);

// 1/4 chance of random outcome
if (randomWin === 0) {
  console.log(computerChoice);
  // 3/4 chance of the winning outcome
} else {
  computerChoice = win(playerChoice);
}

// Response gives winner as a string.
if (playerChoice === computerChoice) {
  console.log("It's a tie!");
} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
  console.log("Rock blunts Scissors. You win!");
} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
  console.log("Scissors cut Paper. You win!");
} else if (playerChoice === "Paper" && computerChoice === "Rock") {
  console.log("Paper covers Rock. You win!");
} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
  console.log("Rock blunts Scissors. Computer wins!");
} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
  console.log("Scissors cut Paper. Computer wins!");
} else if (playerChoice === "Rock" && computerChoice === "Paper") {
  console.log("Paper covers Rock. Computer wins!");
}

// NB - not working quite correctly yet.
// These functions give a statistical chance of 3/4 winning and 1/4 random win, but it's possible within smaller datasets that the computer wins every time or never wins.
