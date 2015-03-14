////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
if (move !== "undefined"){
    return move;
}else {
    return getInput();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    if (move !== "undefined"){
    return move;
}else {
    return randomPlay();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;

    if(playerMove == computerMove){
        winner = "tie";
    }else{
        switch(playerMove){
            case "rock":
                if(computerMove == "scissors"){
                    winner = "player";
                }else if(computerMove == "paper"){
                    winner = "computer";
                }
                break;
            case "scissors":
                if(computerMove == "paper"){
                    winner = "player";
                }else if(computerMove == "rock"){
                    winner = "computer";
                }
                break;
            case "paper":
                if(computerMove == "rock"){
                    winner = "player";
                }else if(computerMove == "scissors"){
                    winner = "computer";
                }
                break;
        }

    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
     while(playerWins < 5 || computerWins < 5){
        var pm = getPlayerMove();
        var cm = getComputerMove();
        var winner = getWinner(pm, cm);
        if(winner == "player"){
            playerWins++;
            console.log("Player" + playerWins);
            console.log("Computer" + computerWins);

        }else{
            computerWins++;
            console.log("Player" + playerWins);             
            console.log("Computer" + computerWins);
        }
        if(playerWins == 5 || computerWins == 5){
            return [playerWins, computerWins];
        }
    }
    return [playerWins, computerWins];
}

