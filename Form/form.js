console.log("Jay Bajrangbali");
let Email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword");
let text = document.getElementById("floatingText");
let Number = document.getElementById("floatingNumber");
let span = document.getElementById("error");
let span2 = document.getElementById("error2");
let span3 = document.getElementById("error3");
let span4 = document.getElementById("error4");



function checkform() {

    if (text.value == "") {
        span3.style.display = "block"
        span3.innerText = "User name is unvalid";
        span3.style.color = "red";
    }else {
        span3.style.display = "none";
        
    }

    if (password.value == "") {
        span3.style.display = "block"
        span3.innerText = "password is unvalid";
        span3.style.color = "red";
    }else {
        span3.style.display = "none";
        
    }
 
}







