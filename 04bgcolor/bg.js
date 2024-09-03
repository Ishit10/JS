console.log("hello");

let di = 0;
const divs = document.querySelectorAll(".s1");

function hd() {
    divs.forEach(div => {
        div.style.display = "none"
    });
}
function sd(index) {
    hd();
    divs[index].style.display = 'flex';
}

function prev() {
    di = (di - 1 + divs.length) % divs.length;
    sd(di);
}

function next() {
    di = (di + 1) % divs.length;
    sd(di);
}

sd(di);
setInterval(next, 2000); 



