const image = document.getElementById("img");
const btnOnOff = document.getElementById("btnOnOff");

let on = false;

function turnOnOff() {
    if (!on) {
        image.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
        btnOnOff.textContent = "Turn off the light";
        on = true;
    } else {
        image.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
        btnOnOff.textContent = "Turn on the light";
        on = false;
    }
}

btnOnOff.addEventListener("click", turnOnOff);


