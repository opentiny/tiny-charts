/*
* 注意：区间形态不建议自定义tip，框架内部已经对tip进行了二次封装
*/
const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    color: [
        '#fa2a2d',
        '#ff7500',
        '#ffbf00',
        '#41ba41',
        '#00aaee'
    ], // 自定义颜色组，线条会循环使用该颜色组
    legend: {
        show: true,
    },
    type: 'range', // type='range'柱状图为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    data: [
        { 'Name': 'NLE', 'Man': [5, 20], 'Female': [5, 23], 'Unkown': [8, 15] },
        { 'Name': 'HIN', 'Man': [8, 30], 'Female': [8, 25], 'Unkown': [5, 13] },
        { 'Name': 'FBP', 'Man': [8, 25], 'Female': [2, 20], 'Unkown': [12, 15] },
        { 'Name': 'VEDIO', 'Man': [20, 40], 'Female': [15, 35], 'Unkown': [10, 20] },
        { 'Name': 'SASS', 'Man': [15, 35], 'Female': [10, 22], 'Unkown': [5, 35] },
        { 'Name': 'RDS', 'Man': [2, 30], 'Female': [15, 35], 'Unkown': [10, 23] },
        { 'Name': 'E-SYS', 'Man': [15, 20], 'Female': [2, 22], 'Unkown': [8, 15] },
    ],
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Number'
    }
};
