// ===========================================
// Settings & Preferences Module
// Handles: Theme toggle, Name change,
// Currency updates, and Data Reset
// ===========================================

// DOM Selection
const themeToggleBtn = document.querySelector("#theme-toggle");
const navThemeBtn = document.querySelector("#theme-btn");
const resetDataBtn = document.querySelector("#reset-data");
const profileNameInput = document.querySelector("#profile-name");
const currencySelect = document.querySelector("#currency");
const displayName = document.querySelector("#display-name");

function toggleTheme(event) {
    if(event) event.preventDefault();

    // Toggle the class on the body
    document.body.classList.toggle("light-mode");
    
    // Check if light mode is currently active
    const isLight = document.body.classList.contains("light-mode");
    
    // Save to local storage
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
if (navThemeBtn) navThemeBtn.addEventListener("click", toggleTheme);

if (profileNameInput) {
    profileNameInput.addEventListener("input", function (event) {
        const newName = event.target.value.trim();
        
        // Update Navbar in real-time
        displayName.textContent = newName || "User";

        // Save updated name to local storage
        const savedUser = JSON.parse(localStorage.getItem("user")) || {};
        savedUser.fullName = newName;
        localStorage.setItem("user", JSON.stringify(savedUser));
    });
}

if (currencySelect) {
    currencySelect.addEventListener("change", function (event) {
        const selectedCurrency = event.target.value;
        localStorage.setItem("currency", selectedCurrency);
        alert("Currency updated to " + selectedCurrency);
    });
}

if (resetDataBtn) {
    resetDataBtn.addEventListener("click", function () {
        const confirmReset = confirm("⚠️ Are you sure? This will permanently delete ALL transactions, settings, and your account.");

        if (confirmReset) {
            localStorage.clear(); // Wipes everything
            window.location.reload(); // Refreshes page to send user back to login screen
        }
    });
}