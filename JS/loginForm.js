const form = document.getElementById("myfrm");
const username = document.getElementById("username");
const passwd1 = document.getElementById("passwd");
form.addEventListener("submit", (e) => {
  console.log("a");
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const password1Value = passwd.value;
  if (usernameValue === "") {
    setErrorFor(
      document.getElementById("usernameError"),
      "Username Cannot Be Blank"
    );
  } else {
    setSuccessFor(document.getElementById("usernameError"));
  }
  if (password1Value != "") {
    setSuccessFor(document.getElementById("passwordError"));
  } else {
    setErrorFor(
      document.getElementById("passwordError"),
      "Password Cannot Be Blank"
    );
  }
}

function setErrorFor(input, message) {
  const small = input.querySelector("small");
  small.innerText = message;
  input.className = "stride error";
}
function setSuccessFor(input) {
  input.className = "stride success";
}
