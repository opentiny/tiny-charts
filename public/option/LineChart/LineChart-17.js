const option = {
    theme: 'light',
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
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 23, 'Other': 84 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22, 'Other': 33 },
        { 'Month': 'Dec', 'Domestic': 22, 'Abroad': 11, 'Other': 15 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: [
        {
            min: 0,
            max: 90,
            interval: 15,
            position: 'right',
            dataName: ['Other'],  // 配置y轴对应的数据名,可配置多个
            unit: '$',
            name: 'kal',
            offset: 45,           // y轴相对于默认位置的偏移
            nameTextStyle: {      // y轴名称文本样式
                padding: [0, -46, 0, 0]
            },
            labelTextStyle: {     // y轴刻度文本样式
                fontSize: 12,
                color: 'red',
            },
        },
        {
            min: 0,
            max: 60,
            interval: 10,
            position: 'left',
            unit: '元',
            name: 'value',
            dataName: ['Domestic'],
            nameTextStyle: {
                padding: [0, 0, 0, -43]
            }
        },
        {
            min: 0,
            max: 30,
            interval: 5,
            position: 'right',
            dataName: ['Abroad'],
            nameTextStyle: {
                padding: [0, -16, 0, 0]
            },
            unit: '%',
            name: 'Percent(%)'
        }
    ],
};
