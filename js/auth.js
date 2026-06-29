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
}

function showRegisterPage() {
    loginPage.style.display = "none";
    registerPage.style.display = "flex";
}

registerLink.addEventListener("click", function (event) {

    event.preventDefault();

    showRegisterPage();

});

loginLink.addEventListener("click", function (event) {

    event.preventDefault();

    showLoginPage();

});

// default page
showLoginPage();



// ===========================================
// Register User
// ===========================================

registerForm.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();

    // Read Input Values
    const fullName = registerName.value.trim();
    const username = registerUsername.value.trim();
    const password = registerPassword.value.trim();


    if (
        fullName === "" ||
        username === "" ||
        password === ""
)   {
    alert("Please fill all fields.");
    return;
}

// Create User Object
const user = {
    fullName,
    username,
    password
};

// Print User Object
console.log(user);

});