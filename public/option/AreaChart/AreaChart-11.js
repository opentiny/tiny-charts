const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    smooth: true,
    area: true,
    legend: {
        show: false,
    },
    // predict 表示从 'Time'：'17:05'之后的数据都为预测值
    predict: '17:05',
    markLine: {
        top: 1
    },
    // 调整图元的大小
    itemStyle: {
        symbolSize: '15',
    },
    xAxis: {
        data: 'Time',
        fullGrid: true,
        // 设置x轴label,第一个值类目的 index，第二个值是类目名称
        interval: (index, value) => {
            if (index % 24 === 0) {
                return true;
            }
            if (index === 61) {
                return true;
            }
            return false;
        },
    },
    yAxis: [
        {
            formatter: (val) => {
                if (val === 0) {
                    return val;
                } else {
                    return parseFloat(val).toFixed(1);
                }
            },
            min: 0,
            max: 1.5,
            name: '%',
            splitNumber: 3,
        }
    ],
    data: [
        { 'Time': '12:00', 'value': 0.39, },
        { 'Time': '12:05', 'value': 0.4, },
        { 'Time': '12:10', 'value': 0.41, },
        { 'Time': '12:15', 'value': 0.43, },
        { 'Time': '12:20', 'value': 0.49, },
        { 'Time': '12:25', 'value': 0.6, },
        { 'Time': '12:30', 'value': 0.68, },
        { 'Time': '12:35', 'value': 0.6, },
        { 'Time': '12:40', 'value': 0.45, },
        { 'Time': '12:45', 'value': 0.4, },
        { 'Time': '12:50', 'value': 0.47, },
        { 'Time': '12:55', 'value': 0.54, },
        { 'Time': '13:00', 'value': 0.47, },
        { 'Time': '13:05', 'value': 0.4, },
        { 'Time': '13:10', 'value': 0.4, },
        { 'Time': '13:15', 'value': 0.41, },
        { 'Time': '13:20', 'value': 0.4, },
        { 'Time': '13:25', 'value': 0.4, },
        { 'Time': '13:30', 'value': 0.41, },
        { 'Time': '13:35', 'value': 0.4, },
        { 'Time': '13:40', 'value': 0.4, },
        { 'Time': '13:45', 'value': 0.41, },
        { 'Time': '13:50', 'value': 0.4, },
        { 'Time': '13:55', 'value': 0.4, },
        { 'Time': '14:00', 'value': 0.41, },
        { 'Time': '14:05', 'value': 0.4, },
        { 'Time': '14:10', 'value': 0.4, },
        { 'Time': '14:15', 'value': 0.39, },
        { 'Time': '14:20', 'value': 0.4, },
        { 'Time': '14:25', 'value': 0.41, },
        { 'Time': '14:30', 'value': 0.42, },
        { 'Time': '14:35', 'value': 0.43, },
        { 'Time': '14:40', 'value': 0.44, },
        { 'Time': '14:45', 'value': 0.45, },
        { 'Time': '14:50', 'value': 0.47, },
        { 'Time': '14:55', 'value': 0.49, },
        { 'Time': '15:00', 'value': 0.51, },
        { 'Time': '15:05', 'value': 0.57, },
        { 'Time': '15:10', 'value': 0.6, },
        { 'Time': '15:15', 'value': 0.64, },
        { 'Time': '15:20', 'value': 0.69, },
        { 'Time': '15:25', 'value': 0.74, },
        { 'Time': '15:30', 'value': 0.76, },
        { 'Time': '15:35', 'value': 0.69, },
        { 'Time': '15:40', 'value': 0.6, },
        { 'Time': '15:45', 'value': 0.5, },
        { 'Time': '15:50', 'value': 0.46, },
        { 'Time': '15:55', 'value': 0.42, },
        { 'Time': '16:00', 'value': 0.4, },
        { 'Time': '16:05', 'value': 0.42, },
        { 'Time': '16:10', 'value': 0.45, },
        { 'Time': '16:15', 'value': 0.48, },
        { 'Time': '16:20', 'value': 0.5, },
        { 'Time': '16:25', 'value': 0.49, },
        { 'Time': '16:30', 'value': 0.48, },
        { 'Time': '16:35', 'value': 0.50, },
        { 'Time': '16:40', 'value': 0.52, },
        { 'Time': '16:45', 'value': 0.60, },
        { 'Time': '16:50', 'value': 0.65, },
        { 'Time': '16:55', 'value': 0.62, },
        { 'Time': '17:00', 'value': 0.5, },
        { 'Time': '17:05', 'value': 0.4, },
        { 'Time': '17:10', 'value': 0.4, },
        { 'Time': '17:15', 'value': 0.41, },
        { 'Time': '17:20', 'value': 0.39, },
        { 'Time': '17:25', 'value': 0.42, },
        { 'Time': '17:30', 'value': 0.45, },
        { 'Time': '17:35', 'value': 0.51, },
        { 'Time': '17:40', 'value': 0.56, },
        { 'Time': '17:45', 'value': 0.58, },
        { 'Time': '17:50', 'value': 0.64, },
        { 'Time': '17:55', 'value': 0.68, },
        { 'Time': '18:00', 'value': 0.75, },
        { 'Time': '18:05', 'value': 1, },
        { 'Time': '18:10', 'value': 1.03, },
        { 'Time': '18:15', 'value': 1.10, },
        { 'Time': '18:20', 'value': 1.14, },
        { 'Time': '18:25', 'value': 1.19, },
        { 'Time': '18:30', 'value': 1.25, },
        { 'Time': '18:35', 'value': 1.31, },
        { 'Time': '18:40', 'value': 1.36, },
        { 'Time': '18:45', 'value': 1.34, },
        { 'Time': '18:50', 'value': 1.3, },
        { 'Time': '18:55', 'value': 1.29, },
        { 'Time': '19:00', 'value': 1.27, },
        { 'Time': '19:05', 'value': 1.26, },
        { 'Time': '19:10', 'value': 1.28, },
        { 'Time': '19:15', 'value': 1.30, },
        { 'Time': '19:20', 'value': 1.31, },
        { 'Time': '19:25', 'value': 1.33, },
        { 'Time': '19:30', 'value': 1.35, },
        { 'Time': '19:35', 'value': 1.37, },
        { 'Time': '19:40', 'value': 1.39, },
        { 'Time': '19:45', 'value': 1.39, },
        { 'Time': '19:50', 'value': 1.39, },
        { 'Time': '19:55', 'value': 1.39, },
        { 'Time': '20:00', 'value': 1.40, },
    ]
};









