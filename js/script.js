
// ==========================================
// STUDENT COMPLAINT SYSTEM - HOMEPAGE CHARTS
// ==========================================


// MONTHLY COMPLAINTS BAR CHART

const monthlyCanvas = document.getElementById("monthlyChart");

if (monthlyCanvas) {

    new Chart(monthlyCanvas, {
        type: "bar",

        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June"
            ],

            datasets: [{
                label: "Number of Complaints",

                data: [14, 18, 22, 16, 25, 25],

                backgroundColor: [
                    "#57317F",
                    "#5689D8",
                    "#39A99A",
                    "#E8A34A",
                    "#DB718C",
                    "#8C76C6"
                ],

                borderRadius: 8,
                borderSkipped: false,
                barThickness: 35
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                },

                tooltip: {
                    enabled: true
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5
                    },
                    grid: {
                        color: "#EEEEF2"
                    }
                },

                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}



// ==========================================
// COMPLAINTS BY CATEGORY DOUGHNUT CHART
// ==========================================

const categoryCanvas = document.getElementById("categoryChart");

if (categoryCanvas) {

    new Chart(categoryCanvas, {
        type: "doughnut",

        data: {
            labels: [
                "Maintenance",
                "Cleanliness",
                "Accommodation",
                "Facilities",
                "Safety",
                "Wi-Fi / Internet",
                "Transportation",
                "Academic",
                "Food / Cafeteria",
                "Others"
            ],

            datasets: [{
                label: "Complaints",

                data: [
                    22, 18, 16, 15, 12,
                    10, 8, 7, 6, 6
                ],

                backgroundColor: [
                    "#57317F",
                    "#5689D8",
                    "#39A99A",
                    "#E8A34A",
                    "#DB718C",
                    "#8C76C6",
                    "#55A6C9",
                    "#E6C45A",
                    "#8BB477",
                    "#A6A6B5"
                ],

                borderWidth: 3,
                borderColor: "#FFFFFF",
                hoverOffset: 8
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            cutout: "65%",

            plugins: {
                legend: {
                    display: true,
                    position: "bottom",

                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        padding: 15,
                        font: {
                            size: 11
                        }
                    }
                },

                tooltip: {
                    enabled: true
                }
            }
        }
    });
}
