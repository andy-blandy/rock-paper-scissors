const options = ["rock", "paper", "scissors"];

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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let didPlayerWin = false;
        let winner = "";
        let loser = "";

        if (humanChoice == computerChoice){
            console.log("Draw! Both players chose " + humanChoice);
        } else if (humanChoice == "rock" && computerChoice == "scissors" ||
                humanChoice == "paper" && computerChoice == "rock" ||
                humanChoice == "scissors" && computerChoice == "paper") {
            didPlayerWin = true;
            winner = humanChoice;
            loser = computerChoice;
            humanScore++;
        } else {
            didPlayerWin = false;
            winner = computerChoice;
            loser = humanChoice;
            computerScore++;
        }

        let winningMsg = "";
        if (didPlayerWin) {
            winningMsg = "You win!";
        } else {
            winningMsg = "You lose!";
        }

        winningMsg += " " + winner + " beats " + loser + "!";
        console.log(winningMsg);
    }

    do {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    } while (humanScore < 5 || computerScore < 5);
}

playGame();