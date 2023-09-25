/*
* padding : [top, right, bottom, left]
* legend.position : {top, left, right, bottom}
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'hwCloud-light',
    padding: [50, 30, 15, 20],
    area: true,
    smooth: true,
    legend: {
        show: true,          // 图例是否显示
        position: {           // 图例在容器中的上下左右的位置
            right: 25,
            top: 15
        },
    },
    data: [
        { 'Month': 'Jan', 'Car': 33, 'Bus': 37, 'Aircraft': 40 },
        { 'Month': 'Feb', 'Car': 27, 'Bus': 39, 'Aircraft': 37 },
        { 'Month': 'Mar', 'Car': 31, 'Bus': 20, 'Aircraft': 37 },
        { 'Month': 'Apr', 'Car': 30, 'Bus': 15, 'Aircraft': 37 },
        { 'Month': 'May', 'Car': 37, 'Bus': 13, 'Aircraft': 45 },
        { 'Month': 'Jun', 'Car': 36, 'Bus': 17, 'Aircraft': 40 },
        { 'Month': 'Jul', 'Car': 42, 'Bus': 22, 'Aircraft': 50 },
        { 'Month': 'Aug', 'Car': 22, 'Bus': 12, 'Aircraft': 37 },
        { 'Month': 'Sep', 'Car': 17, 'Bus': 30, 'Aircraft': 30 },
        { 'Month': 'Oct', 'Car': 40, 'Bus': 33, 'Aircraft': 42 },
        { 'Month': 'Nov', 'Car': 42, 'Bus': 22, 'Aircraft': 35 },
        { 'Month': 'Dec', 'Car': 32, 'Bus': 11, 'Aircraft': 38 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Units'
    }
};