const option = {
    theme: 'light',
    area: true,
    padding: [50, 30, 50, 20],
    data: [
        { 'Month': 'Jan', 'Domestic': 30, 'Abroad': 30 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 23 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 10 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 30, 'Abroad': 10 },
        { 'Month': 'Jul', 'Domestic': 43, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 20, 'Abroad': 10 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 30 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 30, 'Abroad': 10 }
    ],
    xAxis: {
        data: 'Month',
    },
    // 自定义y轴 ，默认可不填
    yAxis: {
        max: 60,          // 最大值
        position: 'right', // y轴位置
        name: '季度销售额',// y轴名称
        min: 0,           // 最小值
        nameTextStyle: {   // y轴名称的位置
            padding: [0, -36, 0, 0],
            align: 'right',
        },
        unit: '%'         // y轴数值单位
    },
};
