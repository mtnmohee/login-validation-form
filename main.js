const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("login");

submitButton.addEventListener("mouseover", (button) => {
  let email = emailInput.value;
  let password = passwordInput.value;

  let validateEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.test(email);
  if (!validateEmail) {
    emailInput.style.border = "2px solid red";
  } else {
    emailInput.style.border = "2px solid green";
  }
  let validatePassword = /[0-9a-zA-Z]{8}/.test(password);
  if (!validatePassword) {
    passwordInput.style.border = "2px solid red";
  } else {
    passwordInput.style.border = "2px solid green";
  }

  if (!validateEmail || !validatePassword) {
    button.target.classList.toggle("move");
    submitButton.style.background = "red";
  } else {
    button.target.classList.toggle("stop");
    submitButton.style.background = "green";
  }
});
