const option = {
    theme: 'light',
    // splitColor 分割仪表盘
    // splitColor[i][0] 的值代表整根轴线的百分比，应在 0 到 1 之间
    // splitColor[i][1] 是对应的颜色。
    splitColor: [
        [0.25, '#0d9458'],
        [0.5, '#eeba18'],
        [0.75, '#ec6f1a'],
        [1, '#f43146'],
    ],
    itemStyle: {
        outerGauge: {
            show: false
        }
    },
    splitLine: {
        show: false
    },
    pointer: true,
    data: [
        {
            value: 71,
            name: 'Utilization rate'
        }
    ]
};
