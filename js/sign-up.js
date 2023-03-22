function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//  background

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#myInput");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#myInput2");

togglePassword2.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});


///////////////////////////////////////////////