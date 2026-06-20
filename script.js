const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", function () {
    menuLinks.classList.toggle("show");
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name === "" || message === "") {
        formMessage.textContent = "Please fill in your name and message.";
    } else {
        formMessage.textContent = "Thank you, " + name + ". Your message has been received.";
        contactForm.reset();
    }
});
