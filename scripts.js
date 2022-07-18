
let userScore = 0;
let compScore = 0;
let gamesPlayed = 0;

function resetAll() {

    let userScoreElem = document.querySelector("#userScore");
    userScoreElem.innerText = "User Score: 0";

    let compScoreElem = document.querySelector("#compScore");
    compScoreElem.innerText = "Computer Score: 0";

    let roundsElem = document.querySelector("#rounds");
    roundsElem.innerText = "Rounds Played: 0";


    let choiceElem = document.querySelector(".user-choice");
    choiceElem.innerText = "Play Rock Paper Scissors";

    userScore = 0;
    compScore = 0;
    gamesPlayed = 0;

}


function updateScore(winner) {
    if (winner == "user") {
        userScore++;
        gamesPlayed++;
        const userScoreText = document.querySelector('#userScore');
        userScoreText.innerText = "User Score: " + userScore;
    } else if (winner == "computer") {
        compScore++;
        gamesPlayed++;
        const compScoreText = document.querySelector('#compScore');
        compScoreText.innerText = "Computer Score: " + compScore;
    } else if (winner == "tie") {
        gamesPlayed++;
    }

    const gamesplayedText = document.querySelector('#rounds');
    gamesplayedText.innerText = "Rounds Played: " + gamesPlayed;
}



function updateDiv(text) {
    const userChoiceText = document.querySelector('.user-choice');

    userChoiceText.innerText = text;
}


function getCompChoice() {

    let choices = ["rock", "paper", "scissors"];

    let ranNumber = Math.floor(Math.random() * choices.length);

    choice = choices[ranNumber];


    console.log("Computer chose: " + choice);


    return choice;
}



function playGame(e) {

    if (gamesPlayed == 5) {
        resetAll();
        console.log("5 games played - resetting");
        return;
    }

    let userChoice = e.id;
    let compChoice = getCompChoice();


    let winnerString = playRound(userChoice, compChoice)
    console.log("Winner: " + winnerString);

    let divUpdateText = "You Chose: " + userChoice + "\nComputer chose: " + compChoice + "\n\nWinner: " + winnerString.toUpperCase();
    updateDiv(divUpdateText);

    updateScore(winnerString);
}


function playRound(userChoice, compChoice) {

    userChoice = userChoice.toLowerCase();
    compChoice = compChoice.toLowerCase();

    let winnerString;


    if (userChoice == compChoice) {
        winnerString = "tie";
        return winnerString;
    }
    else if (userChoice == "rock" && compChoice == "paper") {
        winnerString = "computer";
        return winnerString;
    } else if (userChoice == "rock" && compChoice == "scissors") {
        winnerString = "user";
        return winnerString;
    } else if (userChoice == "paper" && compChoice == "rock") {
        winnerString = "user";
        return winnerString;
    } else if (userChoice == "paper" && compChoice == "scissors") {
        winnerString = "computer";
        return winnerString;
    } else if (userChoice == "scissors" && compChoice == "paper") {
        winnerString = "user";
        return winnerString;
    } else if (userChoice == "scissors" && compChoice == "rock") {
        winnerString = "computer";
        return winnerString;
    }

}


