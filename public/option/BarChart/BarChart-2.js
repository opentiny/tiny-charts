const option = {
    theme: 'light',
    padding: [30, 80, 50, 20],
    legend: {
        show: true,
    },
    data: [
        { 'Name': 'Elastic', 'Domestic': 31, 'Abroad': 20 },
        { 'Name': 'Bare Metal Server', 'Domestic': 30, 'Abroad': 15 },
        { 'Name': 'Object Store', 'Domestic': 27, 'Abroad': 39 },
        { 'Name': 'Cloud Hard Drive', 'Domestic': 2, 'Abroad': 37 },
    ],
    direction: 'horizontal', // 横向柱状图
    xAxis: {
        data: 'Name',
    },
    // 在横向柱状图中，Y轴的名称在右下角
    yAxis: {
        name: 'Units'
    }
};
