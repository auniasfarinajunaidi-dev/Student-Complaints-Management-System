document.addEventListener("DOMContentLoaded", () => {
    renderTable();

    document.getElementById("searchComplaint").addEventListener("input", renderTable);
    document.getElementById("filterStatus").addEventListener("change", renderTable);
});

function renderTable() {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    const search = document.getElementById("searchComplaint").value.toLowerCase();
    const filter = document.getElementById("filterStatus").value;

    const tbody = document.getElementById("manageComplaintTable");
    const emptyMsg = document.getElementById("emptyMessage");

    // Kemaskini statistik
    document.getElementById("totalComplaints").textContent = complaints.length;
    document.getElementById("pendingComplaints").textContent = complaints.filter(c => c.status === "Pending").length;
    document.getElementById("resolvedComplaints").textContent = complaints.filter(c => c.status === "Resolved").length;

    const filtered = complaints.filter(c => {
        const matchSearch = c.id.toLowerCase().includes(search) || c.studentID.toLowerCase().includes(search);
        const matchStatus = filter === "" || c.status === filter;
        return matchSearch && matchStatus;
    });

    tbody.innerHTML = "";

    if (filtered.length === 0) {
        emptyMsg.style.display = "block";
    } else {
        emptyMsg.style.display = "none";
        filtered.forEach(c => {
            let badgeClass = c.status === "Pending" ? "text-bg-warning" : c.status === "In Progress" ? "text-bg-info" : "text-bg-success";

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${c.id}</strong></td>
                <td>${c.studentID}</td>
                <td>${c.category}</td>
                <td>${c.college}</td>
                <td>${c.roomNumber}</td>
                <td>${c.date}</td>
                <td><span class="badge ${badgeClass}">${c.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-purple" onclick="openDetails('${c.id}')">Manage</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function openDetails(id) {
    sessionStorage.setItem("selectedComplaintID", id);
    window.location.href = "complaint-details.html";
}