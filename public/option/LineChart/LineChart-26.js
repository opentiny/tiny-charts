const option = {
    theme: 'light',
    smooth: true,
    markLine: {
        top: 38,                     // 上阈值
        topLabel: 'Domestic的阈值线', // 上阈值线文本
        topUse: ['Domestic'],        // 指定仅'Domestic'使用上阈值线
        topPosition: 'insideEndTop', // 上阈值线文本位置
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 21 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 13 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 31 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 43, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 31, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

