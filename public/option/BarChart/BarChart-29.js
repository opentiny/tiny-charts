const option = {
    theme: 'light',
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
    yAxis: [
        {
            max: 90,
            min: 0,
            interval: 15,
            position: 'right',
            dataName: ['Wtrdh'],  // 配置此y轴的数据名
            name: 'kals',
            unit: '$',
            nameTextStyle: {  // 配置y轴标题文本样式
                padding: [0, -45, 0, 0]
            },
            offset: 45,  // y轴相对于默认位置的偏移
            labelTextStyle: { // 配置y轴刻度文本样式
                fontSize: 12,
                color: 'gray'
            }
        },
        {
            min: 0,
            max: 60,
            interval: 10,
            position: 'left',
            dataName: ['Domestic'],
            unit: '元',
            name: 'value',
            nameTextStyle: {
                padding: [0, 0, 0, -45]
            }
        },
        {
            max: 30,
            min: 0,
            position: 'right',
            name: 'Percent(%)',
            dataName: ['Abroad', 'Mstic'],
            unit: '%',
            interval: 5,
            nameTextStyle: {
                padding: [0, -15, 0, 0]
            }
        }
    ]
};

