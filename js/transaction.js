const addTransactionBtn = document.querySelector("#add-transaction-btn");
const closeModalBtn = document.querySelector("#close-modal");
const transactionModal = document.querySelector("#transaction-modal");
const transactionForm = document.querySelector("#transaction-form");

const transactionTitle = document.querySelector("#transaction-title");
const transactionAmount = document.querySelector("#transaction-amount");
const transactionCategory = document.querySelector("#transaction-category");
const transactionDate = document.querySelector("#transaction-date");
const transactionType = document.querySelector("#transaction-type");


const balanceElement = document.querySelector("#balance");
const incomeElement = document.querySelector("#income");
const expenseElement = document.querySelector("#expense");
const transactionCountElement = document.querySelector("#transaction-count");

const transactionTableBody = document.querySelector("#transaction-body");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

let editIndex = null;

transactionForm.addEventListener("submit", saveTransaction);
addTransactionBtn.addEventListener("click", openTransactionModal);
closeModalBtn.addEventListener("click", closeTransactionModal);

function openTransactionModal() {

    transactionModal.style.display = "flex";

}

function closeTransactionModal() {

    transactionModal.style.display = "none";

}


function saveTransaction(event) {

    event.preventDefault();

    const title = transactionTitle.value;
    const amount = Number(transactionAmount.value);
    const category = transactionCategory.value;
    const date = transactionDate.value;
    const type = transactionType.value;

    const transaction = {
        title,
        amount,
        category,
        date,
        type
    };

    if (editIndex === null) {

        transactions.push(transaction);

    } else {

        transactions[editIndex] = transaction;

        editIndex = null;

    }

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    renderTransactions(); 
    transactionForm.reset();
    closeTransactionModal();

    console.log("Transaction Saved Successfully");
    updateStatistics();
    console.log(transactions);
}



loadTransactions();

function loadTransactions() {

    renderTransactions();

}

function renderTransactions() {

    transactionTableBody.innerHTML = "";

    transactions.forEach((transaction, index) => {

        transactionTableBody.innerHTML += `
            <tr>
                <td>${transaction.title}</td>
                <td>${transaction.category}</td>
                <td>₹${transaction.amount}</td>
                <td>${transaction.date}</td>
                <td>${transaction.type}</td>
                <td class="action-buttons">
                    <button
                        class="edit-btn"
                        onclick="editTransaction(${index})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteTransaction(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });
    updateStatistics();
};


function deleteTransaction(index) {

    transactions.splice(index, 1);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    renderTransactions();

}

//using ES Modules (app.js imports transaction.js), the inline HTML not work so we use
window.deleteTransaction = deleteTransaction;
window.editTransaction = editTransaction;



function updateStatistics() {

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {

        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }

    });

    const balance = totalIncome - totalExpense;

    balanceElement.textContent = `₹${balance}`;
    incomeElement.textContent = `₹${totalIncome}`;
    expenseElement.textContent = `₹${totalExpense}`;
    transactionCountElement.textContent = transactions.length;

}


window.addEventListener("click", function (event) {

    if (event.target === transactionModal) {

        closeTransactionModal();

    }

});


function editTransaction(index){

    editIndex = index;

    const transaction = transactions[index];

    transactionTitle.value = transaction.title;

    transactionAmount.value = transaction.amount;

    transactionCategory.value = transaction.category;

    transactionDate.value = transaction.date;

    transactionType.value = transaction.type;

    openTransactionModal();

}