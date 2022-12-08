const rps = ["rock", "paper", "scissors"];

// Return a random number between 0 and 2
function oneInThree(){
    let result = Math.floor(Math.random() * 3);
    return result
}

// Use oneInThree to select computer choice from rps list
function getComputerChoice(){
    let num = oneInThree();
    let choice = rps[num];
    return choice;
}

// Prompt user for choice and isolate lowercase of first letter to account for spelling errors
// Return rock, paper or scissors depending on if that first letter is r/p/s
function getPlayerChoice(){
    let choice = prompt("Choose rock, paper or scissors: ");
    // let choice = "Rock";
    choice = choice.slice(0, 1).toLowerCase();
    // 
    if (!("rps".includes(choice))){
        console.log("That's not a valid choice")
        return getPlayerChoice()
    }

    if (choice == "r"){
        return "rock";
    } 
    else if (choice == "p"){
        return "paper";
    }
    else return "scissors";
}

// Take two choices and return result as a string
function compareChoices(player, computer){
    if (player == computer){
        return "It's a tie"
    }

    if (player == "rock"){
        if (computer == "paper"){
            return "Computer wins"
        } else return "Player wins!"
        }

    if (player == "paper"){
        if (computer == "scissors"){
            return "Computer wins"
        } else return "Player wins!"
        }

    if (player == "scissors"){
        if (computer == "rock"){
            return "Computer wins"
        } else return "Player wins!"
    }
}

// Get player and computer choices, log each choice and compare them to determine winner/tie

function playRound(){
    let player = getPlayerChoice();
    let computer = getComputerChoice();

    console.log('')
    console.log(`Player chooses ${player}`)
    console.log(`Computer chooses ${computer}`)
    console.log('-'.repeat(10))
    result = compareChoices(player, computer);
    console.log(result)

    return result;
}

// Loop through playRound() for until X number of points is reached

function bestOf(rounds=5){
    playerScore = 0;
    computerScore = 0;
    goal = Math.floor(rounds/2) + 1
    console.log(goal)

    while (true){
        result = playRound();
        if (result == "Player wins!"){
            playerScore += 1;
        }
        else if (result == "Computer wins"){
            computerScore += 1;
        }

        console.log(`\n Player: ${playerScore} \n Computer: ${computerScore}`);

        if (playerScore == goal || computerScore == goal){
            break;
        }
    }
    console.log('-'.repeat(10))

    if (playerScore > computerScore){
        return `Player wins the best of ${rounds}`;

    } else return `Computer wins the best of ${rounds}`;
}

console.log(bestOf())
