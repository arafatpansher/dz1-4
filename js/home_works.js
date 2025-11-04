const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

gmailButton.addEventListener("click", () => {
  const gmailValue = gmailInput.value.trim();
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (gmailRegex.test(gmailValue)) {
    gmailResult.textContent = "✅ Валидная почта";
    gmailResult.style.color = "limegreen";
  } else {
    gmailResult.textContent =
      "❌ Невалидная почта (должен быть формат example@gmail.com)";
    gmailResult.style.color = "red";
  }
});

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let x = 0;
let y = 0;
let direction = "right";
const parentWidth = parentBlock.offsetWidth;
const parentHeight = parentBlock.offsetHeight;
const childWidth = childBlock.offsetWidth;
const childHeight = childBlock.offsetHeight;

function moveBlock() {
  if (direction === "right") {
    if (x < parentWidth - childWidth) {
      x++;
    } else {
      direction = "down";
    }
  } else if (direction === "down") {
    if (y < parentHeight - childHeight) {
      y++;
    } else {
      direction = "left";
    }
  } else if (direction === "left") {
    if (x > 0) {
      x--;
    } else {
      direction = "up";
    }
  } else if (direction === "up") {
    if (y > 0) {
      y--;
    } else {
      direction = "right";
    }
  }

  childBlock.style.left = `${x}px`;
  childBlock.style.top = `${y}px`;

  requestAnimationFrame(moveBlock);
}

childBlock.addEventListener("click", () => {
  x = 0;
  y = 0;
  direction = "right";
  moveBlock();
});

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const secondsDisplay = document.getElementById("seconds");

let seconds = 0;
let timer = null;

startBtn.addEventListener("click", () => {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;
    secondsDisplay.textContent = seconds;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  secondsDisplay.textContent = seconds;
});
