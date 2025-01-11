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
        data: dataSet, // Values for each segment
        backgroundColor: [
            'rgba(255, 99, 132, 0.8)', // Red
            'rgba(54, 162, 235, 0.8)', // Blue
            'rgba(255, 206, 86, 0.8)', // Yellow
            'rgba(75, 192, 192, 0.8)', // Green
            'rgba(153, 102, 255, 0.8)' // Purple
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Create the pie chart
const myPieChart = new Chart(ctx, {
    type: 'pie', // Specify the chart type
    data: data,  // Pass the data
    options: {
        responsive: true, // Make the chart responsive
        plugins: {
            legend: {
                position: 'right', // Position of the legend
            },
            title: {
                display: true,
                text: 'Pie Chart Example' // Chart title
            }
        }
    }
});