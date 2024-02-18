function addExpense() {
    var date = document.getElementById("date").value;
    var amount = parseFloat(document.getElementById("amount").value).toFixed(2);
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;

    var table = document.getElementById("expenseTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = date;
    cell2.innerHTML = "$" + amount;
    cell3.innerHTML = category;
    cell4.innerHTML = description;
    cell5.innerHTML = '<button onclick="deleteExpense(this)">Delete</button>';

    updateSummary(amount);
}

function deleteExpense(button) {
    var row = button.parentNode.parentNode;
    var amount = parseFloat(row.cells[1].innerHTML.replace("$", ""));
    
    row.parentNode.removeChild(row);
    updateSummary(-amount);
}

function updateSummary(amount) {
    var totalExpenses = parseFloat(document.getElementById("totalExpenses").innerText);
    totalExpenses += parseFloat(amount);
    document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);
}
