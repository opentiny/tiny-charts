/*
* 折线面积图(默认)、曲线面积图(smooth)、阶梯线面积图(step)均支持阈值线形态
* markLine.top 表示上阈值线，不配置时不显示
* markLine.bottom 表示上阈值线，不配置时不显示
* markLine.top 必须大于 markLine.bottom 
*/
const option = {
    theme: 'light',
    area: true,
    markLine: {
        top: 38,
        bottom: 20
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 37 },
        { 'Month': 'Feb', 'Domestic': 27 },
        { 'Month': 'Mar', 'Domestic': 31 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 37 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 17 },
        { 'Month': 'Oct', 'Domestic': 47 },
        { 'Month': 'Nov', 'Domestic': 42 },
        { 'Month': 'Dec', 'Domestic': 37 }
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true,
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};
