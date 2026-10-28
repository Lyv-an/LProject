document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", (e)=>{

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const subject = document.getElementById("subject").value.trim();
const message = document.getElementById("message").value.trim();

if(!name || !email || !subject || !message){

alert("Please fill all fields.");
return;
}

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!pattern.test(email)){
alert("Enter a valid email.");
return;
}

alert("Message sent successfully!");
form.reset();

});

}

});