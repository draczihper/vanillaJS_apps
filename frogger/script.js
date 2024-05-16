const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll('.log-left')
let currentIndex = 76;
const width = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      if (currentIndex % width !== 0)currentIndex -= 1;
      break;
    case "ArrowRight":
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      if (currentIndex - width >= 0 )currentIndex -= width;
      break;
    case "ArrowDown":
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }
  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  logsLeft.forEach(logLeft => moveLogLeft(logLeft))
}

function moveLogLeft(logLeft) {
  switch (true) {
    case logLeft.classList.contains('li'):
      
      break;
  
    default:
      break;
  }
}

console.log(2)