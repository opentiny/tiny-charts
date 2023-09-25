/*
* padding : [top, right, bottom, left]
* legend.position : {top, left, right, bottom}
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'light',
    padding: [55, 30, 15, 20], //padding控制图表距离容器的上、右、下、左padding值
    legend: {
        show: true, //图例是否显示
        position: { //图例在容器中的上下左右的位置
            top: 20,
            right: 25,
        },
        orient: 'horizontal'//图例排布方向
    },
    data: {
        'Bus': [
            ['Q1', 70, 10, 'Q1', 'Bus'],
            ['Q2', 80, 15, 'Q2', 'Bus'],
            ['Q3', 200, 60, 'Q3', 'Bus'],
            ['Q4', 160, 40, 'Q4', 'Bus'],
        ],
        'Car': [
            ['Q1', 95, 20, 'Q1', 'Car'],
            ['Q2', 120, 60, 'Q2', 'Car'],
            ['Q3', 180, 40, 'Q3', 'Car'],
            ['Q4', 230, 70, 'Q4', 'Car'],
        ],
        'Bicycle': [
            ['Q1', 268, 50, 'Q1', 'Bicycle'],
            ['Q2', 150, 36, 'Q2', 'Bicycle'],
            ['Q3', 110, 20, 'Q3', 'Bicycle'],
            ['Q4', 50, 20, 'Q4', 'Bicycle'],
        ]
    },
    yAxisName: 'Member'
};
