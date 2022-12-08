const rps = ["rock", "paper", "scissors"];

// Return a random number between 0 and 3
function oneInThree(){
    let result = Math.floor(Math.random() * 3);
    return result
}

function getComputerChoice(){
    let num = oneInThree();
    choice = rps[num];
    return choice;

}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));