function showMessage() {
    alert("Welcome to my active website!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    document.getElementById("contactForm").reset();
});