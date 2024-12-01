//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existingButton.style.display = "block";
    }

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault(); 

        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
        existingButton.style.display = "block";
    });

    existingButton.addEventListener("click", () => {
        const username = localStorage.getItem("username");
        if (username) {
            alert(`Logged in as ${username}`);
        }
    });
});
