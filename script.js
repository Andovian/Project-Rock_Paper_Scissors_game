let player_wins = 0;
let computer_wins = 0;

// Randomly return Rock, Paper, or Scissors
function computerPlay() {
    const ROCK = 0;
    const PAPER = 1;
    const SCISSORS = 2;

    let computerChoice = Math.floor(Math.random() * (SCISSORS - ROCK + 1) + ROCK);

    if (computerChoice == ROCK) {
        return "ROCK"
    } else if (computerChoice == PAPER) {
        return "PAPER"
    } else {
        return "SCISSORS"
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
    return selection
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw!'
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        computer_wins += 1;
        return `You lose!! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        computer_wins += 1;
        return `You lose!! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        computer_wins += 1;
        return `You lose!! ${computerSelection} beats ${playerSelection}`
    } else {
        player_wins += 1;
        return `You win!! ${playerSelection} beats ${computerSelection}`
    }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        console.log(playRound(playerPlay(), computerPlay()));
        console.log("Player wins: " + player_wins + ", Computer wins: " + computer_wins);
    }
        
}

game();


