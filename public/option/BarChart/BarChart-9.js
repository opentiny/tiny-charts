const option = {
    theme: 'light',
    padding: [50, 30, 20, 20],
    legend: {
        show: false
    },
    // 'water-fall'表示为瀑布形态，此时图中会自动添加一个Total(总和)数据
    type: 'water-fall',
    data: [
        { "Name": 'NLE', "User": 10 },
        { "Name": 'HIN', "User": 20 },
        { "Name": 'FBP', "User": 15 },
        { "Name": 'VEDIO', "User": 35 },
        { "Name": 'SASS', "User": 20 },
        { "Name": 'RDS', "User": 35 },
        { "Name": 'E-SYS', "User": 35 },
    ],
    xAxis: {
        data: "Name",
    },
    yAxis: {
        name: "Number"
    }
};
