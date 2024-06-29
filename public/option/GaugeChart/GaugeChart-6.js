const option = {
    theme: 'light',
    // position 用来控制用仪表盘的位置和半径

    // position.center 为中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
    // 支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。

    // position.radius 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
    position: {
        center: ['50%', '85%'],
        radius: '80%',
    },
    min: 0,
    max: 120,
    startAngle: 180,
    endAngle: 0,
    splitNumber: 10,
    data: [
        {
            value: 71,
            name: 'Utilization rate'
        }
    ]
};
