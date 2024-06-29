const option = {
    theme: 'light',
    area: true,
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 26, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 26 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 26 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 26, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 26 },
        { 'Month': 'Dec', 'Domestic': 26, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month',
        labelRotate: 45,
    },
    yAxis: {
        name: 'Units'
    }
};