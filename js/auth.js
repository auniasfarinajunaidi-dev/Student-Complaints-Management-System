function loginUser(event) {
    event.preventDefault();

    const userID = document.getElementById("userID").value.trim().toUpperCase();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (userID === "STUDENT001" && password === "student123") {
        sessionStorage.setItem("userRole", "student");
        sessionStorage.setItem("userID", userID);
        window.location.href = "student-dashboard.html";

    } else if (userID === "STAFF001" && password === "admin123") {
        sessionStorage.setItem("userRole", "staff");
        sessionStorage.setItem("userID", userID);
        window.location.href = "staff-dashboard.html";

    } else {
        message.style.color = "red";
        message.textContent = "Invalid ID or password. Try STUDENT001/student123 or STAFF001/admin123";
    }
}
