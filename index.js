const log = console.log

let computerSelection = ''
let playerSelection = ''

let computerScore = 0 
let playerScore = 0


const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

let gameOptions = ['rock', 'paper', 'scissors']
const randomIndex = getRandomNumber(0,2)

computerPlay = () => {
    return gameOptions[randomIndex]
}



let scoreBoard = document.getElementById('score-board')
scoreBoard.style.display = "none"

const winner = document.querySelector('.winner')
winner.style.display = "none"



const playRound = (playerSelection) => {
    computerSelection = computerPlay()

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return log(playerScore += 1)

    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        return log(computerScore += 1)

    } else if (computerSelection == playerSelection) {
        log('tie')

    } else {
        log('error')
    }
}



const rockBtn = document.getElementById('rock')
    rockBtn.addEventListener('click', () => {
        playerSelection = 'rock';
        // return log(playerSelection)
        playRound(playerSelection)
    })

const paperBtn = document.getElementById('paper')
    paperBtn.addEventListener('click', () => {
        playerSelection = 'paper';
        // return log(playerSelection)
        playRound(playerSelection)
    })

const scissorsBtn = document.getElementById('scissors')
    scissorsBtn.addEventListener('click', () => {
        playerSelection = 'scissors';
        // return log(playerSelection)
        playRound(playerSelection)
    })