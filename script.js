//selecting form elements
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let bioInput = document.getElementById("bio")

//selecting error elements

let nameerror = document.getElementById("nameError")
let emailerror = document.getElementById("emailError")
let passworderror = document.getElementById("passwordError")
let bioerror = document.getElementById("bioError")

//Selecting other elements
 let form = document.getElementById("registrationform")
 let counter = document.getElementById("counter")
 let submitbtn = document.getElementById("submitbtn")
 let success = document.getElementById("successMessage")




// Name validation

 nameInput.addEventListener("input",function(){
    success.textContent = "";
if(nameInput.value.trim()===""){
    nameerror.textContent="Name required"
}else{
    nameerror.textContent=""
}
FormValidate()
 })


//  Email validation

 let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 

emailInput.addEventListener("input",function(){
    success.textContent = "";
    if(emailInput.value.trim()===""){
        emailerror.textContent="Email required"
    }else if(!emailPattern.test(emailInput.value)){
        emailerror.textContent ="Enter valid email id"
    }else{
        emailerror.textContent=""
    }
    FormValidate()
})


//password validation
passwordInput.addEventListener("input",function(){
    success.textContent = "";
    if(passwordInput.value.trim() ===""){
        passworderror.textContent="password required"
    }else if(passwordInput.value.length < 6){
        passworderror.textContent = " Password is atleast 6 charcter"
    }else{
        passworderror.textContent=""
    }
    FormValidate()
})
//bio textarea validation

bioInput.addEventListener("input",function(){
    success.textContent = "";
    counter.textContent = bioInput.value.length + " / 200 characters "
if(bioInput.value.trim() === ""){
 bioerror.textContent = "Bio is required"
}else{
    bioerror.textContent = ""
}
FormValidate()
})

//form calidation
function FormValidate(){
    let nameValied = nameInput.value.trim() !=""
    let emailValid = emailPattern.test(emailInput.value) 
    let PasswordValid = passwordInput.value.length >= 6
    let bioValid = bioInput.value.trim() != ""

    submitbtn.disabled = !(nameValied && emailValid && PasswordValid && bioValid)
}
form.addEventListener("submit", function (event) {
    event.preventDefault();

    FormValidate();

    if (!submitbtn.disabled) {
        success.textContent = "Registration successful!";
        form.reset();

        counter.textContent = "0 / 200 characters";
        nameerror.textContent = "";
        emailerror.textContent = "";
        passworderror.textContent = "";
        bioerror.textContent = "";

        FormValidate();
    }
});