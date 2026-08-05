// Booking Form

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event){

event.preventDefault();

alert(
"🎉 Booking Successful!\n\nThank you for booking with SkyTicket.\n\nA confirmation email will be sent shortly."
);

form.reset();

});

// Welcome Message

window.onload = function(){

console.log("Welcome to SkyTicket!");

};

// Smooth Scroll for Navigation

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const section=document.querySelector(this.getAttribute("href"));

section.scrollIntoView({

behavior:"smooth"

});

});

});
