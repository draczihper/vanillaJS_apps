const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber == 2 ) {
        computerChoice = "scissors";
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult () {
    if (computerChoice === playerChoice) {
        result = "It's a draw";
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'You win!';
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'You lost!';
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = 'You win!';
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'You lost!';
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'You lost!';
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'You win!';
    }
    resultDisplay.innerHTML = result;
}
