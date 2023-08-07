const form = document.querySelector(".login-form");
const email = document.querySelector("[name = email]");
const password = document.querySelector("[name = password]");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (!email.value || !password.value) {
    alert("Enter your data");
  } else {
    const formData = {};
    const elements = event.currentTarget.elements;

    for (let i = 0; i < elements.length - 1; i++) {
      formData[elements[i].name] = elements[i].value;
    }
    console.log(formData);

    form.reset();
  }
}
