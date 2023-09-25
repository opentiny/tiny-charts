/*
* 注意：折柱混合图是建立在barChart的基础上实现的（不可颠倒），除了折线图的预测线predict属性，其它属性都能支持
*/
const option = {
    theme: 'hwCloud-light',
    padding: [50, 30, 50, 20],
    data: [
        { "Month": 'Jan', "Domestic": 33, "Abroad": 27, 'Exit': 23 },
        { "Month": 'Feb', "Domestic": 27, "Abroad": 19, 'Exit': 14 },
        { "Month": 'Mar', "Domestic": 31, "Abroad": 20, 'Exit': 10 },
        { "Month": 'Apr', "Domestic": 30, "Abroad": 15, 'Exit': 6 },
        { "Month": 'May', "Domestic": 37, "Abroad": 13, 'Exit': 31 },
        { "Month": 'Jun', "Domestic": 36, "Abroad": 17, 'Exit': 20 },
        { "Month": 'Jul', "Domestic": 42, "Abroad": 22, 'Exit': 14 },
        { "Month": 'Aug', "Domestic": 22, "Abroad": 32, 'Exit': 13 },
        { "Month": 'Sep', "Domestic": 47, "Abroad": 30, 'Exit': 40 },
        { "Month": 'Oct', "Domestic": 40, "Abroad": 33, 'Exit': 25 },
        { "Month": 'Nov', "Domestic": 42, "Abroad": 22, 'Exit': 29 },
        { "Month": 'Dec', "Domestic": 32, "Abroad": 11, 'Exit': 13 }
    ],
    // 需要转换为折线图的数据名称
    lineDataName: ['Domestic'],
    smooth: true,
    markLine: {
        top: 30,
        topUse: ['Domestic'],
    },
    xAxis: {
        data: "Month",
    },
    yAxis: [
        {
            max: 50,
            min: 0,
            interval: 5,
            position: 'left',
            dataName: ['Domestic'],
            name: '单价',
            unit: '元',
            nameTextStyle: { padding: [0, 0, 0, -35] }
        },
        {
            max: 60,
            min: 0,
            interval: 10,
            position: 'right',
            dataName: ['Abroad', 'Exit'],
            name: '百分比(%)',
            unit: '%',
            nameTextStyle: { padding: [0, -20, 0, 0] }
        },
    ],
};
