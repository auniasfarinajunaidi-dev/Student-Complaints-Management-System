document.addEventListener("DOMContentLoaded", () => {
    // 1. Dapatkan peranan pengguna & ID aduan dari session
    const userRole = sessionStorage.getItem("userRole"); // "student" atau "staff"
    const complaintID = sessionStorage.getItem("selectedComplaintID");
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    // 2. Cari aduan mengikut ID
    const item = complaints.find(c => c.id === complaintID);

    // Sekiranya aduan tidak dijumpai
    if (!item) {
        alert("Aduan tidak dijumpai!");
        window.location.href = (userRole === "student") ? "my-complaints.html" : "manage-complaints.html";
        return;
    }

    // 3. SEFAHAMAN PERANAN (ADAPTIF MENGIKUT USER)
    const backBtn = document.querySelector(".navbar a.btn-outline-secondary");
    const navBrand = document.querySelector(".navbar-brand");
    const portalSubtitle = document.querySelector(".dashboard-heading p.text-muted");
    const statusCardCol = document.getElementById("statusForm")?.closest(".col-lg-4");
    const infoCardCol = document.querySelector(".col-lg-8");

    if (userRole === "student") {
        // Sesuaikan Halaman untuk Pelajar
        if (backBtn) {
            backBtn.href = "my-complaints.html";
            backBtn.innerHTML = `<i class="bi bi-arrow-left"></i> Back to My Complaints`;
        }
        if (navBrand) {
            navBrand.href = "student-dashboard.html";
        }
        if (portalSubtitle) {
            portalSubtitle.textContent = "Student Portal";
        }
        // Sembunyikan kad kemaskini status untuk pelajar
        if (statusCardCol) {
            statusCardCol.style.display = "none";
        }
        // Luaskan kad aduan supaya kemas (Full Width)
        if (infoCardCol) {
            infoCardCol.classList.remove("col-lg-8");
            infoCardCol.classList.add("col-lg-12");
        }
    } else {
        // Sekiranya Staff
        if (backBtn) {
            backBtn.href = "manage-complaints.html";
            backBtn.innerHTML = `<i class="bi bi-arrow-left"></i> Back to Complaints`;
        }
        if (navBrand) {
            navBrand.href = "staff-dashboard.html";
        }
        if (portalSubtitle) {
            portalSubtitle.textContent = "Staff Portal";
        }
    }

    // 4. PAPARKAN DATA ADUAN
    if (document.getElementById("complaintID")) document.getElementById("complaintID").textContent = item.id;
    if (document.getElementById("studentID")) document.getElementById("studentID").textContent = item.studentID;
    if (document.getElementById("category")) document.getElementById("category").textContent = item.category;
    if (document.getElementById("college")) document.getElementById("college").textContent = item.college;
    if (document.getElementById("roomNumber")) document.getElementById("roomNumber").textContent = item.roomNumber;
    if (document.getElementById("date")) document.getElementById("date").textContent = item.date;
    if (document.getElementById("description")) document.getElementById("description").textContent = item.description;

    // Tetapkan Status Badge
    const statusBadge = document.getElementById("currentStatus");
    if (statusBadge) {
        statusBadge.textContent = item.status;
        let badgeColor = item.status === "Pending" ? "text-bg-warning" : item.status === "In Progress" ? "text-bg-info" : "text-bg-success";
        statusBadge.className = `badge rounded-pill ${badgeColor}`;
    }

    // Paparkan Gambar (Jika Ada)
    const imageContainer = document.getElementById("imageContainer");
    if (imageContainer) {
        if (item.image) {
            imageContainer.innerHTML = `<img src="${item.image}" class="img-fluid rounded border mt-2" style="max-height: 300px;">`;
        } else {
            imageContainer.innerHTML = `<p class="text-muted">No image uploaded.</p>`;
        }
    }

    // 5. KEMASKINI STATUS OLEH STAFF ONLY
    const statusForm = document.getElementById("statusForm");
    if (statusForm && userRole === "staff") {
        statusForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const newStatus = document.getElementById("newStatus").value;
            if (!newStatus) return;

            item.status = newStatus;
            localStorage.setItem("complaints", JSON.stringify(complaints));

            alert("Status aduan berjaya dikemaskini!");
            location.reload();
        });
    }
});