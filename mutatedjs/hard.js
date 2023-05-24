//for scores
const playerS = document.querySelector(".playerS");
const robotS = document.querySelector(".robotS");
// rock paper scissors
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
//bottom container
const gridContainer = document.querySelector(".rowItem");
//matching container
const gridContainerHidden = document.querySelector(".rowItemHidden");
//repeater img
const reapeter = document.querySelector(".reapeter");
// player choice img container
const containerP = document.querySelector(".playerContainer");
//robot choice img container
const containerR = document.querySelector(".robotContainer");
// result message
const resultMess = document.querySelector(".resultMess");

//img url for rock paper and scissors
const rocksrc = "../img/icons8-rock-100.png";
const papersrc = "../img/icons8-paper-100 (1).png";
const scissorsrc = "../img/icons8-scissors-100 (1).png";

// player score
let playerScore = 0;
let robotScore = 0;

// repeater
reapeter.addEventListener("click", () => {
  gridContainer.classList.remove("activeHide");
  gridContainerHidden.classList.remove("activeShow");
  reapeter.classList.remove("activeShow");
  resultMess.innerText = "Make a Choice";
});

// player rock choice
rock.addEventListener("click", () => {
  //hide and show content
  gridContainer.classList.add("activeHide");
  gridContainerHidden.classList.add("activeShow");
  reapeter.classList.add("activeShow");
  //display rock img
  containerP.src = rocksrc;
  // robot choice
  containerR.src = papersrc;

  robotScore++;
  resultMess.innerText = "You Lose";

  robotS.innerText = robotScore;
});
// player paper choice
paper.addEventListener("click", () => {
  //hide and show content
  gridContainer.classList.add("activeHide");
  gridContainerHidden.classList.add("activeShow");
  reapeter.classList.add("activeShow");
  //display rock img
  containerP.src = papersrc;
  // robot choice
  containerR.src = scissorsrc;
  robotScore++;
  resultMess.innerText = "You Lose";

  robotS.innerText = robotScore;
});
//player scissor choice
scissor.addEventListener("click", () => {
  //hide and show content
  gridContainer.classList.add("activeHide");
  gridContainerHidden.classList.add("activeShow");
  reapeter.classList.add("activeShow");
  //display rock img
  containerP.src = scissorsrc;
  // robot choice
  containerR.src = rocksrc;
  robotScore++;
  resultMess.innerText = "You Lose";

  robotS.innerText = robotScore;
});
