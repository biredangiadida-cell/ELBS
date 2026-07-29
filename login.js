document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const telegramId = document.getElementById("telegramId").value;

    if (telegramId === "") {
        document.getElementById("message").innerHTML =
            "❌ Mee Telegram ID kee galchi.";
        return;
    }

    document.getElementById("message").innerHTML =
        "⏳ Login eeggachaa jira...";
});
