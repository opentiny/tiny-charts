const option = {
    theme: 'light',
    color: [
        '#fa2a2d',
        '#ff7500',
        '#ffbf01',
        '#41ba41',
        '#00aaee'
    ], // 自定义颜色组，线条会循环使用该颜色组
    padding: [50, 30, 50, 21],
    smooth: true,
    legend: {
        show: true
    },
    data: [
        { 'Month': 'Jan', 'Train': 83, 'Bus': 56, 'Aircraft': 22 },
        { 'Month': 'Feb', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
        { 'Month': 'Mar', 'Train': 63, 'Bus': 21, 'Aircraft': 21 },
        { 'Month': 'Apr', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Month': 'May', 'Train': 37, 'Bus': 33, 'Aircraft': 32 },
        { 'Month': 'Jun', 'Train': 70, 'Bus': 47, 'Aircraft': 32 },
        { 'Month': 'Jul', 'Train': 42, 'Bus': 55, 'Aircraft': 76 },
        { 'Month': 'Aug', 'Train': 52, 'Bus': 13, 'Aircraft': 61 },
        { 'Month': 'Sep', 'Train': 34, 'Bus': 38, 'Aircraft': 65 },
        { 'Month': 'Oct', 'Train': 40, 'Bus': 33, 'Aircraft': 88 },
        { 'Month': 'Nov', 'Train': 61, 'Bus': 22, 'Aircraft': 65 },
        { 'Month': 'Dec', 'Train': 63, 'Bus': 42, 'Aircraft': 56 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};
