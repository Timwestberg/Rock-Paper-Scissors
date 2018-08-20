// caching the DOM

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.getElementById("score-board");
const rock_i = document.getElementById("r");
const paper_i = document.getElementById("p");
const scissors_i = document.getElementById("s");
const result_span = document.getElementById("result");

// Function for computer choices

function getComputerChoices() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function converto(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";

}

// function for the actions the are caused by outcome

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_span.innerHTML = converto(userChoice) + " obliterates " + converto(computerChoice) + " ,You Win ! ";
}


function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_span.innerHTML = converto(computerChoice) + " obliterates " + converto(userChoice) + "  ,You Lose ! ";
}

function draw(userChoice, computerChoice) {

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_span.innerHTML = "It's a draw!";
}

// guidelines for the rules of the game

function game(userChoice) {
    const computerChoice = getComputerChoices();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

// converts the letters in the program to words for the user

function converto(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";

}

// keyboard toggle controls for player

document.onkeyup = function (event) {
    const letter = event.key.toLowerCase();
    if (letter === "r")
        game("r");
    if (letter === "p")
        game("p");
    if (letter === "s")
        game("s");

}

// Main functions for the buttons as correlated to the game

function main() {
    rock_i.addEventListener("click", function () {
        game("r");
    });

    paper_i.addEventListener("click", function () {
        game("p");
    });

    scissors_i.addEventListener("click", function () {
        game("s");
    });
}

main();
