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
        { 'Month': 'Jan', 'Domestic': 24, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 24, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 14 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 24 },
        { 'Month': 'Jun', 'Domestic': 34, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 24 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 24, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 34 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 24 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 24 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

