// getting all the needed varaibles

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById("password-input");
const allFieldsError = document.getElementById('all-fields-error');
const successMsg = document.getElementById('success-msg');

const form = document.querySelector(".form-input")

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

//handle inputs for both the email and password

emailInput.addEventListener("input", (event) => {
    emailInput.value = event.target.value;
});

passwordInput.addEventListener("input", (event) => {
    passwordInput.value = event.target.value;
});


function validateAllFields() {
    if (emailInput.value && passwordInput.value) {
        return true;
    }

    else {
        return false;
    }
}


// handle submission of the form

form.addEventListener("submit", (event) => {
   event.preventDefault();
    let emailValue = emailInput.value;
    console.log(typeof(emailValue))
    console.log(emailValue)

    if (validateAllFields()) {
        if (validateEmail(emailValue)) {
            emailError.style.display = "none";
            allFieldsError.style.display = "none"
            successMsg.style.display = "block"
            emailInput.value = "";
            passwordInput.value = "";
            console.log("email works");
            return true;
        } else {
            emailError.style.display = "block";
            successMsg.style.display = "none"
            allFieldsError.style.display = "none"
            return false;
        }
    } else {
        allFieldsError.style.display = "block"
        successMsg.style.display = "none"
        return false;
    }
    




});