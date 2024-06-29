/*
* 注意：区间形态的label仅仅能显示区域的长度
*/
const option = {
    theme: 'light',
    padding: [30, 90, 50, 20],
    legend: {
        show: true,
    },
    type: 'range', // type='range'柱状图为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    direction: 'horizontal', // 横向柱状图
    label: {  // 此处也可以使用 Array 对每个柱状图进行单独配置
        show: true,
        position: 'right',
        offset: [6, 1]
    },
    data: [
        { 'Name': 'NLE', 'Man': [5, 26], 'Female': [5, 26] },
        { 'Name': 'HIN', 'Man': [10, 30], 'Female': [8, 25] },
        { 'Name': 'FBP', 'Man': [8, 25], 'Female': [2, 20] },
        { 'Name': 'VEDIO', 'Man': [20, 40], 'Female': [15, 35] },
        { 'Name': 'SASS', 'Man': [6, 35], 'Female': [10, 22] },
        { 'Name': 'RDS', 'Man': [12, 30], 'Female': [15, 35] },
        { 'Name': 'E-SYS', 'Man': [15, 26], 'Female': [12, 26] },
    ],
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Number'
    }
};
