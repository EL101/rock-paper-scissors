let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return "rock";
    }
    else if (choice === 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors");
    return userInput;
}

function displayWinOrLose(won, humanChoice, computerChoice) {
    if (won) {
        humanScore++;
        console.loge("You Win! " + humanChoice + " beats " + computerChoice + "!");
    }
    else {
        computerScore++;
        console.loge("You Lose! " + computerChoice + " beats " + humanChoice + "!");
    }
}
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("Tie! You both chose " + humanChoice + "!");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {

        }
    }
}