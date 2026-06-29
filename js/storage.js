// ===========================================
// Storage & App Initialization Module
// Handles loading saved preferences on startup
// ===========================================

function initializeApp() {
    
    // 1. Load Theme Preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    // 2. Load User Profile Name
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const displayName = document.querySelector("#display-name");
    const profileNameInput = document.querySelector("#profile-name");

    if (savedUser && savedUser.fullName) {
        if (displayName) displayName.textContent = savedUser.fullName;
        if (profileNameInput) profileNameInput.value = savedUser.fullName;
    }

    // 3. Load Currency Preference
    const savedCurrency = localStorage.getItem("currency") || "₹";
    const currencySelect = document.querySelector("#currency");
    
    if (currencySelect) {
        currencySelect.value = savedCurrency;
    }
}

// Run immediately when the file loads
initializeApp();