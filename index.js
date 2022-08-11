const log = console.log

function Player(selection, score, scoreText) {
    this.selection = selection
    this.score = score
    this.scoreText = scoreText
}

const player = new Player('', 0, document.getElementById('player-score-number'))
const computer = new Player('', 0, document.getElementById('computer-score-number'))

const gameElements = {
    gameContainer: document.getElementById('game-container'),
    startBtn: document.getElementById('start-btn'),
    scoreBoard: document.getElementById('score-board'),
    tieScoreText: document.getElementById('tie-score'),
    winnerText: document.querySelector('.winner')
}

const { gameContainer, startBtn, scoreBoard, tieScoreText, winnerText } = gameElements




gameContainer.style.display = 'none'

scoreBoard.style.display = "none"

tieScoreText.style.display = 'none'

winnerText.style.display = "none"

const showTieScore = () => {
    tieScoreText.style.display = 'block'
}

const hideTieScore = () => {
    tieScoreText.style.display = 'none'
}



let gameOptions = ['rock', 'paper', 'scissors']

let computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

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
                    winnerText.textContent = player.score == 5 ? 'you won 😎' : 'computer won'
                    winnerText.style.display = 'block'
                }
            })

        const paperBtn = document.getElementById('paper')
            paperBtn.addEventListener('click', () => {
                player.selection = 'paper';
                computer.selection = computerPlay()

                playRound(player.selection, computer.selection)

                if (player.score == 5 || computer.score == 5) {
                    gameContainer.style.display = 'none'
                    winnerText.textContent = player.score == 5 ? 'you won 😎' : 'computer won'
                    winnerText.style.display = 'block'
                }
            })

        const scissorsBtn = document.getElementById('scissors')
            scissorsBtn.addEventListener('click', () => {
                player.selection = 'scissors';
                computer.selection = computerPlay()

                playRound(player.selection, computer.selection)

                if (player.score == 5 || computer.score == 5) {
                    gameContainer.style.display = 'none'
                    winnerText.textContent = player.score == 5 ? 'you won 😎' : 'computer won'
                    winnerText.style.display = 'block'
                }
            })
        }}
