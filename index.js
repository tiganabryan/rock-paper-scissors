const log = console.log

const user = {
    selection: '',
    score: 0,
    scoreText: ''
}

const computer = {
    selection: '',
    score: 0,
    scoreText: ''
}

let computerSelection = ''
let playerSelection = ''

let computerScore = 0 
let playerScore = 0


let gameOptions = ['rock', 'paper', 'scissors']

let computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}


const startBtn = document.getElementById('start-btn')

const gameContainer = document.getElementById('game-container')
gameContainer.style.display = 'none'



let scoreBoard = document.getElementById('score-board')
scoreBoard.style.display = "none"

let playerScoreText = document.getElementById('player-score-number')
let computerScoreText = document.getElementById('computer-score-number')

let tieScoreText = document.getElementById('tie-score')
tieScoreText.style.display = 'none'

const showTieScore = () => {
    tieScoreText.style.display = 'block'
}

const hideTieScore = () => {
    tieScoreText.style.display = 'none'
}

const winner = document.querySelector('.winner')
winner.style.display = "none"



const playRound = (playerSelection, computerSelection) => {
    scoreBoard.style.display = 'block'


    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore += 1
        playerScoreText.textContent = playerScore
        return playerScore

    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        computerScore += 1
        computerScoreText.textContent = computerScore
        return computerScore

    } else if (computerSelection == playerSelection) {
        scoreBoard.style.display = 'block'
        showTieScore()
        setTimeout(hideTieScore, 1500)

    } else {
        log('error')
    }
}


startBtn.addEventListener('click', () => {
    game()
})

const game = () => {
    scoreBoard.style.display = "block"
    playerScoreText.textContent = playerScore
    computerScoreText.textContent = computerScore

    if (playerScore < 5 && computerScore < 5) {
        gameContainer.style.display = 'flex'

        const rockBtn = document.getElementById('rock')
            rockBtn.addEventListener('click', () => {
                user.selection = 'rock';
                computer.selection = computerPlay()

                playRound(playerSelection, computerSelection)

                if (playerScore == 5 || computerScore == 5) {
                    gameContainer.style.display = 'none'
                    winner.textContent = playerScore == 5 ? 'you won 😎' : 'computer won'
                    winner.style.display = 'block'
                }
            })

        const paperBtn = document.getElementById('paper')
            paperBtn.addEventListener('click', () => {
                user.selection = 'paper';
                computer.selection = computerPlay()

                playRound(playerSelection, computerSelection)

                if (playerScore == 5 || computerScore == 5) {
                    gameContainer.style.display = 'none'
                    winner.textContent = playerScore == 5 ? 'you won 😎' : 'computer won'
                    winner.style.display = 'block'
                }
            })

        const scissorsBtn = document.getElementById('scissors')
            scissorsBtn.addEventListener('click', () => {
                user.selection = 'scissors';
                computer.selection = computerPlay()

                playRound(playerSelection, computerSelection)

                if (playerScore == 5 || computerScore == 5) {
                    gameContainer.style.display = 'none'
                    winner.textContent = playerScore == 5 ? 'you won 😎' : 'computer won'
                    winner.style.display = 'block'
                }
            })
        }}
