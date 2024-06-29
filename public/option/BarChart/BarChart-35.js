const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    // 控制柱形的样式, 默认为符合EBG图表规范的柱形样式, 此处仅用来显示能力
    itemStyle: {
        barGap: '60%',
        barWidth: 8
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 13, 'Abroad': 17 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 35, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 35 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 35, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 37, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 35, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    },
    // 坐标指示器样式（数据背景区域样式）
    // 同时存在axisPointer.color与axisPointer.gradientColor属性，以axisPointer.gradientColor属性生效
    axisPointer: {
        color: 'rgba(49,68,97,.5)',
        gradientColor: ['rgba(49,68,97,.7)', 'rgba(49,68,97,.1)'],
    },
    // 悬浮提示框样式
    tipHtmlStyle: {
        padding: [4, 20],
        backgroundColor: 'rgba(49,68,97,.5)',
        borderWidth: 2,
        borderColor: 'skyBlue',
        borderRadius: 24,
        textStyle: {
            color: 'skyBlue',
            fontSize: 20,
            fontWeight: 'bolder'
        }
    },
    // 顶部位置悬浮提示框
    topTipHtml: (params, ticket, callback) => {
        let htmlString = '';
        htmlString += params.value
        return htmlString
    },
};
