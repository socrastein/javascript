const rps = ["rock", "paper", "scissors", "lizard", "spock"];

const computer = document.getElementById("computer");
const prompt = document.getElementById("prompt");

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

const rulesButton = document.getElementById("rulesButton");


const rules = document.getElementById("rules");
const rulesVideo = document.getElementById("rulesVideo");

const gameContainer = document.getElementById("gameContainer");

const showRules = function() {
    rules.setAttribute("class", "shown");
    rulesVideo.setAttribute("class", "shown");
    gameContainer.setAttribute("class", "hidden");
    rulesButton.innerHTML = 'Hide Rules';
    rulesButton.removeEventListener('click', showRules);
    rulesButton.addEventListener('click', hideRules);
}

const hideRules = function() {
    rules.setAttribute("class", "hidden");
    rulesVideo.setAttribute("class", "hidden");
    gameContainer.setAttribute("class", "shown");
    rulesButton.innerHTML = 'Show Rules';
    rulesButton.removeEventListener('click', hideRules);
    rulesButton.addEventListener('click', showRules);
}

rulesButton.addEventListener('click', showRules);

// Used for displaying RESET
const paper = document.getElementById("paper");

let playerScore = 0;
let computerScore = 0;
let goalScore = 5;

let roundOver = false;
let gameOver = false;

// Return a random number between 0 and 4
function oneInFive(){
    let result = Math.floor(Math.random() * 5);
    return result
}

// Use oneInFive to select computer choice from rps list
function getComputerChoice(){
    let num = oneInFive();
    let choice = rps[num];

    computer.style.backgroundImage = `url(./pics/${choice}.jpg)`;
    computer.innerHTML = '';
    computer.style.backgroundSize = 'contain';

    return choice;
}

// Take two choices and return result as a string
function compareChoices(player, computer){
    if (player == computer){
        return "It's a tie"
    }

    if (player == "rock"){
        if (computer == "paper" || computer == "spock"){
            return "Computer wins"
        } else return "Player wins!"
    }

    if (player == "paper"){
        if (computer == "scissors" || computer == "lizard"){
            return "Computer wins"
        } else return "Player wins!"
    }

    if (player == "scissors"){
        if (computer == "rock" || computer == "spock"){
            return "Computer wins"
        } else return "Player wins!"
    }
    
    if (player == "lizard"){
        if (computer == "rock" || computer == "scissors"){
            return "Computer wins"
        } else return "Player wins!"
    }

    if (player == "spock"){
        if (computer == "paper" || computer == "lizard"){
            return "Computer wins"
        } else return "Player wins!"
    }
        
}

function displayScore(){
    playerDisplay.innerHTML = `Player: ${playerScore}`;
    computerDisplay.innerHTML = `Computer: ${computerScore}`;
}

function clearRound(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.style.borderStyle = 'dashed';
    })
    prompt.innerHTML = 'Make a choice:'
    prompt.style.color = 'black'
    computer.style.backgroundImage = 'none'
    computer.innerHTML = 'CPU'
    roundOver = false;
    if (gameOver){
        gameOver = false;
    }
}

function checkGameOver(){
    if (playerScore == goalScore || computerScore == goalScore){
        if (playerScore > computerScore){
            prompt.innerHTML = 
            "You won!<br>Sheldon would be proud!<br>"
            prompt.style.color = 'green'
            console.log("Player has won");
        } else {
            prompt.innerHTML = 
            "You lost...<br><em>Sheldon is disappointed.</em>"
            prompt.style.color = 'red'
            console.log("Computer has won")
        }
        paper.style.backgroundImage = 'none';
        paper.style.backgroundColor = 'green';
        paper.style.borderColor = 'green';
        paper.innerHTML = 'RESET'
        gameOver = true;

    } 
    else {return}
}

// Get player and computer choices, 
// log each choice and compare them to determine winner/tie

function playRound(playerChoice){

    if (gameOver && playerChoice == "paper"){
        location.reload();
    }

    while (!roundOver){
        // Set selected button & computer border to solid
        selection = document.getElementById(playerChoice)
        selection.style.borderStyle = 'solid';
        computer.style.borderStyle = 'solid';

        let computerChoice = getComputerChoice();

        result = compareChoices(playerChoice, computerChoice);
        prompt.innerHTML = result;

        if (result == "Player wins!"){
            playerScore += 1;
            prompt.style.color = 'green'
        }
        else if (result == "Computer wins"){
            computerScore += 1;
            prompt.style.color = 'red'
        }

        displayScore();

        checkGameOver();

        roundOver = true;
        
        if (!gameOver){
            setTimeout(() => {clearRound();}, 2500);
        }
    }
}
