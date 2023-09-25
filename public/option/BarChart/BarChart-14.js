/*
* 注意：区间形态不建议自定义tip，框架内部已经对tip进行了二次封装
*/
const option = {
    theme: 'light',
    padding: [30, 90, 50, 20],
    legend: {
        show: true,
    },
    // 'range'为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    type: 'range',
    // 横向形态
    direction: 'horizontal',
    data: [
        { "Name": 'NLE', "Man": [5, 20], "Female": [5, 23] },
        { "Name": 'HIN', "Man": [10, 30], "Female": [8, 25] },
        { "Name": 'FBP', "Man": [8, 25], "Female": [2, 20] },
        { "Name": 'VEDIO', "Man": [20, 40], "Female": [15, 35] },
        { "Name": 'SASS', "Man": [6, 35], "Female": [10, 22] },
        { "Name": 'RDS', "Man": [12, 30], "Female": [15, 35] },
        { "Name": 'E-SYS', "Man": [15, 20], "Female": [12, 22] },
    ],
    xAxis: {
        data: "Name",
    },
    yAxis: {
        name: "Number"
    }
};
