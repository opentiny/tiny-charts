const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    // 'contain'表示为包含柱状图
    type: 'contain',
    data: [
        { 'Month': 'Jan', 'Total': 46, 'Part': 15 },
        { 'Month': 'Feb', 'Total': 27, 'Part': 10 },
        { 'Month': 'Mar', 'Total': 31, 'Part': 20 },
        { 'Month': 'Apr', 'Total': 30, 'Part': 15 },
        { 'Month': 'May', 'Total': 37, 'Part': 13 },
        { 'Month': 'Jun', 'Total': 36, 'Part': 17 },
        { 'Month': 'Jul', 'Total': 46, 'Part': 22 },
        { 'Month': 'Aug', 'Total': 22, 'Part': 12 },
        { 'Month': 'Sep', 'Total': 17, 'Part': 5 },
        { 'Month': 'Oct', 'Total': 40, 'Part': 33 },
        { 'Month': 'Nov', 'Total': 42, 'Part': 22 },
        { 'Month': 'Dec', 'Total': 46, 'Part': 11 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    }
};
