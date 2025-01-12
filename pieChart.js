// Get the canvas element
const ctx = document.getElementById('myPieChart').getContext('2d');

// Get the data for the chart
const eNames = document.querySelectorAll('.eNames');
const eAmount = document.querySelectorAll('.eAmount');

const labels = Array.from(eNames).map(input => input.value);
const dataSet = Array.from(eAmount).map(input => parseFloat(input.value) || 0);


// Define the data for the pie chart
const data = {
    labels: labels,
    datasets: [{
        label: "My Budget",
        data: dataSet, 
        backgroundColor: [
            '#003f5c', 
            '#2f4b7c', 
            '#665191', 
            '#a05195', 
            '#d45087',
            '#f95d6a',
            '#ff7c43',
            '#ffa600',
            '#ffa07a',
            '#6b8e23',
            '#4682b4'
        ],
        borderColor: [
            '#003f5c', 
            '#2f4b7c', 
            '#665191', 
            '#a05195', 
            '#d45087',
            '#f95d6a',
            '#ff7c43',
            '#ffa600',
            '#ffa07a',
            '#6b8e23',
            '#4682b4'
        ],
        borderWidth: 1
    }]
};

// Create the pie chart
const myPieChart = new Chart(ctx, {
    type: 'pie', // Specify the chart type
    data: data,  // Pass the data
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right', // Position of the legend
            },
            title: {
                display: true,
                text: 'Budget Chart',
                font: {
                    size: 20,
                    family: 'Gill Sans'
                }
            }
        }
    }
});