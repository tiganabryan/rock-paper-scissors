// const log = console.log


// let computerSelection = ''
// let playerSelection = ''

// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min
//   };

// let gameOptions = ['rock', 'paper', 'scissors']
// const randomIndex = getRandomNumber(0,2)

// computerPlay = () => {
//     return gameOptions[randomIndex]
// }


// let computerScore = 0 
// let playerScore = 0


// let scoreBoard = document.getElementById('score-board')
// scoreBoard.style.display = "none"

let playerScoreText = document.getElementById('player-score')
let computerScoreText = document.getElementById('computer-score')


const gameContainer = document.getElementById('game-container')
// let gameButtons = document.querySelectorAll('.player-selection-btn')
gameContainer.style.display = "none"


// const winner = document.querySelector('.winner')
// winner.style.display = "none"


// const rockBtn = document.getElementById('rock')
// rockBtn.addEventListener('click', () => {
//     playerSelection = 'rock';
//     playRound(playerSelection)
// })

// const paperBtn = document.getElementById('paper')
// rockBtn.addEventListener('click', () => {  //// IT SAYS ROCKBTN OHHH LOL
//     playerSelection = 'paper';
//     playRound(playerSelection)
// })

// const scissorsBtn = document.getElementById('scissors')
// rockBtn.addEventListener('click', () => {
//     playerSelection = 'scissors';
//     playRound(playerSelection)
// })








// const playRound = (playerSelection) => {
//     computerSelection = computerPlay()

//     playerSelection.forEach((button) => {
//         button.addEventListener('click', playerClick)
//     })

//     if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
//     (playerSelection == 'scissors' && computerSelection == 'paper') ||
//     (playerSelection == 'paper' && computerSelection == 'rock')) {
//         return playerScore += 1

//     } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
//     (computerSelection == 'scissors' && playerSelection == 'paper') ||
//     (computerSelection == 'paper' && playerSelection == 'rock')) {
//         return computerScore += 1

//     } else if (computerSelection == playerSelection) {
//         log('tie')

//     } else {
//         log('error')
//     }
// }



const game = () => {

for (let i = 0; i <= 5; i++) {  //when playerscore or comptscore reaches 5
    
   log(playRound(playerSelection))
        playerScoreText.textContent = `your score: ${playerScore}`
        computerScoreText.textContent = `computer's score: ${computerScore}`
   
    if (i == 5) {
        if (playerScore > computerScore) {
            winner.textContent = 'you won this game!'
        } else if (playerScore == computerScore) {
        winner.textContent = 'it\'s a tie!'
        } else {
            winner.textContent = 'computer won this game!'
        }
    }
    }
    // const winner = document.querySelector('.winner')

    
    

}



const start = document.getElementById('start-btn')
start.addEventListener('click', () => {
    gameContainer.style.display = "flex";
    // game()
})


let playerSelection = document.querySelectorAll('.player-selection-btn')


// playerSelection = playerSelection.forEach((button) => {
//     button.addEventListener('click', (e) => {return e.target.id})
// })



playerClick = (e) => {
    if (e.target.id == 'rock') {
        log(e.target)
        return playerSelection = 'rock'
    } else if (e.target.id == 'paper') {
        log(e.target)
        return playerSelection = 'paper'
    } else if (e.target.id == 'scissors') {
        log(e.target)
        return playerSelection = 'paper'
    }
}