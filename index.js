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


playRound = (computerSelection) => {
    playerSelection = prompt('rock, paper, or scissors? ')
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerPlay()

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return `you won! ${playerSelection} beats ${computerSelection}`

    } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')) {
        return `you lose! ${computerSelection} beats ${playerSelection}`

    } else if (computerSelection == playerSelection) {
        return `it's a tie! ${computerSelection} and ${playerSelection} are the same`

    } else {
        return `please try again! ${playerSelection} is not a valid answer`
    }
}


game = () => {
    for (let i = 0; i < 5; i++) {
        log(playRound())
    }
}

game()

//starting number, if number is such and such, incrimentor the code by this. in this case, do number+1 each time we loop.