const form = document.getElementById('form');
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const errorUser = document.getElementById('enterUser');
const errorEmail = document.getElementById('enterEmail');
const errorPassword = document.getElementById('enterPassword');
const errorConfirm = document.getElementById('confirmPassword');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    valideUser();
    valideEmail();
    validePassword();
    validePassword2();
});  
        
function valideEmail() {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailformat)) {
        email.style.borderColor = "green";
        errorEmail.innerHTML = "";
        return true;
    } else {
        email.style.borderColor = "red";
        errorEmail.innerHTML = "Email is not valid"
        return false;
    }
}       

function valideUser() {
    const userName = user.value;
    if (userName === "" || userName.length < 3) {
        errorUser.innerHTML = "Username must be at least 3 characters";
        user.style.borderColor = "red";
        return false;
    } else {
        user.value.innerHTML = user.value;
        user.style.borderColor = "green";
        errorUser.innerHTML = '';
        return true;
    }
}                           

function validePassword() {
    if (password.value == "" || password.value.length < 6) {
        errorPassword.innerHTML = "Password must be at least 6 characters";
        password.style.borderColor = "red"; 
        return false;
    } else {
        password.style.borderColor = "green";
        errorPassword.innerHTML = "";
        return true;
    }
}           

function validePassword2() {
    if (confirmPassword.value == "") {
        errorConfirm.innerHTML = "Password2 is required";
    } else if (password.value != confirmPassword.value) {
        confirmPassword.style.borderColor = "red";
        errorConfirm.innerHTML = "Password2 does not match"
        return false;
    } else {
        confirmPassword.style.borderColor = "green";
        errorConfirm.innerHTML = "";
        return true;
    }
}