const inputField = document.querySelector("#validation-input");
const inputFieldData = inputField.dataset.length;
console.log(inputFieldData);

inputField.addEventListener("blur", onBlur);

function onBlur(event) {
  event.currentTarget.value.length < inputFieldData
    ? (inputField.classList = "invalid")
    : (inputField.classList = "valid");
}
