function makeRed() {
    document.getElementById("home").style.color = "red";
}

function makeBlue() {
    document.getElementById("home").style.color = "blue";
}

function makeGreen() {
    document.getElementById("home").style.color = "green";
}


function yellowBackground() {
    document.body.style.backgroundColor = "yellow";
}

function blueBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function whiteBackground() {
    document.body.style.backgroundColor = "white";
}

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function changeMessage() {
    document.getElementById("messages").innerHTML = "Thank you for visiting our ticketing website!";
}
