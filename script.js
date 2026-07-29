const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.querySelector('input[type="text"]').value,
        phone: document.querySelector('input[type="tel"]').value,
        email: document.querySelector('input[type="email"]').value
    };

    try {
        // URL Railway kee argatte booda YOUR-RAILWAY-DOMAIN bakka buusi
        const response = await fetch("https://YOUR-RAILWAY-DOMAIN.up.railway.app/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("✅ Registration received successfully. Please wait for admin approval.");
            form.reset();
        } else {
            alert("❌ Registration failed. Please try again.");
        }

    } catch (error) {
        alert("❌ Unable to connect to the server.");
        console.error(error);
    }
});
