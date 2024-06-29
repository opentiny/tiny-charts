/*
* area 为 true 时表示为面积图
*/
const option = {
    theme: 'light',
    area: true,
    stack: true,
    data: [
        { 'Month': 'Jan', 'Domestic': 35, 'Abroad': 35 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 33, 'Abroad': 25 },
        { 'Month': 'Apr', 'Domestic': 32, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 15 },
        { 'Month': 'Jul', 'Domestic': 43, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 35 },
        { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 25 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 15 },
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true,
    },
    yAxis: {
        name: 'Units'
    }
};
