
updateButton.addEventListener("click", function () {
    // Get the input fields
    const eNames = document.querySelectorAll(".eName");
    const eAmount = document.querySelectorAll(".eAmount");

    // get the values from the input fields
    const labels = Array.from(eNames).map((input) => input.value);
    const dataSet = Array.from(eAmount).map(
    (input) => parseFloat(input.value) || 0
    );

    // Get the salary value
    const salary = parseFloat(salaryInput.value) || 0;

    // Check if the total expenses exceed the salary
    const totalExpenses = dataSet.reduce((a, b) => a + b, 0);
    if (totalExpenses > salary) {
    alert("Total expenses exceed the salary!");
    return;
    }

    // Calculate the remaining salary
    const remainingSalary = salary - totalExpenses;

    // Update the chart data
    myPieChart.data.labels = labels.concat(["Remaining Salary"]);
    myPieChart.data.datasets[0].data = dataSet.concat([remainingSalary]);

    // Update the chart
    myPieChart.update();
});
