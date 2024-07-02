/*
* 折线(默认)、曲线(smooth)、阶梯线(step)均支持阈值线形态
* markLine.top 表示上阈值线，不配置时不显示
* markLine.bottom 表示上阈值线，不配置时不显示
* markLine.top 必须大于 markLine.bottom 
*/
const option = {
    theme: 'light',
    // step: true, 
    // smooth:true,
    markLine: {
        top: 35, // 上阈值
        topLabel: '超载线', // 上阈值线文本
        topColor: '#ff0000', // 上阈值线颜色
        topPosition: 'insideStartTop', // 上阈值线文本位置
        bottom: 21, // 下阈值
        bottomColor: '#00a875', // 下阈值线颜色
        bottomLabel: '阈值线', // 下阈值线文本
        bottomPosition: 'insideEndBottom' // 下阈值线文本位置
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 12 },
        { 'Month': 'Mar', 'Domestic': 31 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 12 },
        { 'Month': 'Oct', 'Domestic': 24 },
        { 'Month': 'Nov', 'Domestic': 12 },
        { 'Month': 'Dec', 'Domestic': 12 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};

