// ===========================================
// Analytics & Chart Module
// Handles dynamic calculations for progress bars
// and Chart.js integration
// ===========================================

let financeChartInstance = null;

export function updateAnalyticsAndChart() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    let income = 0;
    let expense = 0;

    // Calculate totals
    transactions.forEach(transaction => {
        if (transaction.type.toLowerCase() === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }
    });

    const total = income + expense;
    let incomePercent = 0;
    let expensePercent = 0;

    if (total > 0) {
        incomePercent = (income / total) * 100;
        expensePercent = (expense / total) * 100;
    }

    // Update custom HTML/CSS Progress Bars
    const incomeBar = document.querySelector("#income-bar");
    const expenseBar = document.querySelector("#expense-bar");

    if (incomeBar) incomeBar.style.width = incomePercent + "%";
    if (expenseBar) expenseBar.style.width = expensePercent + "%";

    // Initialize or Update Chart.js Instance
    const ctx = document.getElementById("cashflow-chart");
    if (!ctx) return;

    // If chart already exists, destroy it before rendering fresh data
    if (financeChartInstance) {
        financeChartInstance.destroy();
    }

    financeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Income (₹)', 'Expense (₹)'],
            datasets: [{
                label: 'Cash Flow Analysis',
                data: [income, expense],
                backgroundColor: [
                    '#22c55e', // Success Green
                    '#ef4444'  // Danger Red
                ],
                borderWidth: 0,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Text elements are handled by custom markup
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#334155' // Matching border color var
                    },
                    ticks: {
                        color: '#94a3b8' // Text secondary color var
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
}

// Automatically execute on module run
updateAnalyticsAndChart();