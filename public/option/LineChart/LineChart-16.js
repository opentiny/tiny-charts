const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
        icon: 'line'
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 26, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 16 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 43, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 16 },
        { 'Month': 'Sep', 'Domestic': 16, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 32 },
        { 'Month': 'Nov', 'Domestic': 40, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 16 }
    ],
    xAxis: {
        data: 'Month',
    },
    // 自定义y轴 ，默认可不填
    yAxis: {
        max: 58,          // 最大值
        min: 0,           // 最小值
        position: 'right', // y轴位置
        name: '季度销售额',// y轴名称
        nameTextStyle: {   // y轴名称的位置
            align: 'right',
            padding: [0, -35, 0, 0]
        },
        unit: '%'         // y轴数值单位
    },
};
