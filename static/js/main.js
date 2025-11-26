// static/js/main.js  ← FIXED VERSION (no more red squiggles)
document.addEventListener("DOMContentLoaded", () => {
    // Check if we have the canvas and data
    const ctx = document.getElementById("demandChart");
    if (!ctx) return;

    // Safely parse the data passed from Flask (it's already JSON string)
    const rawDates = ctx.dataset.dates;
    const rawDemand = ctx.dataset.demand;

    if (!rawDates || !rawDemand) {
        console.error("Chart data not found!");
        return;
    }

    const dates = JSON.parse(rawDates);
    const demand = JSON.parse(rawDemand);

    new Chart(ctx, {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: "Demand (Units)",
                data: demand,
                borderColor: "#0071e3",
                backgroundColor: "rgba(0, 113, 227, 0.1)",
                tension: 0.4,
                fill: true,
                pointBackgroundColor: "#0071e3",
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { mode: "index", intersect: false }
            },
            scales: {
                y: { beginAtZero: false },
                x: { grid: { display: false } }
            }
        }
    });
});