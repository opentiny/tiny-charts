const option = {
    theme: 'light',
    padding: [30, 90, 50, 20],
    legend: {
        show: true,
    },
    // 'range'柱状图为区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    type: 'range',
    // 横向形态
    direction: 'horizontal',
    data: [
        { "Name": 'NLE', "User": [5, 20] },
        { "Name": 'HIN', "User": [10, 30] },
        { "Name": 'FBP', "User": [8, 25] },
        { "Name": 'VEDIO', "User": [14, 40] },
        { "Name": 'SASS', "User": [6, 35] },
        { "Name": 'RDS', "User": [12, 30] },
        { "Name": 'E-SYS', "User": [15, 20] },
    ],
    xAxis: {
        data: "Name",
    },
    yAxis: {
        name: "Number"
    }
};
