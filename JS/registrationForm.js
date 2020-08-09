const form = document.getElementById("myfrm");
const username = document.getElementById("username");
const passwd1 = document.getElementById("passwd1");
const passwd2 = document.getElementById("passwd2");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const password1Value = passwd1.value;
  const password2Value = passwd2.value;
  const emailValue = email.value.trim();
  const phoneValue = phoneNumber.value.trim();
  if (usernameValue === "") {
    setErrorFor(username, "Username Cannot Be Blank");
  } else {
    setSuccessFor(username);
  }
  if (password1Value === password2Value && password1Value != "") {
    setSuccessFor(passwd2);
  } else {
    if (password1Value === "") {
      setErrorFor(passwd2, "Password Cannot Be Blank");
    } else {
      setErrorFor(passwd2, "Passwords Do Not Match");
    }
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Invalid Email Id");
  }
  var phoneno = /^\d{10}$/;
  if (phoneValue != undefined && phoneValue.match(phoneno)) {
    setSuccessFor(phoneNumber);
  } else {
    setErrorFor(phoneNumber, "Phone Number Does Not Exist");
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
