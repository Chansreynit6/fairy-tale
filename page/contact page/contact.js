
if (typeof(Storage) !== "undefined") {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedMessage = localStorage.getItem("message");

    if (storedName) document.getElementById("name").value = storedName;
    if (storedEmail) document.getElementById("email").value = storedEmail;
    if (storedMessage) document.getElementById("message").value = storedMessage;

    document.getElementById("contactForm").addEventListener("submit", function(event) {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("message", message);
        event.preventDefault();
    });
} else {
    console.log("Local storage is not supported by this browser.");
}
