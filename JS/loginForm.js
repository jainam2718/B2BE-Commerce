const form = document.getElementById("myfrm");
const username = document.getElementById("username");
const passwd1 = document.getElementById("passwd");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const password1Value = passwd.value;
  if (usernameValue === "") {
    setErrorFor(username, "Username Cannot Be Blank");
  } else {
    setSuccessFor(username);
  }
  if (password1Value != "") {
    setSuccessFor(passwd);
  } else {
    setErrorFor(passwd, "Password Cannot Be Blank");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "stride error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "stride success";
}
