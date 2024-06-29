const option = {
    theme: 'light',
    smooth: true,
    markLine: {
        top: 35,
        topPosition: 'insideEndTop',
        topLabel: 'Domestic的阈值线',
        topUse: ['Domestic'],
    },
    markPoint: {
        max: true,
        maxUse: ['Domestic'], // 指定仅'Domestic'数据使用上峰值标记
        minColor: 'auto',
        min: true,
        minUse: ['Domestic'], // 指定仅'Domestic'数据使用下峰值标记
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 37, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 14 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 17 },
        { 'Month': 'Jun', 'Domestic': 33, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 17 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 37, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

