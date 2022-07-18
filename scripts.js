


function resetDiv() {
    let userChoiceText = document.querySelector('.user-choice');
    /* let compChoiceText = document.querySelector('.comp-choice');*/


    userChoiceText.innerText = "Play Rock Paper Scissors";
    /* compChoiceText.innerText = " "; */

}



function updateDiv(text) {
    const userChoiceText = document.querySelector('.user-choice');

    userChoiceText.innerText = text;
}


function getCompChoice(){

    let choices = ["rock","paper","scissors"];
    
    let ranNumber = Math.floor(Math.random() * choices.length);
    
    choice = choices[ranNumber];
    
    
    console.log("Computer chose: " +choice);
    
    
    return choice;
    }
    


function playGame(e){

    let userChoice = e.id;
    let compChoice = getCompChoice();


    let winnerString = playRound(userChoice,compChoice)
    console.log("Winner: "+winnerString);

    let divUpdateText = "You Chose: " +userChoice+ "\nComputer chose: "+compChoice+"\nWinner: "+winnerString;
    updateDiv(divUpdateText);
}


function playRound(userChoice, compChoice){

    userChoice = userChoice.toLowerCase();
    compChoice = compChoice.toLowerCase();
    
    let winnerString;
    
    
    if (userChoice == compChoice){
     winnerString = "tie";
     return winnerString;
    }
    else if(userChoice == "rock" && compChoice == "paper"){
     winnerString = "computer";
     return winnerString;
    }else if(userChoice == "rock" && compChoice == "scissors"){
     winnerString = "user";
     return winnerString;
    }else if(userChoice == "paper" && compChoice == "rock"){
     winnerString = "user";
     return winnerString;
    }else if(userChoice == "paper" && compChoice == "scissors"){
     winnerString = "computer";
     return winnerString;
    }else if(userChoice == "scissors" && compChoice == "paper"){
     winnerString = "user";
     return winnerString;
    }else if (userChoice == "scissors" && compChoice == "rock"){
     winnerString = "computer";
     return winnerString;
    }
    
    }
    

