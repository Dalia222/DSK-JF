// global variables (for our form validations)

const userName = document.getElementById('Username');
const firstName = document.getElementById('First Name');
const lastName = document.getElementById('Last Name');
const myForm = document.getElementById('UpdateProfile_Form');
const email = document.getElementById('Email Address');
const CollegeName = document.getElementById('College Name');

// const errorUsername = document.getElementById('errorUsername');
// const errorCurrent_Password = document.getElementById('errorCurPassword');


// numbering format across all countries

// const phoneInputField = document.querySelector('#Phone');
//    const phoneInput = window.intlTelInput(phoneInputField, {
//      utilsScript:
//        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//    });

//    const info = document.querySelector(".alert-info");

// function process(event) {
//  event.preventDefault();

//  const phoneNumber = phoneInput.getNumber();

//  info.style.display = "";
//  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
// }

// function getIp(callback) {
//     fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' }})
//       .then((resp) => resp.json())
//       .catch(() => {
//         return {
//           country: 'us',
//         };
//       })
//       .then((resp) => callback(resp.country));
// }

// countries selections

// mobiscroll.setOptions({
//     locale: mobiscroll.localeAr,
//     theme: 'windows',
//     themeVariant: 'light'
// });

// var inst = mobiscroll.select('#demo-country-picker', {
//     display: 'anchored',
//     filter: true,
//     itemHeight: 40,
//     renderItem: function (item) {
//         return '<div class="md-country-picker-item">' +
//             '<img class="md-country-picker-flag" src="https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png" />' +
//             item.display + '</div>';
//     }
// });

// mobiscroll.util.http.getJson('https://trial.mobiscroll.com/content/countries.json', function (resp) {
//     var countries = [];
//     for (var i = 0; i < resp.length; ++i) {
//         var country = resp[i];
//         countries.push({ text: country.text, value: country.value });
//     }
//     inst.setOptions({ data: countries });
// });

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
    checkRequired([userName, email, curPassword, newPassword, conPassword,firstName,lastName,CollegeName]);
    checkLength(userName, 4, 15);
    checkLength(lastName, 4, 15);
    checkLength(newPassword, 8, 25);
    checkEmail(email);
    checkPasswordMatch(newPassword, conPassword);

    // if (userName.value === '' || userName.value == null) {
    //     errorUsername.innerHTML = ('User name is required');
    // }
    // if (curPassword.value === '' || curPassword.value == null) {
    //     errorCurrent_Password.innerText = ('Password is required');
    // }
    // if (curPassword.value.length <=8) {
    //     errorCurrent_Password.innerText = ('Password must be longer than 8 characters');
    // }
    // // if (message.length > 0) {
    // //     errorMessage.innerText = message.join(', ');
    // // }
});
