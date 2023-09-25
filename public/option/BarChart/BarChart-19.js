const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    // 'water-fall'为瀑布形态，此时图中会自动添加一个Total(总和)数据
    type: 'water-fall',
    data: [
        { "Name": 'NLE', "Man": 5, "Female": 5, "Unkown": 8 },
        { "Name": 'HIN', "Man": 10, "Female": 8, "Unkown": 5 },
        { "Name": 'FBP', "Man": 8, "Female": 2, "Unkown": 12 },
        { "Name": 'VEDIO', "Man": 20, "Female": 15, "Unkown": 10 },
        { "Name": 'SASS', "Man": 6, "Female": 10, "Unkown": 5 },
        { "Name": 'RDS', "Man": 12, "Female": 15, "Unkown": 10 },
        { "Name": 'E-SYS', "Man": 15, "Female": 12, "Unkown": 8 },
    ],
    xAxis: {
        data: "Name",
    },
    yAxis: {
        name: "Number"
    }
};
