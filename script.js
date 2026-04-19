const choices = ["Rock", "Paper","Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay  = document.getElementById("computerDisplay");
const resultDisplay  = document.getElementById("resultDisplay");
let playerScore = 0;
let computerScore = 0;
document.getElementById("playerScore").classList.add("greenText");
document.getElementById("computerScore").classList.add("redText");

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result ="";
    if (playerChoice===computerChoice) {
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice==="Scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "Paper":
                result = (computerChoice==="Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;    
            case "Scissors":
                result = (computerChoice==="Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText","redText");
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            break;
        default:
            break;
    }
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}