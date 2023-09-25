const option = {
    theme: 'light',
    smooth: true,
    area: true,
    markLine: {
        top: 35,
        topLabel: 'Domestic的阈值线',
        topUse: ['Domestic'],
        topPosition: 'insideEndTop',
    },
    markPoint: {
        max: true,
        maxUse: ['Domestic'], // 指定仅'Domestic'数据使用上峰值标记
        min: true,
        minColor: 'auto',
        minUse: ['Domestic'], // 指定仅'Domestic'数据使用下峰值标记
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

