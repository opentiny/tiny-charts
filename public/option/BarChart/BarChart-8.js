const option = {
    theme: 'light',
    padding: [30, 100, 50, 20],
    // 双向柱状图形态
    type: 'both-sides',
    // 横向
    direction: 'horizontal',
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': -37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': -8 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': -20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': -15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': -13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': -8 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': -22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': -12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': -30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': -33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': -22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': -8 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    }
};
