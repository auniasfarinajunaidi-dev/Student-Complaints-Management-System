document.addEventListener("DOMContentLoaded", () => {
    const userID = sessionStorage.getItem("userID");
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    
    // Filter aduan milik pelajar ini sahaja
    const myComplaints = complaints.filter(c => c.studentID === userID);

    // Kirim statistik
    const total = myComplaints.length;
    const pending = myComplaints.filter(c => c.status === "Pending").length;
    const resolved = myComplaints.filter(c => c.status === "Resolved").length;

    const statHeadings = document.querySelectorAll(".dashboard-heading");
    if (statHeadings.length >= 4) {
        statHeadings[1].textContent = total;
        statHeadings[2].textContent = pending;
        statHeadings[3].textContent = resolved;
    }

    // Papar aduan terkini dalam jadual
    const table = document.querySelector("table.table");
    if (table) {
        let html = `
            <thead>
                <tr>
                    <th>Complaint ID</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
        `;

        if (myComplaints.length === 0) {
            html += `<tr><td colspan="4" class="text-center">Tiada aduan direkodkan.</td></tr>`;
        } else {
            myComplaints.slice(-3).reverse().forEach(c => {
                let badgeClass = c.status === "Pending" ? "text-bg-warning" : c.status === "In Progress" ? "text-bg-info" : "text-bg-success";
                html += `
                    <tr>
                        <td><strong>${c.id}</strong></td>
                        <td>${c.category}</td>
                        <td>${c.date}</td>
                        <td><span class="badge ${badgeClass}">${c.status}</span></td>
                    </tr>
                `;
            });
        }
        html += `</tbody>`;
        table.innerHTML = html;
    }
});