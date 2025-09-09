const option = {
    theme: 'hdesign-light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 27, 'Mstic': 12, 'Wtrdh': 21 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 29, 'Mstic': 26, 'Wtrdh': 36 },
        { 'Month': 'Mar', 'Domestic': 29, 'Abroad': 20, 'Mstic': 9, 'Wtrdh': 51 },
        { 'Month': 'Apr', 'Domestic': 50, 'Abroad': 15, 'Mstic': 6, 'Wtrdh': 13 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13, 'Mstic': 21, 'Wtrdh': 29 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17, 'Mstic': 13, 'Wtrdh': 62 },
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: [{
        min: 0,
        max: 40,
        interval: 10,
        position: 'left',
        dataName: ['Abroad', 'Mstic'],// 配置y轴对应的数据名,可配置多个
        unit: '元',
        name: 'value',
    },
    {
        min: 0,
        max: 80,
        interval: 20,
        position: 'right',
        dataName: ['Domestic', 'Wtrdh'],
        unit: '%',
        name: 'Percent(%)'
    }]
};