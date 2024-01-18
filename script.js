let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;

    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    compScore++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = generateCompChoice();

  console.log("User choice - ", userChoice);
  console.log("Comp choice - ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scisors" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
