const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
        icon: 'line'
    },
    stack: true,
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 31, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 14 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 21 },
        { 'Month': 'Aug', 'Domestic': 21, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 43, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};