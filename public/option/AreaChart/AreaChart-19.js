const option = {
    theme: 'light',
    area: true,
    padding: [50, 30, 50, 20],
    data: [
        { 'Month': 'Jan', 'Domestic': 19, 'Abroad': 39 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 39, 'Abroad': 19 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 19, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 19, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 49, 'Abroad': 39 },
        { 'Month': 'Nov', 'Domestic': 49, 'Abroad': 29 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 19 }
    ],
    xAxis: {
        data: 'Month'
    },
    // 自定义y轴
    yAxis: [
        {
            nameTextStyle: { // 名称样式
                padding: [20, 0, 0, 20]
            },
            unit: '%', // 单位
            max: 55, // 最大值
            min: 0,  // 最小值
            interval: 5, // 数值间距
            name: 'Percent(%)', // 名称
        }
    ],
};
