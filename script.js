let player_wins = 0;
let computer_wins = 0;
let round = 1;

const buttons = document.querySelectorAll('button');
const rounds = document.getElementById('rounds');
const score = document.getElementById('score');
const results = document.getElementById('results');
const finalScore = document.getElementById('finalScore');
const playerWinCount = document.getElementById('playerWinCount');
const computerWinCount = document.getElementById('computerWinCount');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        // console.log(e.path[0].id);
        let selection = e.path[0].id;
        playRound(selection, computerSelection());
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
        results.textContent = `Draw ${playerSelection} is equal to ${computerSelection}`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        results.textContent = `${computerSelection} beats ${playerSelection}.`;
        computer_wins += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        results.textContent = `${computerSelection} beats ${playerSelection}.`;
        computer_wins += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        results.textContent = `${computerSelection} beats ${playerSelection}.`;
        computer_wins += 1;
    } else {
        results.textContent = `${playerSelection} beats ${computerSelection}.`;
        player_wins += 1;
    }
    updateScore();
    endgame();
}


function updateScore() {
    playerWinCount.textContent = `Player: ${player_wins}`;
    computerWinCount.textContent = `Computer: ${computer_wins}`;
    rounds.textContent = `Round: ${round}`;
}


function endgame() {
    const final = document.createElement('div');
    final.setAttribute('id', 'final');

    if (player_wins >= 5) {
        final.textContent = 'You Win!';
        finalScore.append(final);
        player_wins = 0;
        computer_wins = 0;
        round = 1;
    } else if (computer_wins >= 5) {
        final.textContent = 'You Lose.';
        finalScore.append(final);
        player_wins = 0;
        computer_wins = 0;
        round = 1;
    } else {
        round += 1;
        finalScore.textContent = "";
    }
}