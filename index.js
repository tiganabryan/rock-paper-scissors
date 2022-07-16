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

let playerScoreText = document.getElementById('player-score')
let computerScoreText = document.getElementById('computer-score')
let tieScoreText = document.getElementById('tie-score')
tieScoreText.style.display = 'none'

const showTieScore = () => {
    tieScoreText.style.display = 'block'
    // tieScoreText.classList.toggle('fade')
    // when another button is clicked, fade out
}

const hideTieScore = () => {
    tieScoreText.style.display = 'none'
    // tieScoreText.classList.toggle('fade')
    // when another button is clicked, fade out
}

const winner = document.querySelector('.winner')
winner.style.display = "none"



const playRound = (playerSelection) => {
    computerSelection = computerPlay()
    scoreBoard.style.display = 'block'


    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore += 1
        playerScoreText.textContent = playerScore
        // scoreBoard.style.display = 'block' // add this to the game func. should display the second the start button is clicked
        return playerScore

    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        computerScore += 1
        computerScoreText.textContent = computerScore
        // scoreBoard.style.display = 'block'
        return computerScore

    } else if (computerSelection == playerSelection) {
        scoreBoard.style.display = 'block'
        showTieScore()
        setTimeout(hideTieScore, 1500)
        log('tie') // add 'tie round' and then make it disappear after 5 seconds'

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