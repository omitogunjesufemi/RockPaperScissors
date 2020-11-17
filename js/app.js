var userScore = 0;
var compScore = 0;
const userScoreline = document.getElementById("userScore");
const compScoreline = document.getElementById("compScore");
const message_block = document.getElementById("message");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getComputerChoice() {
  randomChoice = ["r", "p", "s"];
  var compPick = randomChoice[Math.floor(Math.random() * 3)];
  return compPick;
}

function inWords(selectedChoice) {
//   console.log(selectedChoice);
  if (selectedChoice === "r") {
    return "Rock";
  } else if (selectedChoice === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function drawGame() {}

function rps(yourPick) {
  const compChoice = getComputerChoice();
//   console.log(compChoice);
//   console.log(yourPick);
  comboChoice = yourPick + compChoice;
  if (comboChoice === "rr" || comboChoice === "pp" || comboChoice === "ss") {
    message_block.innerHTML =
      inWords(yourPick) +
      " draws with " +
      inWords(compChoice) +
      ". It is a draw!";
  } else if (
    comboChoice === "sp" ||
    comboChoice === "pr" ||
    comboChoice === "rs"
  ) {
    userScore++;
    userScoreline.innerHTML = userScore;
    message_block.innerHTML =
      inWords(yourPick) + " beats " + inWords(compChoice) + ". You Win!";
  } else if (
    comboChoice === "ps" ||
    comboChoice === "rp" ||
    comboChoice === "sr"
  ) {
    compScore++;
    compScoreline.innerHTML = compScore;
    message_block.innerHTML =
      inWords(yourPick) + " loses " + inWords(compChoice) + ". You Lose!";
  }
}

function main() {
  rock_button.addEventListener("click", () => rps("r"));
  paper_button.addEventListener("click", () => rps("p"));
  scissors_button.addEventListener("click", () => rps("s"));
}

main();
