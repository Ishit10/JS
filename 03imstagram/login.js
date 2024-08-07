

function users() {
    let la1 = document.getElementById("label1");
    let in1 = document.getElementById("input1");

    if (in1.value == "") {
        console.log(la1);

       la1.style.fontSize ="14px"
        la1.style.top = "16px";
        

    } else {
        console.log(la1);
        
        la1.style.top = "5px";
        la1.style.fontSize = "12px";
    }
}



function pass() {
    let la2 = document.getElementById("label2");
    let in2 = document.getElementById("input2");

    if (in2.value == "") {
        la2.style.top = "16px";
        la2.style.fontSize = "14px";

    } else {
        la2.style.top = "5px";
        la2.style.fontSize = "12px";
    }
}


function show() {
    let show = document.getElementById("so");
    let hide = document.getElementById("hid");
    let input2 = document.getElementById("input2");
    show.style.display = "none";
    hide.style.display = "block";
    input2.type = "text";
}


function hide() {
    let show = document.getElementById("so");
    let hide = document.getElementById("hid");
    let passd = document.getElementById("input2");
    hide.style.display = "none";
    show.style.display = "block";
    input2.type = "password";
}





