let balance = 0;
let history = [];

function calculateBalance() {
    const incomeInput = document.getElementById("income").value;
    const expenseInput = document.getElementById("expense").value;
    const remark = document.getElementById("remark").value;

    if (incomeInput === '' || expenseInput === '') {
        alert("Please enter both income and expense values.");
        return;
    }

    const income = parseFloat(incomeInput);
    const expense = parseFloat(expenseInput);

    balance += (income - expense);
    document.getElementById("balance").textContent = `Balance: ${balance.toFixed(2)} /-Rs.`;

    const transaction = {
        income: income,
        expense: expense,
        remark: remark,
        balance: balance.toFixed(2)
    };

    history.push(transaction);
    updateHistory();
}

function updateHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    history.forEach(transaction => {
        const listItem = document.createElement("li");
        listItem.textContent = `Income: ₹${transaction.income.toFixed(2)} | Expense: ₹${transaction.expense.toFixed(2)} | Remark: ${transaction.remark} | Balance: ₹${transaction.balance}`;
        historyList.appendChild(listItem);
    });

    localStorage.setItem("history", JSON.stringify(history));
}

function clearHistory() {
    history = [];
    updateHistory();
    localStorage.removeItem("history");
}

document.addEventListener("DOMContentLoaded", function() {
    const storedHistory = localStorage.getItem("history");
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        updateHistory();
    }
});
