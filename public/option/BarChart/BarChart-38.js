const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    itemStyle: {
        barWidth: 20,
        // 最小高度为2
        barMinHeight: 2
    },
    data: [
        { "Month": 'Jan', "Value": 0 },
        { "Month": 'Feb', "Value": 0 },
        { "Month": 'Mar', "Value": 0 },
        { "Month": 'Apr', "Value": 0 },
        { "Month": 'May', "Value": 0 },
        { "Month": 'Jun', "Value": 0 },
        { "Month": 'Jul', "Value": 0 },
        { "Month": 'Aug', "Value": 0 },
        { "Month": 'Sep', "Value": 0 },
        { "Month": 'Oct', "Value": 0 },
        { "Month": 'Nov', "Value": 0 },
        { "Month": 'Dec', "Value": 0 }
    ],
    xAxis: {
        data: "Month",
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};