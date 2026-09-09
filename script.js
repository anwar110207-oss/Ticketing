// ==========================================
// anwar110207-oss Ticket Booking Website
// script.js
// ==========================================

// Welcome message
window.onload = function () {
    alert("🎟️ Welcome to anwar110207-oss Ticket Booking!");
};
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
// Booking Form
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const event = document.getElementById("event").value;
    const seat = document.getElementById("seat").value;
    const tickets = parseInt(document.getElementById("tickets").value);

    let price = 0;

    if (event === "Concert") {
        price = 50;
    } else if (event === "Movie") {
        price = 20;
    } else if (event === "Football") {
        price = 35;
    }

    const total = price * tickets;

    document.getElementById("message").innerHTML = `
        <h3>✅ Booking Successful!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event:</strong> ${event}</p>
        <p><strong>Seat:</strong> ${seat}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
        <p><strong>Total Price:</strong> $${total}</p>
        <br>
        <h4>🎉 Thank you for booking with anwar110207-oss Ticket Booking!</h4>
    `;

    bookingForm.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
