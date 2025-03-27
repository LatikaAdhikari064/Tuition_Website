// Basic JavaScript to Render a Pie Chart using Chart.js
window.onload = function() {
    var ctx = document.getElementById('myPieChart').getContext('2d');
    
    // Data for Pie Chart
    var data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            data: [10, 20, 30], // Values for the Pie Chart
            backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'], // Colors for each slice
        }]
    };
    
    // Chart Configuration
    var options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    };

    // Create the Pie Chart
    var myPieChart = new Chart(ctx, {
        type: 'pie', // Type of chart (pie chart)
        data: data,
        options: options
    });
};
