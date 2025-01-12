const addExpenseButton = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
// Get the salary input
const salaryInput = document.getElementById("salary");
//create update button
const updateButton = document.createElement("button");
updateButton.textContent = "Update Chart";
updateButton.id = "updateChartButton";

//Expense Limit
const expenseLimit = 10;
let expenseCount = 0;

addExpenseButton.addEventListener("click", function () {
  //notify limit reached
  if (expenseCount >= expenseLimit) {
    alert("You have reached the expense limit");
    addExpenseButton.style.backgroundColor = "#a6c8be";
    addExpenseButton.disabled = true;
    return;
  }

  //create text input
  const expenseName = document.createElement("input");
  expenseName.type = "text";
  expenseName.className = "eName"; // Fix: className instead of class
  expenseName.placeholder = "Enter Expense";

  //create number input
  const expenseAmount = document.createElement("input");
  expenseAmount.type = "number";
  expenseAmount.className = "eAmount"; // Fix: className instead of class
  expenseAmount.placeholder = "Enter Amount";

  //append to expense list
  expenseList.appendChild(expenseName);
  expenseList.appendChild(expenseAmount);
  expenseList.appendChild(updateButton);
  //add line break
  expenseList.appendChild(document.createElement("br"));

  expenseCount++;
});
