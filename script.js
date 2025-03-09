// Make scores to 0.
let humanScore = 0;
let computerScore = 0;

// get a random number and return if it is rock, paper or scissors.

function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "Rock";
    }  else if (randomNumber == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


//Get a prompt from the user 

function getHumanChoice () {
    return prompt("Choose between rock, paper scissors ");
}


// Change the choices to lower case.

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();


// The game logic

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
} else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
} else  if(humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper");
    computerScore++;
    } else {
        console.log(invalid);
    }
}

//Output the results

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore, computerScore);