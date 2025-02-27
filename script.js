document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        let isValid = true;

        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email format";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (password.length < 6) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
            isValid = false;
        } else {
            document.getElementById("passwordError").textContent = "";
        }

        if (isValid) {
            alert("Form submitted successfully!");
            signupForm.reset();
        }
    });
});
