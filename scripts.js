function userChoice(e){
    const userChoiceText = document.querySelector('.user-choice');
    
    
    userChoiceText.innerText = "You chose " + e.id;
    }
    
    
    function reset(){
    let userChoiceText = document.querySelector('.user-choice');
    let compChoiceText = document.querySelector('.comp-choice');
    
    
    userChoiceText.innerText = "Make your choice ";
    compChoiceText.innerText = " ";
    
    }