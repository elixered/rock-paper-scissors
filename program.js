function computerPlay() {
    let val = Math.floor(Math.random() * 3 + 1);
    if (val === 1)
        return 'rock';
    else if (val === 2)
        return 'paper';
    else return 'scissors';
}

function play(playerSelection, computerSelection) {
    console.log(`you choose ${playerSelection}, computer choose ${computerSelection}`);
    if (playerSelection === computerSelection)
        return `It's a draw! you both choose ${playerSelection}.`
    else if (playerSelection === "rock") {
        if (computerSelection === "paper")
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        else if (computerSelection === "scissors")
            return `you win, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors")
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        else if (computerSelection === "rock")
            return `you win, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock")
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        else if (computerSelection === "paper")
            return `you win, ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("choose rock paper or scissors");
        let computerSelection = computerPlay();
        let msg = play(playerSelection, computerSelection);
        if (msg[4] === 'w')
            playerScore++;
        else if (msg[4] === 'l') computerScore++;
    }
    if (computerScore < playerScore)
        console.log(`you won by ${playerScore}-${computerScore}`);
    else if (computerScore > playerScore)
        console.log(`you lose by ${playerScore}-${computerScore}`);
    else
        console.log(`It's a draw by ${playerScore}-${computerScore}`);

}

game();