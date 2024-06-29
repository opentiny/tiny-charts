/*
* 折线(默认)、曲线(smooth)、阶梯线(step)均支持峰值标记
* markPoint.max 表示标记最大值
* markPoint.min 表示标记最小值
*/
const option = {
    theme: 'light',
    // step: true, 
    smooth: true,
    markLine: {
        top: 38,
        bottom: 20
    },
    markPoint: {
        max: true,
        min: true
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 31 },
        { 'Month': 'Feb', 'Domestic': 27 },
        { 'Month': 'Mar', 'Domestic': 32 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 22 },
        { 'Month': 'Sep', 'Domestic': 17 },
        { 'Month': 'Oct', 'Domestic': 30 },
        { 'Month': 'Nov', 'Domestic': 41 },
        { 'Month': 'Dec', 'Domestic': 33 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};
