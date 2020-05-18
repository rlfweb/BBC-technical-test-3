// Rock button
document.querySelector(".rock").addEventListener("click", handleClickRock);

function handleClickRock() {
  alert("You chose Rock");
}

// Paper button
document.querySelector(".paper").addEventListener("click", handleClickPaper);

function handleClickPaper() {
  alert("You chose Paper");
}

// Scissors button
document
  .querySelector(".scissors")
  .addEventListener("click", handleClickScissors);

function handleClickScissors() {
  alert("You chose Scissors");
}

// Play again button
document
  .querySelector(".playAgain")
  .addEventListener("click", handleClickPlayAgain);

function handleClickPlayAgain() {
  alert("You clicked Play Again");
}
