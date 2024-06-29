/*
* 折线面积图(默认)、曲线面积图(smooth)、阶梯线面积图(step)均支持上下面积分割
* 注意： splitLine 和 markLine 不可以同时配置
*/
const option = {
    theme: 'light',
    smooth: true,
    area: true,
    splitLine: 27,
    data: [
        { 'Month': 'Jan', 'Domestic': 39 },
        { 'Month': 'Feb', 'Domestic': 29 },
        { 'Month': 'Mar', 'Domestic': 32 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 39 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 49 },
        { 'Month': 'Aug', 'Domestic': 26 },
        { 'Month': 'Sep', 'Domestic': 19 },
        { 'Month': 'Oct', 'Domestic': 49 },
        { 'Month': 'Nov', 'Domestic': 49 },
        { 'Month': 'Dec', 'Domestic': 39 }
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true,
    },
    yAxis: {
        name: 'Percentage(%)'
    },
};
