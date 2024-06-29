/*
* padding : [top, right, bottom, left]
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'light',
    padding: [40, 10, 40, 10],
    data: [
        { 'Month': 'Jan', 'Domestic': 40, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 40, 'Abroad': 17 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};
