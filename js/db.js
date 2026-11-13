```javascript
/*
  UiTM Kelantan Student Complaint Management System
  Local Data Store Initialization (db.js)
*/

// =====================================
// 1. INITIALIZE EMPTY DATABASE
// =====================================

function initDatabase() {

    // Start with an empty complaint list
    // Only initialize if storage does not exist

    if (localStorage.getItem("complaints") === null) {
        localStorage.setItem("complaints", JSON.stringify([]));
    }

    // Complaint categories

    if (localStorage.getItem("complaintCategories") === null) {

        const categories = [
            "Maintenance",
            "Cleanliness",
            "Accommodation",
            "Facilities",
            "Safety",
            "Others"
        ];

        localStorage.setItem(
            "complaintCategories",
            JSON.stringify(categories)
        );
    }

}


// =====================================
// 2. GET ALL COMPLAINTS
// =====================================

function getComplaints() {

    return JSON.parse(
        localStorage.getItem("complaints") || "[]"
    );

}


// =====================================
// 3. SAVE COMPLAINTS
// =====================================

function saveComplaints(complaints) {

    localStorage.setItem(
        "complaints",
        JSON.stringify(complaints)
    );

}


// =====================================
// 4. INITIALIZE DATABASE
// =====================================

initDatabase();
```