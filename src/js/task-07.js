const rangeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeControl.addEventListener("change", onChange);

function onChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
