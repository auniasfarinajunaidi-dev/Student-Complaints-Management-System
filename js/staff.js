document.addEventListener("DOMContentLoaded", () => {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    const total = complaints.length;
    const pending = complaints.filter(c => c.status === "Pending").length;
    const resolved = complaints.filter(c => c.status === "Resolved").length;

    const h3s = document.querySelectorAll(".dashboard-card h3");
    if (h3s.length >= 3) {
        h3s[0].textContent = total;
        h3s[1].textContent = pending;
        h3s[2].textContent = resolved;
    }
});