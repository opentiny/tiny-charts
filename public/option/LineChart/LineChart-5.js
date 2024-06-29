const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,   // 图例是否显示
        icon: 'line', // 图例的小图标为横短线
    },
    discrete: true,
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 22 },
        { 'Month': 'Apr', 'Domestic': '', 'Abroad': undefined },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': '', 'Abroad': '' },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 23, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 32 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 33, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Units'
    }
};
