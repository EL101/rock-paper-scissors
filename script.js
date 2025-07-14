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
    if (won === 1) {
        alert("Tie! You both chose " + humanChoice + "!");
    }
    else if (won === 2) {
        humanScore++;
        alert("You Win! " + humanChoice + " beats " + computerChoice + "!");
    }
    else {
        computerScore++;
        alert("You Lose! " + computerChoice + " beats " + humanChoice + "!");
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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
}

function playGame() {
    let rounds = 5;
    while (rounds--) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();