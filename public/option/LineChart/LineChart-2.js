const option = {
    theme: 'light',
    padding: [50, 70, 50, 20],
    smooth: true, // smooth属性配置曲线
    legend: {
        show: true,
        icon: 'line',
    },
    data: [
        { 'Month': 'Jan', 'Train': 84, 'Bus': 56, 'Aircraft': 21 },
        { 'Month': 'Feb', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
        { 'Month': 'Mar', 'Train': 63, 'Bus': 20, 'Aircraft': 22 },
        { 'Month': 'Apr', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Month': 'May', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
        { 'Month': 'Jun', 'Train': 71, 'Bus': 37, 'Aircraft': 32 },
        { 'Month': 'Jul', 'Train': 43, 'Bus': 52, 'Aircraft': 76 },
        { 'Month': 'Aug', 'Train': 52, 'Bus': 12, 'Aircraft': 61 },
        { 'Month': 'Sep', 'Train': 34, 'Bus': 38, 'Aircraft': 65 },
        { 'Month': 'Oct', 'Train': 41, 'Bus': 33, 'Aircraft': 88 },
        { 'Month': 'Nov', 'Train': 62, 'Bus': 22, 'Aircraft': 65 },
        { 'Month': 'Dec', 'Train': 61, 'Bus': 42, 'Aircraft': 58 }
    ],
    xAxis: {
        data: 'Month',
        name: 'Time'
    },
    yAxis: {
        name: 'Percentage(%)',
    }
};
