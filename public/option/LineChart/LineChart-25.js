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
        topLabel: (params) => {      // 平均线文本
            return '平均值:' + params.data.value;
        },
        topColor: 'auto',            // 平均线颜色随线条
        topUse: ['Domestic'],        // 指定'Domestic'使用平均线
        topPosition: 'insideEndTop', // 文本位置
    },
    markPoint: {
        max: true,
        maxColor: 'auto',
        min: true,
        minColor: 'auto',
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

