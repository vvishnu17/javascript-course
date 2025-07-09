let myMove;
let computerMove;
let wins = 0;
let loses = 0;
let ties = 0;
images = [
  "https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png",
  "https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png",
  "https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png",
];
const block = document.getElementById("result");
const myResult = document.getElementById("resultPara");
function updateResult(winLoseTie) {
  if (winLoseTie === "You Win") wins += 1;
  else if (winLoseTie === "Computer Wins") loses += 1;
  else ties += 1;
}
function showResult() {
  myResult.textContent = `Wins: ${wins},Losses: ${loses},Ties: ${ties}`;
}
function result(finalResult, url1, url2) {
  block.innerHTML = "";
  const paragraph1 = document.createElement("p");
  paragraph1.textContent = finalResult;
  paragraph1.classList.add("show-result");
  block.appendChild(paragraph1);
  const paragraph2 = document.createElement("p");
  paragraph2.appendChild(document.createTextNode("Player: "));
  let image1 = document.createElement("img");
  image1.src = url1;
  image1.classList.add("emoji");
  paragraph2.appendChild(image1);
  paragraph2.appendChild(document.createTextNode("Compute: "));
  let image2 = document.createElement("img");
  image2.src = url2;
  image2.classList.add("emoji");
  paragraph2.appendChild(image2);
  block.appendChild(paragraph2);
  updateResult(finalResult);
  showResult();
}

function setMove(move) {
  myMove = move;
  computerMove = Math.floor(Math.random() * 3);
  if (myMove === computerMove) {
    result("Tie", images[myMove], images[computerMove]);
  } else {
    if (myMove === 0) {
      if (computerMove === 1) {
        result("Computer Wins", images[myMove], images[computerMove]);
      } else {
        result("You Win", images[myMove], images[computerMove]);
      }
    } else if (myMove === 1) {
      if (computerMove === 0) {
        result("You Win", images[myMove], images[computerMove]);
      } else {
        result("Computer Wins", images[myMove], images[computerMove]);
      }
    } else {
      if (computerMove === 0) {
        result("Computer Wins", images[myMove], images[computerMove]);
      } else {
        result("You Win", images[myMove], images[computerMove]);
      }
    }
  }
}
function onReset() {
  block.innerHTML = "";
  wins = 0;
  loses = 0;
  ties = 0;
  showResult();
}
