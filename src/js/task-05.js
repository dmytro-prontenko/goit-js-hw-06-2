const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputField.addEventListener("input", onInput);

function onInput(event) {
  event.currentTarget.value.trim()
    ? (outputField.textContent = event.currentTarget.value)
    : (outputField.textContent = "Anonymous");
}
