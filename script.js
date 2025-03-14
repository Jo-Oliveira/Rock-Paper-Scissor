// Make scores to 0.

let humanScore = 0;
let computerScore = 0;

// get a random number and return if it is rock, paper or scissors.

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    }  else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}



//Get human choice and start the game using computer choice also

const buttons = document.querySelectorAll("button");

function getHumanChoice () {
        buttons.forEach(btn => {
            btn.addEventListener("click", function () {
                const computerSelection = getComputerChoice();
                const humanChoice = btn.id;
                playRound(humanChoice, computerSelection);
            })
        })
}



// The game logic

function playRound (humanChoice, computerChoice) {
    let result = "";
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore+= 1;
        result = `You losed the round! ${computerChoice} beats ${humanChoice}\n
        Player score: ${humanScore} Computer score: ${computerScore}`;

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore+= 1;
        result = `You win the round! ${humanChoice} beats ${computerChoice}\n
        Player score: ${humanScore} Computer score: ${computerScore}`;

    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore+= 1;
        result = `You win the round! ${humanChoice} beats ${computerChoice}\n
        Player score: ${humanScore} Computer score: ${computerScore}`;

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore+= 1;
        result = `You losed the round! ${computerChoice} beats ${humanChoice}\n
        Player score: ${humanScore} Computer score: ${computerScore}`;

    } else if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        result = `It's a tie! \n Player score: ${humanScore} Computer score: ${computerScore}`;

} else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore+= 1;
    result = `You losed the round! ${computerChoice} beats ${humanChoice}\n
        Player score: ${humanScore} Computer score: ${computerScore}`;

} else  if(humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper");
    computerScore+= 1;
    result = `You win the round! ${humanChoice} beats ${computerChoice}\n
        Player score: ${humanScore} Computer score: ${computerScore}`;

    } else {
        alert("invalid");
    }


// Check if computer wins or human wins

    if(computerScore == 5) {
        result = "COMPUTER WIN... \n refresh the page to start again";
        disableButtons(); 
    }
    if(humanScore == 5) {
        result = "YOU WINN!! \n refresh the page to start again";
        disableButtons();
    }

// Show the results
document.querySelector("span").innerHTML = result;
return;

}

// Disable buttons when the game is over
function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

// Initialize the game
getHumanChoice();
//Output the results

// console.log(playRound(humanSelection, computerSelection));
// console.log(humanScore, computerScore);