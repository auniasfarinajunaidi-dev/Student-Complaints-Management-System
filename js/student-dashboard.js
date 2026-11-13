/*
  UiTM Kelantan Student Complaint Management System
  Student Dashboard JavaScript Logic & Chart.js Integration
*/

document.addEventListener("DOMContentLoaded", function () {
  // Enforce Student Access Control
  checkAccessControl("student");

  const currentUser = getCurrentUser();
  if (currentUser) {
    document.getElementById("studentWelcome").textContent = `Welcome, ${currentUser.name} (${currentUser.id})`;
  }

  const allComplaints = getComplaints();
  // Filter complaints to display ONLY those belonging to the logged-in student
  const myComplaints = allComplaints.filter(c => c.studentId === currentUser.id);

  // Calculate Metrics
  const totalSubmitted = myComplaints.length;
  const pendingCount = myComplaints.filter(c => c.status === "Submitted" || c.status === "Under Review").length;
  const inProgressCount = myComplaints.filter(c => c.status === "In Progress").length;
  const resolvedCount = myComplaints.filter(c => c.status === "Resolved").length;
  const rejectedCount = myComplaints.filter(c => c.status === "Rejected").length;

  // Render Metric Cards
  document.getElementById("totalSubmitted").textContent = totalSubmitted;
  document.getElementById("totalPending").textContent = pendingCount;
  document.getElementById("totalInProgress").textContent = inProgressCount;
  document.getElementById("totalResolved").textContent = resolvedCount;

  // Populate Recent Complaints Table (Top 5)
  const recentTable = document.getElementById("recentComplaintsTable");
  recentTable.innerHTML = "";

  if (myComplaints.length === 0) {
    recentTable.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-3">No complaints submitted yet.</td></tr>`;
  } else {
    const sortedComplaints = [...myComplaints].reverse().slice(0, 5);
    sortedComplaints.forEach(item => {
      let badgeClass = "badge-submitted";
      if (item.status === "Under Review") badgeClass = "badge-under-review";
      if (item.status === "In Progress") badgeClass = "badge-in-progress";
      if (item.status === "Resolved") badgeClass = "badge-resolved";
      if (item.status === "Rejected") badgeClass = "badge-rejected";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><small class="fw-bold">${item.id}</small></td>
        <td>${item.title}</td>
        <td>${item.category}</td>
        <td><span class="badge ${badgeClass}">${item.status}</span></td>
      `;
      recentTable.appendChild(tr);
    });
  }

  // Render Doughnut Chart for Complaint Status
  const ctx = document.getElementById("studentStatusChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Pending / Review", "In Progress", "Resolved", "Rejected"],
      datasets: [{
        data: [pendingCount, inProgressCount, resolvedCount, rejectedCount],
        backgroundColor: [
          "#ed6c02", // Amber / Pending
          "#0288d1", // Blue / In Progress
          "#2e7d32", // Green / Resolved
          "#d32f2f"  // Red / Rejected
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});