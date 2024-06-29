const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 32, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 38 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 21 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 14 },
        { 'Month': 'Jun', 'Domestic': 35, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 21 },
        { 'Month': 'Aug', 'Domestic': 21, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 32 },
        { 'Month': 'Nov', 'Domestic': 41, 'Abroad': 23 },
        { 'Month': 'Dec', 'Domestic': 31, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month',
        labelRotate: 45,
    },
    yAxis: {
        name: 'Units'
    }
};