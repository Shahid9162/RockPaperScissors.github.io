let userScore = 0;
let sysScore = 0;

const choices = document.querySelectorAll(".choice");
const userScoreS = document.querySelector("#user");
const systemScoreS = document.querySelector("#system");

const genSysChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rndmIdx = Math.floor(Math.random() * 3);
  return options[rndmIdx];
};

const msg = document.querySelector("#msg");

const drawGame = () => {
  console.log("It's draw");
  msg.innerHTML = "It's a Draw. Play again!";
  msg.style.backgroundColor = "#aaaaaa";
};

const showWinner = (userWon) => {
  if (userWon) {
    userScore++;
    userScoreS.innerHTML = userScore;
    console.log("You Won!");
    msg.innerHTML = "You Won!";
    msg.style.backgroundColor = "#22bb33";
  } else {
    sysScore++;
    systemScoreS.innerHTML = sysScore;
    console.log("You Lose!");
    msg.innerHTML = "You Lose!";
    msg.style.backgroundColor = "#bb2124";
  }
};

const playGame = (userChoice) => {
  console.log("User choice =", userChoice);
  const sysChoice = genSysChoice();
  console.log("System choice =", sysChoice);

  if (userChoice === sysChoice) {
    drawGame();
  } else {
    userWon = true;
    if (userChoice === "rock") {
      userWon = sysChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWon = sysChoice === "scissor" ? false : true;
    } else {
      userWon = sysChoice === "rock" ? false : true;
    }
    showWinner(userWon);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});
