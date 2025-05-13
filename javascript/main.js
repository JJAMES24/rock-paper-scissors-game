let getComputerChoice = () =>{
        let roll = Math.floor( Math.random() * (3 - 0) + 0);
        switch(roll)
        {
            case 0:
                computerChoice = "Rock";
                
                
                break;
            case 1:
                computerChoice = "Paper";
               
                break;
            case 2:
                computerChoice = "Scissors";
               
                break;
            default:
                console.log("Error");

        }

        return computerChoice;
}

let getHumanChoice = () => {

    let capialize = (string) =>
    {
        const newString = string[0].toUpperCase() + 
        string.slice(1).toLowerCase();
        return newString;
    }
    
    let userinput =prompt("Please choose Rock, Paper or Scissors");
    return capialize(userinput);
}


let playRound = (humanChoice , computerChoice) =>{

        if (humanChoice == "Rock" && computerChoice == "Scissors")
            {
                alert("You win! Rock beats Scissors");
                humanScore ++;

                

            }
        else if(humanChoice == "Paper" && computerChoice == "Rock")
        {
                alert("You win! Paper beats Rock");
                humanScore ++;

        }
        else if(humanChoice == "Scissors" && computerChoice == "Paper")
        {
                alert("You win! Paper beats Rock");
                humanScore ++;
   
        }else if (computerChoice == "Rock" && humanChoice == "Scissors")
            {
                alert("You lose! Rock beats Scissors");
                computerScore ++;
 
                

            }
        else if(computerChoice == "Paper" && humanChoice == "Rock")
        {
                alert("You lose! Paper beats Rock");
                computerScore ++;
      
        }
        else if(computerChoice == "Scissors" && humanChoice == "Paper")
        {
                alert("You lose! Scissors beats Paper");
                computerScore ++;
  
        }
        else 
        {
            alert("Draw");
       
        }

 alert(`The score is Human: ${humanScore} vs Computer:${computerScore}` )

}


let playGame = () =>{


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);



}



let roundsPlayed=0;
let humanScore = 0;
let computerScore =0;

while (roundsPlayed!==5) {  
    playGame();
    roundsPlayed++;

}




