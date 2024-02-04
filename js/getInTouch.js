emailjs.init("hmwioTbWkNdQUfGML"); // Replace with your Email.js User ID

const btn = document.getElementById('getInTouch');

document.getElementById("contact-us__form").addEventListener("submit", function (event) {


    event.preventDefault();
    
    btn.innerHTML = 'Sending...';
    
    const serviceID = 'default_service';
    const templateID = 'template_kxejcp8';
    
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.innerHTML = 'Message sent!';
        }, (err) => {
            btn.innerHTML = 'Error, please try again';
            alert(JSON.stringify(err));
        });
    });
