let form = document.querySelector("#mc-embedded-subscribe-form")
form.addEventListener("submit",submitForm)

function submitForm(event) {
    event.preventDefault()
    // The code to handle the submission and send data to mailchimp
    .then(data => {
        if(data.status === 'subscribed'){
            form.style.display = "none"
        }else{
            // Handle the error
        }
    })
}