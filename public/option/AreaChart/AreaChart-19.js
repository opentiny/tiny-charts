const option = {
    theme: 'light',
    area: true,
    padding: [50, 30, 50, 20],
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month'
    },
    // 自定义y轴
    yAxis: [
        {
            max: 60, // 最大值
            min: 0,  // 最小值
            interval: 5, // 数值间距
            name: 'Percent(%)', // 名称
            nameTextStyle: { // 名称样式
                padding: [0, 0, 0, 20]
            },
            unit: '%' // 单位
        }
    ],
};
