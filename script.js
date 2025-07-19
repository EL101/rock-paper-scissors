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
    classNames = Array.from(result.classList);
    if (classNames.length === 2) {
        result.classList.remove(classNames[1]);
    }
    if (won === 1) {
        result.textContent = ("Tie! You both chose " + humanChoice + "!");
        result.classList.add("tie");
    }
    else if (won === 2) {
        humanScore++;
        result.textContent = ("You Win! " + humanChoice + " beats " + computerChoice + "!");
        result.classList.add("win");
    }
    else {
        computerScore++;
        result.textContent = ("You Lose! " + computerChoice + " beats " + humanChoice + "!");
        result.classList.add("lose");
    }
    humanScoreboard.firstElementChild.textContent = humanScore;
    computerScoreboard.firstElementChild.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        for (let choice of userChoice) {
            choice.remove();
        }
        result.remove();
        const winOrLoseScreen = document.querySelector(".winOrLose");
        
        if (humanScore === 5) {
            winOrLoseScreen.textContent = `You Win! Final Score ${humanScore} - ${computerScore}`;
            winOrLoseScreen.classList.toggle("win");
        }
        else {
            winOrLoseScreen.textContent = `You Lose :( Final Score ${humanScore} - ${computerScore}`;
            winOrLoseScreen.classList.toggle("lose");
        }
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
    
}

const userChoice = document.querySelectorAll("button");
const choiceImages = document.querySelectorAll("img");
for (let choice of userChoice) {
    choice.addEventListener("click", playRound);
    choice.addEventListener("mousedown", (event) => event.target.classList.toggle("button-clicked"));
    choice.addEventListener("mouseup", (event) => event.target.classList.toggle("button-clicked"));
}
for (let image of choiceImages) {
    image.addEventListener("mousedown", event => image.parentElement.classList.toggle("button-clicked"));
    image.addEventListener("mouseup", event => image.parentElement.classList.toggle("button-clicked"));
}
const result = document.querySelector(".result");
const humanScoreboard = document.querySelector(".human-score");
const computerScoreboard = document.querySelector(".computer-score");

