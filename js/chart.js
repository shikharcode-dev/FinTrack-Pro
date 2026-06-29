const transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

let income = 0;
let expense = 0;

transactions.forEach(transaction=>{

    if(transaction.type.toLowerCase()=="income"){

        income += transaction.amount;

    }else{

        expense += transaction.amount;

    }

});

const total = income + expense;

let incomePercent = 0;
let expensePercent = 0;

if(total>0){

    incomePercent = (income/total)*100;
    expensePercent = (expense/total)*100;

}

document.querySelector("#income-bar").style.width =
incomePercent + "%";

document.querySelector("#expense-bar").style.width =
expensePercent + "%";