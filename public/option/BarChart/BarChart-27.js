/*
* 注意：区间形态不建议自定义tip，框架内部已经对tip进行了二次封装
*/
const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    type: 'range', // type='range'柱状图为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    markLine: {
        top: 38,
        bottom: 22
    },
    data: [
        { 'Name': 'NLE', 'User': [5, 27] },
        { 'Name': 'HIN', 'User': [10, 30] },
        { 'Name': 'FBPTSE', 'User': [8, 25] },
        { 'Name': 'VEDIO', 'User': [20, 40] },
        { 'Name': 'SASS', 'User': [6, 35] },
        { 'Name': 'RDS', 'User': [12, 30] },
        { 'Name': 'E-SYSTSE', 'User': [15, 27] },
    ],
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Number'
    }
};
