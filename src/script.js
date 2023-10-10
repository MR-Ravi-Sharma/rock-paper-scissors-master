// Rock Paper Scissors
const rules = document.getElementById("rules");
const overlay = document.getElementById("overlay");
const choiceSection = document.getElementById("step-1");
const displaying = document.getElementById("displaying");
const yourPickedImg = document.getElementById("yourPickedImg");
const pickedColor = document.getElementById("pickedColor");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScore = document.getElementById("scores");
const result = document.getElementById("result");
const housePickedImg = document.getElementById("housePickedImg");
const houseBgWhite = document.getElementById("houseBgWhite");
const housePickedColor = document.getElementById("housePickedColor");
const playAgainSection = document.getElementById("playAgain");
const step3Changes = document.getElementById("step3Changes");

// more for randomness
const choices = ["rock", "paper", "scissors", "scissors", "paper", "rock", "paper", "paper", "rock", "rock", "scissors", "scissors"];
const allResults = {
  win: "YOU WIN",
  lose: "YOU LOSE",
  draw: "IT'S A DRAW",
};
let computerChoice;
let gameResult;
let score;
score = 0;


const playerPickedUI = {
  colorClass: "",
  imgSrc: "",
};

const computerPickedUI = {
  colorClass: "",
  imgSrc: "",
};

// All STEPS IN GAME
function step1() {
  yourPickedImg.src = playerPickedUI.imgSrc;
  pickedColor.classList.add(playerPickedUI.colorClass);
}

function step2() {
  housePickedColor.classList.remove("bg-darkSpace");
  housePickedColor.classList.add(computerPickedUI.colorClass);
  houseBgWhite.classList.add("bg-white");
  housePickedImg.classList.remove("hidden");
  housePickedImg.src = computerPickedUI.imgSrc;


}

function step3() {
  step3Changes.classList.remove("sm:justify-evenly")
  playAgainSection.classList.remove("hidden");
  result.textContent = gameResult;
  score = countScore();
  playerScore.textContent = score;
}

// COMPUTER CHOICE
function getComputerChoices() {
  const randomNumber = Math.floor(Math.random() * 12);
  console.log(randomNumber)
  return choices[randomNumber];
}

// COUNT SCORE
function countScore() {
  if (gameResult === allResults.win) {
    score += 1;
  } else if (gameResult === allResults.lose && score > 0) {
    score -= 1;
  } else if (gameResult === allResults.draw) {
    score += 0;
  }
  return score;
}

// 1 Starting Point
function startGameChoiceWith(choice) {
  choiceSection.classList.add("hidden");
  displaying.classList.remove("hidden");
  step3Changes.classList.add("sm:justify-evenly")
  UIData(choice, "player");
  step1();

  // GETTING COMPUTER CHOICE
  computerChoice = getComputerChoices();
  console.log(computerChoice);
  console.log(choice);
  UIData(computerChoice, "computer");
  setTimeout(() => {
    step2();
  }, 800);

    switch (choice + computerChoice) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        gameResult = allResults.win;
        break;
  
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        gameResult = allResults.lose;
        break;
  
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        gameResult = allResults.draw;
        break;
    }

    setTimeout(() => {
      step3();
    }, 1600);

}

function playAgain() {
  // REVERSING ALL THE CHANGES
  displaying.classList.add("hidden");
  choiceSection.classList.remove("hidden");
  pickedColor.classList.remove(playerPickedUI.colorClass);
  housePickedColor.classList.remove(computerPickedUI.colorClass);
  housePickedColor.classList.add("bg-darkSpace");
  housePickedImg.classList.add("hidden");
  houseBgWhite.classList.remove("bg-white");
  housePickedImg.src = "";
  playAgainSection.classList.add("hidden");

}

// GAME RULES


//
function UIData(getChoice, from) {
  if (from === "computer") {
    switch (getChoice) {
      case "rock":
        computerPickedUI.colorClass = "bg-rockColor";
        computerPickedUI.imgSrc = "../images/icon-rock.svg";
        break;

      case "paper":
        computerPickedUI.colorClass = "bg-paperColor";
        computerPickedUI.imgSrc = "../images/icon-paper.svg";
        break;

      case "scissors":
        computerPickedUI.colorClass = "bg-scissorsColor";
        computerPickedUI.imgSrc = "../images/icon-scissors.svg";
        break;
    }
  } else if (from === "player") {
    playerPickedUI.colorClass = "";
    switch (getChoice) {
      case "rock":
        playerPickedUI.colorClass = "bg-rockColor";
        playerPickedUI.imgSrc = "../images/icon-rock.svg";
        break;

      case "paper":
        playerPickedUI.colorClass = "bg-paperColor";
        playerPickedUI.imgSrc = "../images/icon-paper.svg";
        break;

      case "scissors":
        playerPickedUI.colorClass = "bg-scissorsColor";
        playerPickedUI.imgSrc = "../images/icon-scissors.svg";
        break;
    }
  }
}

// Hide and Show Game Rules
function showRule() {
  if (rules.dataset.active == "no") {
    rules.classList.remove("hidden");
    rules.classList.add("block");
    overlay.classList.remove("hidden");
    overlay.classList.add("block");
    rules.dataset.active = "yes";
  } else {
    rules.classList.remove("block");
    rules.classList.add("hidden");
    overlay.classList.remove("block");
    overlay.classList.add("hidden");
    rules.dataset.active = "no";
  }
}

function hideRules() {
  rules.classList.remove("block");
  rules.classList.add("hidden");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
  rules.dataset.active = "no";
}