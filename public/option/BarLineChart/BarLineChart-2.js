/*
* 注意：折柱混合图是建立在barChart的基础上实现的（不可颠倒），除了折线图的预测线predict属性，其它属性都能支持
*/
const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 27 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 19 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 32, 'Abroad': 15,},
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 32, 'Abroad': 32 },
        { 'Month': 'Sep', 'Domestic': 47, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 11 }
    ],
    
    lineOption:{
        // 需要转换为折线图的数据名称
        dataName: ['Domestic'],
    },
    barOption: {
        // 需要转换为柱状图的数据名称
        dataName: ['Abroad'],
    },
    xAxis: {
        data: 'Month',
    },
    yAxis: [
        {
            position: 'left',
            dataName: ['Domestic'],
            name: '单价',
            unit: '元',
           
        },
        {
            position: 'right',
            dataName: ['Abroad'],
            name: '百分比(%)',
            unit: '%',
        },
    ],
};
