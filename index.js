const log = console.log

let computerSelection = ''
let playerSelection = ''

let computerScore = 0
let playerScore = 0

let scoreBoard = document.querySelector('.score-board')
let playerScoreText = document.querySelector('.player-score')
let computerScoreText = document.querySelector('.computer-score')
    

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  };

let gameOptions = ['rock', 'paper', 'scissors']
const randomIndex = getRandomNumber(0,2)

computerPlay = () => {
    return gameOptions[randomIndex]
}


const playRound = (computerSelection) => {
    playerSelection = prompt('rock, paper, or scissors? ')
    playerSelection.toLowerCase()
    computerSelection = computerPlay()

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return playerScore += 1

    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        return computerScore += 1

    } else if (computerSelection == playerSelection) {
        log('tie')

    } else {
        log('error')
    }
}


const game = () => {
    for (let i = 0; i < 5; i++) {
        log(playRound())
        playerScoreText.textContent = `your score: ${playerScore}`
        computerScoreText.textContent = `computer's score: ${computerScore}`
    }
    const winner = document.querySelector('.winner')

    if (playerScore > computerScore) {
        winner.textContent = 'you won this game!'
    } else if (playerScore == computerScore) {
    winner.textContent = 'it\'s a tie!'
    } else {
        winner.textContent = 'computer won this game!'
    }

}

game()

