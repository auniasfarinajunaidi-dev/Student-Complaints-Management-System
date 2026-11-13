document.addEventListener("DOMContentLoaded", () => {
    const userID = sessionStorage.getItem("userID");
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const myComplaints = complaints.filter(c => c.studentID === userID);

    const tbody = document.getElementById("complaintTable");
    const emptyMsg = document.getElementById("emptyMessage");

    if (myComplaints.length === 0) {
        emptyMsg.style.display = "block";
    } else {
        emptyMsg.style.display = "none";
        tbody.innerHTML = "";

        myComplaints.reverse().forEach(c => {
            let badgeClass = c.status === "Pending" ? "text-bg-warning" : c.status === "In Progress" ? "text-bg-info" : "text-bg-success";

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${c.id}</strong></td>
                <td>${c.category}</td>
                <td>${c.college}</td>
                <td>${c.roomNumber}</td>
                <td>${c.date}</td>
                <td><span class="badge ${badgeClass}">${c.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-purple" onclick="viewDetails('${c.id}')">View</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
});

function viewDetails(id) {
    sessionStorage.setItem("selectedComplaintID", id);
    window.location.href = "complaint-details.html";
}