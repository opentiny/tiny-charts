const option = {
    theme: 'hdesign-light',
    padding: [50, 30, 50, 20],
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 27, 'Other': 11 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 29, 'Other': 36 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20, 'Other': 51 },
        { 'Month': 'Apr', 'Domestic': 50, 'Abroad': 15, 'Other': 13 },
        { 'Month': 'May', 'Domestic': 27, 'Abroad': 13, 'Other': 27 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17, 'Other': 62 },
        { 'Month': 'Jul', 'Domestic': 52, 'Abroad': 28, 'Other': 38 },
        { 'Month': 'Aug', 'Domestic': 52, 'Abroad': 12, 'Other': 57 },
        { 'Month': 'Sep', 'Domestic': 57, 'Abroad': 30, 'Other': 58 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 23, 'Other': 70 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22, 'Other': 33 },
        { 'Month': 'Dec', 'Domestic': 22, 'Abroad': 11, 'Other': 15 }
    ],
    xAxis: {
        data: 'Month',
    },
    area:true,
    yAxis: [{
        min: 0,
        max: 80,
        interval: 20,
        position: 'left',
        dataName: ['Domestic', 'Other'],// 配置y轴对应的数据名,可配置多个
        unit: '元',
        name: 'value'
    },
    {
        min: 0,
        max: 40,
        interval: 10,
        position: 'right',
        dataName: ['Abroad'],
        unit: '%',
        name: 'Percent(%)'
    }]
};