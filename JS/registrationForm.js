const form = document.getElementById("myform");
const username = document.getElementById("full_name");
const passwd1 = document.getElementById("passwd1");
const passwd2 = document.getElementById("passwd2");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  console.log(usernameValue);
  const password1Value = passwd1.value;
  const password2Value = passwd2.value;
  const emailValue = email.value.trim();
  const phoneValue = phoneNumber.value.trim();
  setSuccessFor(document.getElementById("nameError"));
  setSuccessFor(document.getElementById("passwdError"));
  setSuccessFor(document.getElementById("matchError"));
  setSuccessFor(document.getElementById("emailError"));
  setSuccessFor(document.getElementById("phoneError"));
  if (usernameValue === "") {
    setErrorFor(document.getElementById("nameError"), "Name Cannot Be Blank");
  } else {
    setSuccessFor(document.getElementById("nameError"));
  }
  if (password1Value === password2Value && password1Value != "") {
    setSuccessFor(document.getElementById("passwdError"));
    setSuccessFor(document.getElementById("matchError"));
  } else {
    if (password1Value === "") {
      setErrorFor(
        document.getElementById("passwdError"),
        "Password Cannot Be Blank"
      );
    } else {
      if (password2Value === "") {
        setErrorFor(document.getElementById("matchError"), "Re-Enter Password");
      } else {
        setErrorFor(
          document.getElementById("matchError"),
          "Passwords Do Not Match"
        );
      }
    }
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    setSuccessFor(document.getElementById("emailError"));
  } else {
    if (emailValue === "") {
      setErrorFor(document.getElementById("emailError"), "Email ID Required");
    } else {
      setErrorFor(document.getElementById("emailError"), "Invalid Email Id");
    }
  }
  var phoneno = /^\d{10}$/;
  if (phoneValue != undefined && phoneValue.match(phoneno)) {
    setSuccessFor(document.getElementById("phoneError"));
  } else {
    if (phoneValue === "") {
      setErrorFor(
        document.getElementById("phoneError"),
        "Enter Your Phone Number"
      );
    } else {
      setErrorFor(
        document.getElementById("phoneError"),
        "Phone Number Does Not Exist"
      );
    }
  }
}

function setErrorFor(input, message) {
  const small = input.querySelector("small");
  small.innerText = message;
  input.classList.add("error");
}
function setSuccessFor(input) {
  input.classList.remove("error");
}
