const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    // 'range'区间形态，区间柱状图用于描述数据从最小值到最大值的区域
    type: 'range',
    data: [
        { "Name": 'NLE', "User": [5, 20] },
        { "Name": 'HIN', "User": [10, 30] },
        { "Name": 'FBP', "User": [8, 25] },
        { "Name": 'VEDIO', "User": [20, 40] },
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
