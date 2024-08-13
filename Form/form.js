console.log("Jay Bajrangbali");
let Email = document.getElementById("floatingInput");
let password = document.getElementById("floatingPassword")
let span = document.getElementById("error");
let span2 = document.getElementById("error2");
let a ="@";


function checkform() {
    if (floatingInput.value == "") {
        span.innerText = "The email address you entered isn't connected to an account. Find your account and log in.";
        span.style.color ="red";
    }
    // else if (floatingInput.value.includes(a)){
    //     span.innerText ="verified";
    //     span.style.color ="green";
    // } 
    else if (floatingPassword.value == "") {
        span2.innerText ="The password that you've entered is incorrect. ";
        span2.style.color ="red";
    }
}
