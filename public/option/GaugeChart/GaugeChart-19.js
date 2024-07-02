const option = {
    theme: 'light',
    gradientColor: ['green', 'green'],
    data: [
        {
            value: 33,
            name: 'Utilization rate'
        }
    ],
    pointer: true,
    splitNumber: 2,
    // pointerStyle:调整指针样式
    // width:指针宽度
    // length:指针长度
    // pointerDistance:指针距离中心距离
    // lineDistance:外层光晕距离进度条距离
    pointerStyle: {
        width: 30,
        length: '20%',
        pointerDistance: '-120%',
        lineDistance: '15%',
    }
};
