//  background

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#confirmpassword");

togglePassword2.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password2.getAttribute("type") === "password" ? "text" : "password";
  password2.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

///////////////////////////////////////////////

function validations(event) {
  event.preventDefault();
  let x = document.forms["myform"]["fname"].value;
  if (x === "") {
    document.getElementById("errorfname").innerHTML =
      "You must fill the first name field";
    document.getElementById("errorfname").style.display = "block";
  } else {
    document.getElementById("errorfname").style.display = "none";
  }

  let y = document.forms["myform"]["lanme"].value;
  if (y === "") {
    document.getElementById("errorlname").innerHTML =
      "You must fill the last name field";
    document.getElementById("errorlname").style.display = "block";
  } else {
    document.getElementById("errorlname").style.display = "none";
  }

  let z = document.forms["myform"]["date"].value;
  if (z === "") {
    document.getElementById("errordate").innerHTML =
      "You must fill the date  field";
    document.getElementById("errordate").style.display = "block";
  } else {
    document.getElementById("errordate").style.display = "none";
  }

  let j = document.forms["myform"]["emailin"].value;
  if (j === "") {
    document.getElementById("erroremail").innerHTML =
      "You must fill the email field";
    document.getElementById("erroremail").style.display = "block";
  } else {
    document.getElementById("erroremail").style.display = "none";
  }

  let h = document.forms["myform"]["passwordo"].value;
  if (h === "") {
    document.getElementById("errorpassword").innerHTML =
      "You must fill the password field";
    document.getElementById("errorpassword").style.display = "block";
  } else {
    document.getElementById("errorpassword").style.display = "none";
  }

  let d = document.forms["myform"]["confirmpassword"].value;
  if (d === "") {
    document.getElementById("errorconpassword").innerHTML =
      "You must fill the confirm password field";
    document.getElementById("errorconpassword").style.display = "block";
  } else {
    document.getElementById("errorconpassword").style.display = "none";
  }

  if (h !== d) {
    document.getElementById("matchpasswords").innerHTML =
      "passwords do not match ";
    document.getElementById("matchpasswords").style.display = "block";
  } else {
    document.getElementById("matchpasswords").style.display = "none";
  }
}

document.getElementById("myform").addEventListener("submit", validations);
