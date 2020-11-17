function rockClick() {
  randomChoice = ["rock", "paper", "scissors"];
  var compChoice = randomChoice[Math.floor(Math.random() * 3)];
  if (compChoice == "rock") {
    theMessage = "Rock Draws with Rock. It is a tie!";
    return (document.getElementById("message").innerHTML = theMessage);
  } else if (compChoice == "paper") {
    theMessage = "Rock loses to Paper. Computer Wins!";
    return (document.getElementById("message").innerHTML = theMessage);
  } else if (compChoice == "scissors") {
    theMessage = "Rock beats Scissors. User Wins!";
    return (document.getElementById("message").innerHTML = theMessage);
  }
}

function paperClick() {
  randomChoice = ["rock", "paper", "scissors"];
  var compChoice = randomChoice[Math.floor(Math.random() * 3)];
  if (compChoice == "rock") {
    theMessage = "Paper beats Rock. User wins!";
    return (document.getElementById("message").innerHTML = theMessage);
  } else if (compChoice == "paper") {
    theMessage = "Paper Draws with Paper. It is a tie!";
    return (document.getElementById("message").innerHTML = theMessage);
  } else if (compChoice == "scissors") {
    theMessage = "Paper loses to Scissors. Computer Wins!";
    return (document.getElementById("message").innerHTML = theMessage);
  }
}

function scissorsClick() {
  randomChoice = ["rock", "paper", "scissors"];
  var compChoice = randomChoice[Math.floor(Math.random() * 3)];
  if (compChoice == "rock") {
    theMessage = "Scissors loses to Rock. Computer Wins!";
    console.log(theMessage);
    return (document.getElementById("message").innerHTML = theMessage);
  } else if (compChoice == "paper") {
    theMessage = "Scissors beats Paper. User Wins!";
    console.log(theMessage);
    return (document.getElementById("message").innerHTML = theMessage);
  } else if (compChoice == "scissors") {
    theMessage = "Scissors Draws with Scissors. It is a tie!";
    console.log(theMessage);
    return (document.getElementById("message").innerHTML = theMessage);
  }
}

function winGame() {
  let userScoreTag = document.getElementById("userScore");
  let compScoreTag = document.getElementById("compScore");
  userScoreTag++;
}
