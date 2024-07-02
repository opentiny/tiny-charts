const option = {
    theme: 'light',
    // gradientColor 表示从仪表盘左到右的渐变色
    // gradientColor.length == 1 时也可以表示单色
    // 注意：splitColor 的优先级高于 gradientColor
    gradientColor: ['#5990fd', '#0d9458', '#eeba18', '#ec6f1a', '#f43146'],
    startAngle: 180,
    endAngle: 0,
    data: [
        {
            value: 90,
            name: 'Utilization rate'
        }
    ]
};
