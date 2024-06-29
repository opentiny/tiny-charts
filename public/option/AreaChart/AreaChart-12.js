const option = {
    theme: 'light',
    area: true,
    xAxis: {
        data: 'Month',
        fullGrid: true
    },
    yAxis: [
        {
            max: 90,
            min: 0,
            interval: 15,
            position: 'right',
            // 配置此y轴的数据名,可配置多个
            dataName: ['Other'],
            name: 'kal',
            unit: '$',
            // y轴相对于默认位置的偏移
            offset: 45,
            // 配置y轴标题文本样式
            nameTextStyle: {
                padding: [0, -45, 0, 0]
            },
            // 配置y轴刻度文本样式
            labelTextStyle: {
                color: 'gray',
                fontSize: 12
            }
        },
        {
            max: 60,
            min: 0,
            interval: 10,
            position: 'left',
            dataName: ['Domestic'],   
            name: 'value',
            unit: '元',
            nameTextStyle: {
                padding: [0, 0, 0, -45]
            }
        },
        {
            max: 30,
            min: 0,
            interval: 5,
            position: 'right',
            dataName: ['Abroad'],
            name: 'Percent(%)',
            unit: '%',
            nameTextStyle: {
                padding: [0, -15, 0, 0]
            }
        }
    ],
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 22, 'Other': 21 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 29, 'Other': 36 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20, 'Other': 51 },
        { 'Month': 'Apr', 'Domestic': 50, 'Abroad': 12, 'Other': 13 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13, 'Other': 27 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 12, 'Other': 62 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22, 'Other': 38 },
        { 'Month': 'Aug', 'Domestic': 52, 'Abroad': 12, 'Other': 47 },
        { 'Month': 'Sep', 'Domestic': 57, 'Abroad': 32, 'Other': 76 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 23, 'Other': 84 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22, 'Other': 23 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 12, 'Other': 66 }
    ],
};

