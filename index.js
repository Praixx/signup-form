var inputValue = document.querySelectorAll(".inputvalue")
var inputMail = document.querySelector(".inputmail")
var form = document.querySelector("form")
var submit = document.getElementById("submit")
var form = document.querySelector("form")
var input = document.querySelector("input")
var firstName = document.getElementById("firstname")
var lastName = document.getElementById("lastname")
var password = document.getElementById("password")
var errorMsg = document.querySelectorAll(".error-msg")
var error_1 = document.querySelector(".error-1")
var error_2 = document.querySelector(".error-2")
var error_3 = document.querySelector(".error-3")
var error_4 = document.querySelector(".error-4")


submit.addEventListener("click", clickError )

function clickError() {
    
   
    var inputMail_value = inputMail.value
    var inputFormat_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    var nameFormat = /^[A-Za-z]+$/
    var firstName_value = firstName.value
    var lastName_value = lastName.value
    var password_value = password.value
    var password_format =  /^\w+$/



     // to check if there is any error in the mail inputted

    if(inputMail_value == inputFormat_mail) {
        return true
    } else{
        error_3.style.display = "block"
        // errorMsg.style.display = "block"
        errorMsg.forEach((error_msg, error_message) => {
            error_msg.style.display = "block"
        });
        
    }
    
    // to check if the first name is inputed in the standard format

    if(firstName_value == nameFormat) {
        return true
    } else{
        error_1.style.display = "block"
    }
    
    // to check if the last name is inputed in the standard format

    if(lastName_value == nameFormat) {
        return true
    } else{
        error_2.style.display = "block"
    }

    // to check if the password inputed contains alpanumaric characters
  
    if(password_value == password_format) {
        return true
    } else {
        error_4.style.display = "block"
    }

}

