const inputBox = document.getElementById("input-email");
const inputBtn = document.querySelector(".btn");

const grayColor = "#969696";

inputBtn.addEventListener("click", () => {
  var email = inputBox.value;
  if (checkEmail(email)) {
    clearErroImput();
    inputBox.value = "";
  } else {
    setErroInput();
  }
});

function checkEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
}

function setErroInput() {
  var p = document.querySelector(".form-container p");
  inputBox.style.borderColor = "red";
  p.style.display = "block";
}

function clearErroImput() {
  var p = document.querySelector(".form-container p");
  inputBox.style.borderColor = grayColor;
  p.style.display = "none";
}
