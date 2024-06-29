const option = {
    theme: 'light',
    chartPadding: [50, 20, 50, 20],
    data: [
        { name: 'BRAS 01', value: 81 },
        { name: 'BRAS 02', value: 60 },
        { name: 'BRAS 03', value: 40 },
        { name: 'BRAS 04', value: 31 },
        { name: 'BRAS 05', value: 21 },
    ],
    opacity: .8,
    text: {
        fontSize: '12',
        show: true
    },
    // 相邻山峰间隔
    coincide: '0%',
    yAxisName: 'Units',
    // 自定义设置图表事件
    event: {
        'series': {
            click: (params) => {

            },
            dblclick: (params) => {

            }
        }
    }
};