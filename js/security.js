// global variables (for our form validations)

const userName = document.getElementById('Username');
const myForm = document.getElementById('UpdateProfile_Form');
const email = document.getElementById('Email Address');
// Passwords variables

const curPassword = document.getElementById('Current Password');
const newPassword = document.getElementById('New Password');
const conPassword = document.getElementById('Confirm Password');

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const span = formControl.querySelector('span');
    span.innerText = message;
}

//show success color
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}

//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}

//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match!');
    }
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([email, curPassword, newPassword, conPassword]);
    checkLength(userName, 4, 15);
    checkLength(lastName, 4, 15);
    checkLength(newPassword, 8, 25);
    checkEmail(email);
    checkPasswordMatch(newPassword, conPassword);
});
