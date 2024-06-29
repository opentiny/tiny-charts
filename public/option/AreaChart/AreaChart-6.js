const option = {
    theme: 'light',
    padding: [50, 30, 55, 20],
    smooth: true,
    area: true,
    legend: {
        show: true,
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 36, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 36, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 16 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 46, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 21, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 46, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 36, 'Abroad': 11 }
    ],
    predict: 'Aug', // predict 表示从 'Month'：'Aug'之后的数据都为预测值
    xAxis: {
        data: 'Month',
        fullGrid: true,
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};
