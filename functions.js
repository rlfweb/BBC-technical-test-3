// refactoring the code as a function

// Change the playerChoice input at line 4 from to "Rock" to "Paper" to "Scissors" to see the various responses
const playerChoice = "Rock";

// Computer makes random choice
const randomChoice = ["Rock", "Paper", "Scissors"];
const computerChoice =
  randomChoice[Math.floor(Math.random() * randomChoice.length)];

function game() {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "Rock blunts Scissors. You win!";
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "Scissors cut Paper. You win!";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "Paper covers Rock. You win!";
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    return "Rock blunts Scissors. Computer wins!";
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    return "Scissors cut Paper. Computer wins!";
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    return "Paper covers Rock. Computer wins!";
  }
}

let winner = game(playerChoice, computerChoice);

console.log(
  `You chose ${playerChoice}. ` +
    `The computer chose ${computerChoice}. ` +
    winner
);
