/*
* 折线(默认)、曲线(smooth)、阶梯线(step)均支持阈值线形态
* markLine.top 表示上阈值线，不配置时不显示
* markLine.bottom 表示上阈值线，不配置时不显示
* markLine.top 必须大于 markLine.bottom 
*/
const option = {
    theme: 'light',
    smooth: true,
    markLine: {
        top: 'average',              // 平均线
        topColor: 'auto',            // 平均线颜色随线条
        topUse: ['Domestic'],        // 指定'Domestic'使用平均线
        topLabel: (paramsData) => {      // 平均线文本
            return '平均值:' + paramsData.data.value;
        },
        topPosition: 'insideEndTop', // 文本位置
    },
    markPoint: {
        max: true,
        min: true,
        maxColor: 'auto',
        minColor: 'auto',
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 34, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 25, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 25 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 35, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 45, 'Abroad': 24 },
        { 'Month': 'Aug', 'Domestic': 23, 'Abroad': 15 },
        { 'Month': 'Sep', 'Domestic': 15, 'Abroad': 31 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 35 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 21 },
        { 'Month': 'Dec', 'Domestic': 35, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

