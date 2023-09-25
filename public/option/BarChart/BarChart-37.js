const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    // 双向柱状图形态
    type: 'double-sides',
    // 横向
    direction: 'horizontal',
    data: [
        { "Month": 'Jan', "上行": 33, "下行": 37 },
        { "Month": 'Feb', "上行": 27, "下行": 39 },
        { "Month": 'Mar', "上行": 31, "下行": 20 },
        { "Month": 'Apr', "上行": 30, "下行": 15 },
        { "Month": 'May', "上行": 37, "下行": 13 },
        { "Month": 'Jun', "上行": 36, "下行": 17 },
        { "Month": 'Jul', "上行": 42, "下行": 22 },
        { "Month": 'Aug', "上行": 22, "下行": 12 },
        { "Month": 'Sep', "上行": 17, "下行": 30 },
        { "Month": 'Oct', "上行": 40, "下行": 33 },
        { "Month": 'Nov', "上行": 42, "下行": 22 },
        { "Month": 'Dec', "上行": 32, "下行": 11 }
    ],
    xAxis: {
        data: "Month",
    },
    yAxis: {
        name: "Percent(%)"
    }
};
