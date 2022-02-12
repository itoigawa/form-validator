const form = document.querySelector(".form");
const formList = document.querySelectorAll(".form .form-control");
const username = formList[0];
const usernameInput = username.querySelector("input");
const usernameValidate = () => {
  if(usernameInput.value.length >= 3 && usernameInput.value.length <= 15) {
    username.className += " success"
  } else if (usernameInput.value.length < 3) {
    username.className += " error"
    username.querySelector("small").textContent = "Username must be at least 3 characters";
  } else {
    username.className += " error"
    username.querySelector("small").textContent = "Username must be less than 15 characters";
  }
}

const email = formList[1];
const emailInput = email.querySelector("input");
const password = formList[2];
const passwordInput = password.querySelector("input");
const confirmPassword = formList[3];
const confirmPasswordInput = confirmPassword.querySelector("input");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  usernameValidate();
})