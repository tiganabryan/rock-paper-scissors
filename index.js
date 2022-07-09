const log = console.log

let computerSelection = ''
let playerSelection = ''

let computerScore = 0
let playerScore = 0

let scoreBoard = document.querySelector('.score-board')
let playerScoreText = document.querySelector('.player-score')
let computerScoreText = document.querySelector('.computer-score')

// playerScoreText.textContent = `your score: ${playerScore}`
// computerScoreText.textContent = `computer's score: ${computerScore}`

    

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

     

    // debugger
    // scoreBoard.appendChild(playerScoreText)
    // scoreBoard.appendChild(computerScoreText)
    // debugger

    // return playerScore, computerScore
}


const game = () => {
    for (let i = 0; i < 5; i++) {
        log(playRound())
        playerScoreText.textContent = `your score: ${playerScore}`
        computerScoreText.textContent = `computer's score: ${computerScore}`
        // return playerScore, computerScore
    }
    const winner = document.querySelector('.winner')
    winner.textContent = playerScore > computerScore ? 'you won this game!' : 'computer won this game!'

    // scoreBoard.appendChild(winner)
}

game()

//starting number, if number is such and such, incrimentor the code by this. in this case, do number+1 each time we loop.