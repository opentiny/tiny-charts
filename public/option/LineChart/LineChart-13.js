const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    smooth: true,
    legend: {
        show: true,
        icon: 'line',
    },
    data: [
        { 'Month': 'Jan', 'Train': 83, 'Bus': 56, 'Aircraft': 20 },
        { 'Month': 'Feb', 'Train': 55, 'Bus': 39, 'Aircraft': 13 },
        { 'Month': 'Mar', 'Train': 63, 'Bus': 20, 'Aircraft': 21 },
        { 'Month': 'Apr', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
        { 'Month': 'May', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
        { 'Month': 'Jun', 'Train': 70, 'Bus': 37, 'Aircraft': 33 },
        { 'Month': 'Jul', 'Train': 42, 'Bus': 52, 'Aircraft': 76 },
        { 'Month': 'Aug', 'Train': 52, 'Bus': 12, 'Aircraft': 70 },
        { 'Month': 'Sep', 'Train': 34, 'Bus': 38, 'Aircraft': 25 },
        { 'Month': 'Oct', 'Train': 40, 'Bus': 33, 'Aircraft': 38 },
        { 'Month': 'Nov', 'Train': 60, 'Bus': 13, 'Aircraft': 55 },
        { 'Month': 'Dec', 'Train': 62, 'Bus': 42, 'Aircraft': 63 }
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true, // 曲线顶格到x轴左右两边
        interval: 1,    // 设置x轴label的显示间隔，默认不设置时，会根据图表宽度自适应
    },
    yAxis: {
        name: 'Units(Number)'
    }
};
