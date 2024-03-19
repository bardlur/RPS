const choices = ["rock", "paper", "scissors"];

const userName = prompt("What is your name?");
const userChoice = prompt("Choose rock, paper, scissors:");

if(userChoice) {
    console.log(`${userName} choose: ${userChoice}`);  
} else {
    console.log(`${userName} is cheated!!`);  // when userChoice is empty!
}

const randomNumber = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNumber];
console.log(`Computer chooses: ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log("It's a tie!!");
} else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        console.log(`${userName} is winner!`);
    } else if (computerChoice === "paper") {
        console.log(`${userName} is loser!`);
    } else {
        console.log("It's a tie!!");
    }
} else if (userChoice === "paper") {
    if (computerChoice === rock) {
        console.log(`${userName} is winner!`);
    } else if (computerChoice === paper) {
        console.log("It's a tie!!");
    } else {
        console.log(`${userName} is loser!`);
    }
} else {
    if (computerChoice === "scissors") {
        console.log("It's a tie!!");
    } else if (computerChoice === "rock") {
        console.log(`${userName} is loser!`);
    } else {
        console.log(`${userName} is winner!`);
    }
}