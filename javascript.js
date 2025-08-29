const options = ["rock", "paper", "scissors"];
const resultsDiv = document.querySelector(".results");

function getComputerChoice() {
    let num = Math.floor(Math.random() * options.length);
    let choice = options[num];
    return choice;
}

function getHumanChoice() {
    let input = prompt("Choose rock (r), paper (p), or scissors (s)");

    if (input == 'r') {
        return options[0];
    } else if (input == 'p') {
        return options[1];
    } else if (input == 's'){
        return options[2];
    }
}

function playRound(humanChoice, computerChoice){
    let didPlayerWin = false;
    let winner = "";
    let loser = "";
    let isDraw = false;

    if (humanChoice == computerChoice){
        isDraw = true;
    } else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper") {
        didPlayerWin = true;
        winner = humanChoice;
        loser = computerChoice;
        //humanScore++;
    } else {
        didPlayerWin = false;
        winner = computerChoice;
        loser = humanChoice;
        //computerScore++;
    }

    let winningMsg = "";
    if (didPlayerWin) {
        winningMsg = "You win!";
    } else {
        winningMsg = "You lose!";
    }

    winningMsg += " " + winner + " beats " + loser + "!";

    if (isDraw) {
        winningMsg = "Draw! Both players chose " + humanChoice;
    }
    resultsDiv.textContent = winningMsg;
}

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        let playerChoice = e.target.id;
        let compChoice = getComputerChoice();
        playRound(playerChoice, compChoice);
    });
});

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;



//     do {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();

//         playRound(humanSelection, computerSelection);
//     } while (humanScore < 5 || computerScore < 5);
// }

// playGame();