function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const amount = document.querySelector("#controls").firstElementChild;
const boxesContainer = document.querySelector("#boxes");
const initialSize = 30;
let currentSize = initialSize;
// let stringToInsert = "";
let arrToAppend = [];

createButton.addEventListener("click", onClick);
destroyButton.addEventListener("click", onClick);

function onClick(event) {
  event.currentTarget.dataset.hasOwnProperty("create")
    ? createBoxes(amount)
    : destroyBoxes();
}

function createBoxes(amount) {
  for (let i = 0; i <= amount.value - 1; i++) {
    const box = document.createElement("div");
    box.style.width = `${currentSize}px`;
    box.style.height = `${currentSize}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    /*
    │ ==========================
    │  using insertAdjacentHTML
    │ ==========================
    */
    // stringToInsert += (`<div style="
    // width: ${currentSize}px;
    // height: ${currentSize}px;
    // background-color:${getRandomHexColor()};"></div>\n`);

    arrToAppend.push(box);
    currentSize += 10;
  }

  boxesContainer.append(...arrToAppend);
  // boxesContainer.insertAdjacentHTML("beforeend", stringToInsert);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  amount.value = "";
  currentSize = initialSize;
  // stringToInsert = "";
  arrToAppend = [];
}
