/*
* 折线(默认)、曲线(smooth)、阶梯线(step)均支持阈值线形态
* markLine.top 表示上阈值线，不配置时不显示
* markLine.bottom 表示上阈值线，不配置时不显示
* markLine.top 必须大于 markLine.bottom 
*/
const option = {
    theme: 'light',
    area: true,
    markLine: {
        top: 38, // 上阈值
        topLabel: '超载线', // 上阈值线文本
        topColor: '#ff0000', // 上阈值线颜色
        topPosition: 'insideStartTop', // 上阈值线文本位置
        bottom: 20, // 下阈值
        bottomLabel: '告警线', // 下阈值线文本
        bottomColor: '#00a874', // 下阈值线颜色
        bottomPosition: 'insideEndBottom' // 下阈值线文本位置
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 27 },
        { 'Month': 'Mar', 'Domestic': 31 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 17 },
        { 'Month': 'Oct', 'Domestic': 40 },
        { 'Month': 'Nov', 'Domestic': 42 },
        { 'Month': 'Dec', 'Domestic': 32 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

