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


function displayWinOrLose(won, humanChoice, computerChoice) {
    if (won === 1) {
        result.textContent = ("Tie! You both chose " + humanChoice + "!");
    }
    else if (won === 2) {
        humanScore++;
        result.textContent = ("You Win! " + humanChoice + " beats " + computerChoice + "!");
    }
    else {
        computerScore++;
        result.textContent = ("You Lose! " + computerChoice + " beats " + humanChoice + "!");
    }
}

function playRound(event) {
    humanChoice = event.target.id;
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        displayWinOrLose(1, humanChoice, computerChoice);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            displayWinOrLose(0, humanChoice, computerChoice);
        }
        else {
            displayWinOrLose(2, humanChoice, computerChoice);
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            displayWinOrLose(0, humanChoice, computerChoice);
        }
        else {
            displayWinOrLose(2, humanChoice, computerChoice);
        }
    }
    else {
        if (computerChoice === "rock") {
            displayWinOrLose(0, humanChoice, computerChoice);
        }
        else {
            displayWinOrLose(2, humanChoice, computerChoice);
        }
    }
    humanScoreboard.textContent = `Human: ${humanScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;

}

const userChoice = document.querySelector(".choice");
userChoice.addEventListener("click", playRound);

const result = document.querySelector(".result");
const humanScoreboard = document.querySelector(".human-score");
const computerScoreboard = document.querySelector(".computer-score");

