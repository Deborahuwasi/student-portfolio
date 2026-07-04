document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let message=document.getElementById("message").value.trim();

if(name==="" || email==="" || phone==="" || message===""){

alert("Please fill in all fields.");

return;

}

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Please enter a valid email address.");

return;

}

let phonePattern=/^[0-9]{11}$/;

if(!phone.match(phonePattern)){

alert("Please enter an 11-digit phone number.");

return;

}

alert("Message sent successfully!");

document.getElementById("contactForm").reset();

});