document.addEventListener("DOMContentLoaded", () => {
    // Pastikan pelajar telah login
    const userID = sessionStorage.getItem("userID");
    if (!userID) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("studentID").value = userID;

    const form = document.getElementById("complaintForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const fileInput = document.getElementById("attachment");
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                saveComplaint(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            saveComplaint(null);
        }
    });
});

function saveComplaint(imageData) {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    const newComplaint = {
        id: "CMP-" + Math.floor(100000 + Math.random() * 900000),
        studentID: sessionStorage.getItem("userID"),
        category: document.getElementById("category").value,
        college: document.getElementById("college").value,
        roomNumber: document.getElementById("roomNumber").value,
        description: document.getElementById("description").value,
        image: imageData,
        date: new Date().toLocaleDateString("en-GB"),
        status: "Pending"
    };

    complaints.push(newComplaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Aduan anda berjaya dihantar!");
    window.location.href = "my-complaints.html";
}