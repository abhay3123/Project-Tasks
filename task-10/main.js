const prompt=require("prompt-sync")({sigint:true});

const getUserChoice = () => {
    var userInput = prompt('Rock, Paper or Scissors? ');
    userInput = userInput.toLowerCase();
    if(userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb'){
        return userInput;
    }else{
        console.log(`ERROR : invalid input`);
        return getUserChoice();
    }
}

const getComputerChoice = () => {
    const random_num = Math.floor(Math.random()*3);
    if(random_num == 0){
        return 'rock';
    }else if(random_num == 1){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === 'bomb'){
        return 'You won the game.';
    }
    if(userChoice === computerChoice){
        return 'The game was a tie.'
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Computer won the game.';
        }else{
            return 'You won the game.';
        }
    }if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
            return 'You won the game.';
        }else{
            return 'Computer won the game.';
        }
    }if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
            return 'You won the game.';
        }else{
            return 'Computer won the game.';
        }
    }
}

function playGame()
{
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`You played : ${userChoice}     Computer played : ${computerChoice}`);
    console.log(`Result : ${determineWinner(userChoice, computerChoice)}`);
}

playGame();