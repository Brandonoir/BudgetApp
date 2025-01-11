const addExpenseButton = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
// Get the salary input
const salaryInput = document.getElementById('salary');
//create update button
const updateButton = document.createElement("button");
updateButton.textContent = "Update Chart";
updateButton.id = "updateChartButton";

addExpenseButton.addEventListener("click", function () {
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

  // Add event listener to the update button
  updateButton.addEventListener("click", function() {
    // Get the input fields
    const eNames = document.querySelectorAll('.eName');
    const eAmount = document.querySelectorAll('.eAmount');

    // Get the values from the input fields
    const labels = Array.from(eNames).map(input => input.value);
    const dataSet = Array.from(eAmount).map(input => parseFloat(input.value) || 0);

    // Get the salary value
    const salary = parseFloat(salaryInput.value) || 0;

    // Check if the total expenses exceed the salary
    const totalExpenses = dataSet.reduce((a, b) => a + b, 0);
    if (totalExpenses > salary) {
        alert('Total expenses exceed the salary!');
        return;
    }

    // Calculate the remaining salary
    const remainingSalary = salary - totalExpenses;

    // Update the chart data
    myPieChart.data.labels = labels.concat(['Remaining Salary']);
    myPieChart.data.datasets[0].data = dataSet.concat([remainingSalary]);

    // Update the chart
    myPieChart.update();
  });
});