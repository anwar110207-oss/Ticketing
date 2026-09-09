// ==========================================
// anwar110207-oss Ticket Booking Website
// script.js
// ==========================================


// ================= WELCOME MESSAGE =================

window.onload = function () {
    alert("🎟️ Welcome to anwar110207-oss Ticket Booking!");
};


// ================= CHANGE HEADING COLOUR =================

function changeColor(color) {
    document.getElementById("home").style.color = color;
}


function makeRed() {
    document.getElementById("home").style.color = "red";
}


function makeBlue() {
    document.getElementById("home").style.color = "blue";
}


function makeGreen() {
    document.getElementById("home").style.color = "green";
}


// ================= CHANGE BACKGROUND =================

function yellowBackground() {
    document.body.style.backgroundColor = "yellow";
}


function blueBackground() {
    document.body.style.backgroundColor = "lightblue";
}


function whiteBackground() {
    document.body.style.backgroundColor = "white";
}


// ================= DARK / LIGHT MODE =================

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}


function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}


// ================= BOOKING FORM =================

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm =
        document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();


        // Get form information

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const event =
            document.getElementById("event").value;

        const seat =
            document.getElementById("seat").value;

        const tickets =
            parseInt(
                document.getElementById("tickets").value
            );


        // Set ticket price

        let price = 0;


        if (event === "Concert") {

            price = 50;

        }

        else if (event === "Movie") {

            price = 20;

        }

        else if (event === "Football") {

            price = 35;

        }


        // Calculate total

        const total = price * tickets;


        // Display booking confirmation

        document.getElementById("message").innerHTML = `

            <h3>✅ Booking Successful!</h3>

            <p>
                <strong>Name:</strong> ${name}
            </p>

            <p>
                <strong>Email:</strong> ${email}
            </p>

            <p>
                <strong>Event:</strong> ${event}
            </p>

            <p>
                <strong>Seat:</strong> ${seat}
            </p>

            <p>
                <strong>Tickets:</strong> ${tickets}
            </p>

            <p>
                <strong>Total Price:</strong> $${total}
            </p>

            <h4>
                🎉 Thank you for booking with
                anwar110207-oss Ticket Booking!
            </h4>

        `;


        // Clear the form

        bookingForm.reset();

    });


    // ================= SMOOTH SCROLLING =================

    document.querySelectorAll("nav a").forEach(function (link) {

        link.addEventListener("click", function (e) {

            e.preventDefault();


            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});


