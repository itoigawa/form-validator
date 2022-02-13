const form = document.querySelector("form");
const formList = document.querySelectorAll("form .form-control");
const username = formList[0];
const usernameInput = username.querySelector("input");
const usernameValidate = () => {
  // usernameが3文字以上かつ15文字以下
  if(usernameInput.value.length >= 3 && usernameInput.value.length <= 15) {
	username.className = "form-control success";
    // usernameが3文字未満
  } else if (usernameInput.value.length < 3) {
    username.className = "form-control error";
    username.querySelector("small").textContent = "Username must be at least 3 characters";
    // 上記以外
  } else {
    username.className = "form-control error";
    username.querySelector("small").textContent = "Username must be less than 15 characters";
  }
}

const email = formList[1];
const emailInput = email.querySelector("input");
const emailValidate = () => {
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(emailRegexp.test(emailInput.value)) {
    email.className = "form-control success";
  } else {
    email.className = "form-control error";
    email.querySelector("small").textContent = "Email is not valid";
  }
}

const password = formList[2];
const passwordInput = password.querySelector("input");
const confirmPassword = formList[3];
const confirmPasswordInput = confirmPassword.querySelector("input");

const passwordValidate = () => {
  // パスワードと確認パスワードが完全一致
  const passwordMatched = passwordInput.value === confirmPasswordInput.value;
  // パスワードが6文字以上かつ25文字以下
  const acceptablePassword = passwordInput.value.length >= 6 && passwordInput.value.length <= 25;
  // パスワードが6文字未満
  const tooShortPassword = passwordInput.value.length > 0 && passwordInput.value.length < 6;
  // パスワードが25文字より大きい
  const tooLongPassword = passwordInput.value.length > 25;

  if(acceptablePassword) {
    password.className = "form-control success";
    
    if(passwordMatched) {
      confirmPassword.className = "form-control success";
    } else {
      confirmPassword.className = "form-control error";
      confirmPassword.querySelector("small").textContent = "Passwords do not match";
    }
	}

  if(tooLongPassword) {
    password.className = "form-control error";
    password.querySelector("small").textContent = "Password must be less than 25 characters";

    if(passwordMatched) {
      confirmPassword.className = "form-control success";
    } else {
      confirmPassword.className = "form-control error";
      confirmPassword.querySelector("small").textContent = "Passwords do not match";
    }
  }

  if(tooShortPassword) {
  	password.className = "form-control error";
  	password.querySelector("small").textContent = "Password must be at least 6 characters";

    if(passwordMatched) {
      confirmPassword.className = "form-control success";
    } else {
      confirmPassword.className = "form-control error";
      confirmPassword.querySelector("small").textContent = "Passwords do not match";
    }
  }

  // パスワードが空
  if(!passwordInput.value) {
  	password.className = "form-control error";
  	password.querySelector("small").textContent = "Password must be at least 6 characters";
    // 確認パスワードが空
    if(!confirmPasswordInput.value) {
      confirmPassword.className = "form-control error";
      confirmPassword.querySelector("small").textContent = "Password2 is required";
    } else {
      confirmPassword.className = "form-control error";
      confirmPassword.querySelector("small").textContent = "Passwords do not match";
    }
  } 

}

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  usernameValidate();
  emailValidate();
  passwordValidate();
})
