const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    // type='range'柱状图为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    type: 'range',
    data: [
        { 'Name': 'NLE', 'Man': [5, 20], 'Female': [5, 23], 'Unkown': [13, 16] },
        { 'Name': 'HIN', 'Man': [10, 30], 'Female': [8, 25], 'Unkown': [5, 13] },
        { 'Name': 'FBP', 'Man': [8, 25], 'Female': [2, 20], 'Unkown': [12, 15] },
        { 'Name': 'VEDIO', 'Man': [20, 40], 'Female': [13, 35], 'Unkown': [10, 20] },
        { 'Name': 'SASS', 'Man': [6, 35], 'Female': [10, 22], 'Unkown': [5, 35] },
        { 'Name': 'RDS', 'Man': [12, 30], 'Female': [15, 35], 'Unkown': [10, 23] },
        { 'Name': 'E-SYS', 'Man': [15, 20], 'Female': [13, 22], 'Unkown': [8, 14] },
    ],
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Number'
    }
};
