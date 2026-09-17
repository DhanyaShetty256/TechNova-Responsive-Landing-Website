const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        // Name validation
        if (name.value.trim().length < 3) {
            nameError.textContent = "Please enter at least 3 characters.";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message validation
        if (message.value.trim().length < 10) {
            messageError.textContent = "Message must contain at least 10 characters.";
            isValid = false;
        }

        // Success
        if (isValid) {
            successMessage.textContent =
                "Thank you! Your message has been submitted successfully.";

            contactForm.reset();
        }
    });
}
