/*
* legend.position : [top, right, bottom, left]
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'light',
    padding: [40, 80, 20, 10],
    legend: {
        show: true,          // 图例是否显示
        position: {           // 图例在容器中的上下左右的位置
            right: 25,
            top: 15
        },
        orient: 'horizontal', // 图例排布方向
        tooltip: {            // 图例悬浮提示框
            show: true
        }
    },
    data: [
        { 'Name': 'Elastic', 'Domestic': 31, 'Abroad': 20 },
        { 'Name': 'Bare Metal Server', 'Domestic': 30, 'Abroad': 16 },
        { 'Name': 'Object Store', 'Domestic': 27, 'Abroad': 39 },
        { 'Name': 'Cloud Hard Drive', 'Domestic': 16, 'Abroad': 37 },
    ],
    direction: 'horizontal',
    xAxis: {
        data: 'Name',
    },
    yAxis: {
        name: 'Units'
    }
};
