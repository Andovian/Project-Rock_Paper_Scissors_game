let player_wins = 0;
let computer_wins = 0;
let draw = 0;
let round = 1;
const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        // console.log(e.path[0].id);
        let selection = e.path[0].id;
        
        playRound(selection, computerSelection());
        total();
    });
});

// Randomly return Rock, Paper, or Scissors for the computer
function computerSelection() {
    const ROCK = 0;
    const PAPER = 1;
    const SCISSORS = 2;

    let computerChoice = Math.floor(Math.random() * (SCISSORS - ROCK + 1) + ROCK);
    if (computerChoice == ROCK) {
        return "rock"
    } else if (computerChoice == PAPER) {
        return "paper"
    } else {
        return "scissors"
    } 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = `Round ${round} Draw | ${playerSelection} = ${computerSelection}`;
        draw += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        results.textContent = `Round ${round} Lost | ${computerSelection} beats ${playerSelection}`;
        computer_wins += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        results.textContent = `Round ${round} Lost | ${computerSelection} beats ${playerSelection}`;
        computer_wins += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        results.textContent = `Round ${round} Lost | ${computerSelection} beats ${playerSelection}`;
        computer_wins += 1;
    } else {
        results.textContent = `Round ${round} Won | ${playerSelection} beats ${computerSelection}`;
        player_wins += 1;
    }
}


function total() {
    const total = document.createElement('div');
    total.setAttribute('id', 'total');

    if (round == 5 && player_wins > computer_wins) {
        total.textContent = `You Win!!! Player wins: ${player_wins},  Computer wins: ${computer_wins},  Draws: ${draw}`;
        results.appendChild(total);
        player_wins = 0;
        computer_wins = 0;
        draw = 0;
        round = 1;
    } else if (round == 5 && player_wins < computer_wins) {
        total.textContent = `You Lose!!! Player wins: ${player_wins},  Computer wins: ${computer_wins},  Draws: ${draw}`;
        results.appendChild(total);
        player_wins = 0;
        computer_wins = 0;
        draw = 0;
        round = 1;
    } else if (round == 5 && player_wins == computer_wins) {
        total.textContent = `Draw!!! Player wins: ${player_wins},  Computer wins: ${computer_wins},  Draws: ${draw}`;
        results.appendChild(total);
        player_wins = 0;
        computer_wins = 0;
        draw = 0;
        round = 1;
    } else {
        round += 1;
    }
}




