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

let position = 0;
const parentWidth = parentBlock.offsetWidth;
const childWidth = childBlock.offsetWidth;

function moveBlock() {
  if (position < parentWidth - childWidth) {
    position++;
    childBlock.style.left = `${position}px`;
    requestAnimationFrame(moveBlock);
  }
}

childBlock.style.position = "relative";
childBlock.addEventListener("click", () => {
  position = 0;
  moveBlock();
});
