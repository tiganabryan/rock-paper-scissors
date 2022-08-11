const log = console.log

const player = {
    selection: '',
    score: 0,
    scoreText: document.getElementById('player-score-number')
}

const computer = {
    selection: '',
    score: 0,
    scoreText: document.getElementById('computer-score-number')
}

let gameOptions = ['rock', 'paper', 'scissors']

let computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}


const startBtn = document.getElementById('start-btn')

const gameContainer = document.getElementById('game-container')
gameContainer.style.display = 'none'



let scoreBoard = document.getElementById('score-board')
scoreBoard.style.display = "none"

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
        player.score += 1
        player.scoreText.textContent = player.score
        return player.score

    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        computer.score += 1
        computer.scoreText.textContent = computer.score
        return computer.score

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
    player.scoreText.textContent = player.score
    computer.scoreText.textContent = computer.score

    if (player.score < 5 && computer.score < 5) {
        gameContainer.style.display = 'flex'

        const rockBtn = document.getElementById('rock')
            rockBtn.addEventListener('click', () => {
                player.selection = 'rock';
                computer.selection = computerPlay()

                playRound(player.selection, computer.selection)

                if (player.score == 5 || computer.score == 5) {
                    gameContainer.style.display = 'none'
                    winner.textContent = player.score == 5 ? 'you won 😎' : 'computer won'
                    winner.style.display = 'block'
                }
            })

        const paperBtn = document.getElementById('paper')
            paperBtn.addEventListener('click', () => {
                player.selection = 'paper';
                computer.selection = computerPlay()

                playRound(player.selection, computer.selection)

                if (player.score == 5 || computer.score == 5) {
                    gameContainer.style.display = 'none'
                    winner.textContent = player.score == 5 ? 'you won 😎' : 'computer won'
                    winner.style.display = 'block'
                }
            })

        const scissorsBtn = document.getElementById('scissors')
            scissorsBtn.addEventListener('click', () => {
                player.selection = 'scissors';
                computer.selection = computerPlay()

                playRound(player.selection, computer.selection)

                if (player.score == 5 || computer.score == 5) {
                    gameContainer.style.display = 'none'
                    winner.textContent = player.score == 5 ? 'you won 😎' : 'computer won'
                    winner.style.display = 'block'
                }
            })
        }}
