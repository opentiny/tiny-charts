/*
* position 控制圆盘图的大小和位置：
* position.center:[横向位置，纵向位置] 控制圆盘图中心点的位置
* position.radius:[内部半径，外部半径] 控制圆盘图的半径大小
* position.radius的优先级高于 type 属性
*
* legend.orient 控制图例方向
* legend.orient = 'horizontal'(默认) 表示图例为横向
* legend.orient = 'vertical' 表示图例为纵向
* legend.position : {top, left, right, bottom} 控制图例位置
* top 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
* left 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
* right 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
* bottom 的值可以是 20 这样的具体像素值，可以是 '20%' 这样相对于容器高宽的百分比
*/
const option = {
    theme: 'light',
    position:{
        center:['40%','50%'],
        radius:['58%','65%'],
    },
    title:{
        left:'40%',
        textAlign:'center',
        text:'平台监测分布',
        subtext:'数量监测',
    },
    legend: {
        show: true,
        position:{
            right: '20%',
            top: 'center'
        },
        orient:'vertical'
    },
    label:{
        show: true,
        type:'percent',
        line: true
    },
    data:[                             
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        {value: 14, name: 'SG' },
        {value: 120, name: 'OTHER' },
    ]
};
