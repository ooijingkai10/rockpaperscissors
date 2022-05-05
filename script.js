const choice = ["rock", "paper", "scissors"];

let count = 0;
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection,computerSelection) {
  if (playerSelection.toLowerCase() == "paper") {
      if (computerSelection == "rock") {
        playerScore++;
        return "You win! Paper beats rock!";
      } else if (computerSelection == "scissors") {
        computerScore++;
        return "You lose! Scissors beats rock!"
      } else {
        return "tie";
      }
  } else if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "scissors") {
        playerScore++;
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
      } else if (computerSelection == "paper") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
      } else {
        return "tie";
      }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "paper") {
        playerScore++;
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}!`;
      } else if (computerSelection == "rock") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;
      } else {
        return "tie";
      }
  }
}

// UI
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');
const compscore = document.getElementById('computerscore');
const humanscore = document.getElementById('humanscore');
const roundmsg = document.getElementById('roundmsg');

function handleClick(playerSelection) {
  const computerselect = computerPlay();
  roundmsg.textContent = playRound(playerSelection, computerselect);
  compscore.textContent = `${computerScore}`;
  humanscore.textContent = `${playerScore}`;
  if(computerScore == 5 || playerScore == 5) {
    const gamemsg = document.getElementById('gamemsg');
    gamemsg.textContent = (computerScore == 5) ? "computer win this rd!" : "player wins this rd!";
  }
}

//update//
rockbtn.addEventListener('click', () => handleClick("rock"));
paperbtn.addEventListener('click', () => handleClick("paper"));
scissorsbtn.addEventListener('click', () => handleClick("scissors"));

// function game() {
//   while(count < 5) {
//     const playerSelection = prompt("Choose your move");
//     const computerSelection = computerPlay();
//     alert(playRound(playerSelection, computerSelection));
//     console.log(playRound(playerSelection, computerSelection));
//     count++;
//   }
// }

