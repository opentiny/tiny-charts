/*
* position 用来控制雷达图的位置和半径
* position.center 为中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
* position.center 支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
* position.radius 雷达图半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
*
* legend.position : {top, left, right, bottom}
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'light',
    position:{
        center:['35%','50%'],
        radius:'60%',
    },
    legend: {
        show: true,
        position:{
            left:'60%',
            top: 'center'
        },
        orient:'horizontal'
    },
    markLine: 81,
    data:{
        'Domestic':{
            'Equipment': 45,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 75
        }
    }
};
