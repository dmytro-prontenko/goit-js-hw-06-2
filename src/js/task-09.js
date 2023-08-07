function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");

btn.addEventListener("click", onClick);

function onClick(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorOutput.textContent = newColor;
}
