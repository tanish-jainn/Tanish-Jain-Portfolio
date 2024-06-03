document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Use EmailJS to send the email
    emailjs.send("service_rykrwhc", "template_vtss9r2", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('status').innerText = "Message sent successfully!";
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('status').innerText = "Failed to send message. Please try again.";
    });
});
