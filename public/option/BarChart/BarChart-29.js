const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": 27, 'Mstic': 12, "Wtrdh": 21 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": 29, 'Mstic': 26, "Wtrdh": 36 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": 20, 'Mstic': 9, "Wtrdh": 51 },
        { "Month": 'Apr', "Domestic": 50, "Abroad": 15, 'Mstic': 6, "Wtrdh": 13 },
        { "Month": 'May', "Domestic": 37, "Abroad": 13, 'Mstic': 21, "Wtrdh": 27 },
        { "Month": 'Jun', "Domestic": 36, "Abroad": 17, 'Mstic': 13, "Wtrdh": 62 },
        { "Month": 'Jul', "Domestic": 42, "Abroad": 22, 'Mstic': 26, "Wtrdh": 38 },
        { "Month": 'Aug', "Domestic": 52, "Abroad": 12, 'Mstic': 11, "Wtrdh": 47 },
        { "Month": 'Sep', "Domestic": 57, "Abroad": 30, 'Mstic': 17, "Wtrdh": 76 },
        { "Month": 'Oct', "Domestic": 40, "Abroad": 23, 'Mstic': 8, "Wtrdh": 84 },
        { "Month": 'Nov', "Domestic": 42, "Abroad": 22, 'Mstic': 10, "Wtrdh": 23 },
        { "Month": 'Dec', "Domestic": 32, "Abroad": 11, 'Mstic': 24, "Wtrdh": 66 }
    ],
    xAxis: {
        data: "Month",
    },
    yAxis: [
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
            dataName: ['Abroad', 'Mstic'],
            name: 'Percent(%)',
            unit: '%',
            nameTextStyle: {
                padding: [0, -15, 0, 0]
            }
        },
        {
            max: 90,
            min: 0,
            interval: 15,
            position: 'right',
            // 配置此y轴的数据名
            dataName: ['Wtrdh'],
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
            },
            // 配置y轴刻度线样式
            splitLine: {
                lineStyle: {
                    color: 'gray',
                    type: 'dashed',
                    width: 2,
                },
                show: true
            }
        }
    ],
    // 设置x轴样式（因为yAxis.splitLine属性会对x轴产生样式影响;可设置此属性进行样式覆盖）
    xAxisLine: {
        lineStyle: {
            color: '#4e4e4e',
            width: 2,
            dashed: 'solid'
        },
        show: true
    }
};

