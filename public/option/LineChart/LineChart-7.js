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
        top: 38,
        bottom: 20
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 27 },
        { 'Month': 'Mar', 'Domestic': 32 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 43 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 17 },
        { 'Month': 'Oct', 'Domestic': 41 },
        { 'Month': 'Nov', 'Domestic': 42 },
        { 'Month': 'Dec', 'Domestic': 33 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};
