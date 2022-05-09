const playerSelection = playerPlay();
const computerSelection = computerPlay();

// Randomly return Rock, Paper, or Scissors
function computerPlay() {
    const ROCK = 0;
    const PAPER = 1;
    const SCISSORS = 2;

    let computerChoice = Math.floor(Math.random() * (SCISSORS - ROCK + 1) + ROCK)

    console.log(computerChoice);

    if (computerChoice == ROCK) {
        return 'ROCK'
    } else if (computerChoice == PAPER) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
    
}

function playerPlay() {
    let choice = prompt('Enter Rock, Paper, or Scissors');
    let selection = choice.toUpperCase();

    while (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
        if (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
            choice = prompt("Invalid option: Please pick Rock, Paper, or Scissors");
            selection = choice.toUpperCase();
        } else {
            return selection
        }
    }
    console.log(selection);
}

function playRound(playerSelection, computerSelection) {
    if (player == computerSelection) {
        return 'Draw!'
    } else if (player == 'PAPER' && computerSelection == 'SCISSORS') {
        return `You lose!! ${computerSelection} beats ${player}`
    } else if (player == 'ROCK' && computerSelection == 'PAPER') {
        return `You lose!! ${computerSelection} beats ${player}`
    } else if (player == 'SCISSORS' && computerSelection == 'ROCK') {
        return `You lose!! ${computerSelection} beats ${player}`
    } else {
        return `You win!! ${player} beats ${computerSelection}`
    }
}

//function game() {
//    playRound(playerSelection, computerSelection)
//}

//console.log(playRound(playerSelection, computerSelection));


