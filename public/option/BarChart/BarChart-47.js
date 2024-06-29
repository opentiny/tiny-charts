const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    // 'contain'表示为包含柱状图
    type: 'contain',
    // 横向形态
    direction: 'horizontal',
    data: [
        { 'Month': 'Jan', 'Total': 33, 'Part': 47 },
        { 'Month': 'Feb', 'Total': 27, 'Part': 39 },
        { 'Month': 'Mar', 'Total': 31, 'Part': 20 },
        { 'Month': 'Apr', 'Total': 30, 'Part': 15 },
        { 'Month': 'May', 'Total': 37, 'Part': 13 },
        { 'Month': 'Jun', 'Total': 36, 'Part': 17 },
        { 'Month': 'Jul', 'Total': 47, 'Part': 22 },
        { 'Month': 'Aug', 'Total': 22, 'Part': 12 },
        { 'Month': 'Sep', 'Total': 17, 'Part': 30 },
        { 'Month': 'Oct', 'Total': 40, 'Part': 33 },
        { 'Month': 'Nov', 'Total': 42, 'Part': 22 },
        { 'Month': 'Dec', 'Total': 47, 'Part': 11 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    }
};
