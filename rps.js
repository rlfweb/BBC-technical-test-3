// BBC Assessment Technical Test - Option 3 – Rock, Paper, Scissors Game

// Paste code below into repl.it and run the code.

// Change the playerChoice input at line 8 from "Scissors" to "Rock" to "Paper" to see the various responses

// Player's choice input as a string
const playerChoice = "Scissors";
console.log(`You chose ${playerChoice}.`);

// Computer makes random choice. Log "The Computer Chose XX."
const computerChoice = ["Rock", "Paper", "Scissors"];
const randomChoice =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(`The computer chose ${randomChoice}.`);

// Response gives winner as a string.
if (playerChoice === randomChoice) {
  console.log("It's a tie!");
} else if (playerChoice === "Rock" && randomChoice === "Scissors") {
  console.log("Rock blunts Scissors. You win!");
} else if (playerChoice === "Scissors" && randomChoice === "Paper") {
  console.log("Scissors cut Paper. You win!");
} else if (playerChoice === "Paper" && randomChoice === "Rock") {
  console.log("Paper covers Rock. You win!");
} else if (playerChoice === "Scissors" && randomChoice === "Rock") {
  console.log("Rock blunts Scissors. Computer wins!");
} else if (playerChoice === "Paper" && randomChoice === "Scissors") {
  console.log("Scissors cut Paper. Computer wins!");
} else if (playerChoice === "Rock" && randomChoice === "Paper") {
  console.log("Paper covers Rock. Computer wins!");
}
