const analyticsSection = document.querySelector("#analytics-section");
const analyticsBtn = document.querySelector("#nav-analytics");

const dashboardSection = document.querySelector("#dashboard-section");
const transactionSection = document.querySelector("#transaction-section");
const settingsSection = document.querySelector("#settings-section");

const dashboardBtn = document.querySelector("#nav-dashboard");
const transactionBtn = document.querySelector("#nav-transactions");
const settingsBtn = document.querySelector("#nav-settings");

function hideAllPages(){

    dashboardSection.style.display = "none";
    transactionSection.style.display = "none";
    settingsSection.style.display = "none";
    analyticsSection.style.display = "none";

}

function showDashboard() {

    hideAllPages();

    dashboardSection.style.display = "block";

}

function showTransactions() {

    hideAllPages();

    transactionSection.style.display = "block";

}

function showSettings() {

    hideAllPages();

    settingsSection.style.display = "block";

}

dashboardBtn.addEventListener("click", function(e){

    e.preventDefault();

    showDashboard();

});

transactionBtn.addEventListener("click", function(e){

    e.preventDefault();

    showTransactions();

});

settingsBtn.addEventListener("click", function(e){

    e.preventDefault();

    showSettings();

});

showDashboard();


function showAnalytics(){

    hideAllPages();

    analyticsSection.style.display = "block";

}

analyticsBtn.addEventListener("click", function(e){

    e.preventDefault();

    showAnalytics();

});