const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
let counterValues = 0;

decrement.addEventListener("click", onClick);
increment.addEventListener("click", onClick);

function onClick(event) {
  event.currentTarget.dataset.action === "increment"
    ? counterValues++
    : counterValues--;

  document.querySelector("#value").textContent = counterValues;
}
