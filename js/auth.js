// ===================================
// Authentication Module
// Handles:
// - Login
// - Register
// - Logout
// - Authentication Flow
// ===================================

// DOM Selection
// Pages
const loginPage = document.getElementById("login-page");
const registerPage = document.getElementById("register-page");
const app = document.getElementById("app");

// Forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Login Inputs
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

// Register Inputs
const registerName = document.getElementById("register-name");
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");

// Links
const registerLink = document.getElementById("show-register");
const loginLink = document.getElementById("show-login");

// Logout
const logoutBtn = document.getElementById("logout-btn");


// Authentication Page Navigation
function showLoginPage() {
    loginPage.style.display = "flex";
    registerPage.style.display = "none";
    app.style.display = "none";
}

function showRegisterPage() {
    loginPage.style.display = "none";
    registerPage.style.display = "flex";
    app.style.display = "none";
}

function showAppPage() {
    loginPage.style.display = "none";
    registerPage.style.display = "none";
    app.style.display = "flex";
}

registerLink.addEventListener("click", function (event) {
    event.preventDefault();
    showRegisterPage();
});

loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    showLoginPage();
});


// Login User
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop Refresh

    // Read Inputs
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && username === savedUser.username && password === savedUser.password) {
        showAppPage();
        loginForm.reset();
    } else {
        alert("Invalid Username or Password");
    }
});


// Register User
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page refresh

    // Read Input Values
    const fullName = registerName.value.trim();
    const username = registerUsername.value.trim();
    const password = registerPassword.value.trim();

    if (fullName === "" || username === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    // Create User Object
    const user = {
        fullName,
        username,
        password
    };
    
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
    
    registerForm.reset();
    showLoginPage();
});


// Logout User
logoutBtn.addEventListener("click", function () {
    showLoginPage();
});

// Initialize App State
showLoginPage();