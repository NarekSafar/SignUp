const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");

const eyeIcons = document.querySelectorAll(".fa-eye-slash");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener('click' , () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if(pInput.type === "password"){
           eyeIcon.classList.replace("fa-eye-slash" , "fa-eye");
           return pInput.type = "text";
        }
        eyeIcon.classList.replace("fa-eye" , "fa-eye-slash");
           return pInput.type = "password";
    })
})

function checkEmail() {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailInput.value.match(pattern)){
        return emailField.classList.add("invalid");
    } else {
        emailField.classList.remove("invalid");
    }
}

function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passInput.value.match(passPattern)){
        return passField.classList.add("invalid");
    } else {
        passField.classList.remove("invalid");
    }
}

function confirmPass() {
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
        return cPassField.classList.add("invalid");
    } else {
        cPassField.classList.remove("invalid");
    }
}

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();

    emailInput.addEventListener('keyup' , checkEmail);
    passInput.addEventListener('keyup' , createPass);
    cPassField.addEventListener('keyup' , confirmPass);

    if(!emailField.classList.contains("invalid") &&
       !passField.classList.contains("invalid") && 
       !cPassField.classList.contains("invalid"))
    {
       location.href = form.getAttribute("action");
    }
})