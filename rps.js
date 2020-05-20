// BBC Assessment Technical Test - Option 3 – Rock, Paper, Scissors Game

// Paste code below into repl.it and run the code.

// Change the playerChoice input at line 8 from "Scissors" to "Rock" to "Paper" to see the various responses

// Player's choice input as a string
const playerChoice = "Scissors";
console.log(`You chose ${playerChoice}.`);

// Computer makes random choice. Log "The Computer Chose XX."
const randomChoice = ["Rock", "Paper", "Scissors"];
const computerChoice =
  randomChoice[Math.floor(Math.random() * randomChoice.length)];
console.log(`The computer chose ${computerChoice}.`);

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
