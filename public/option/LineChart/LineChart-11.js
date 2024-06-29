const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
        icon: 'line',
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 29 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 12 },
        { 'Month': 'May', 'Domestic': 33, 'Abroad': 11 },
        { 'Month': 'Jun', 'Domestic': 31, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 11, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 30, 'Abroad': 23 },
        { 'Month': 'Nov', 'Domestic': 52, 'Abroad': 11 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 31 }
    ],
    xAxis: {
        data: 'Month'
    },
    // 自定义y轴
    yAxis: [
        {
            name: 'Percent(%)', // 名称
            max: 65, // 最大值
            min: 0,  // 最小值
            interval: 5, // 数值间距
            nameTextStyle: { // 名称样式
                padding: [20, 0, 0, 20]
            },
            unit: '%' // 单位
        }
    ],
};
