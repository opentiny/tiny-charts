const option = {
    //图表名称
    name: 'ProcessBarChart',
    theme: 'light',
    //chartPadding控制图表距离容器的上、右、下、左padding值
    chartPadding: [32, 32, 0, 32],
    //颜色组，循环使用
    color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'],
    barWidth: 25,
    unit: '',
    calibrationValue: 200,
    event: {
        'series': {
            click: (params) => {
                // 处理逻辑
            },
        },
    },
    //数据
    data: [
        { name: 'UniEPMgr', value: 80 },
        { name: 'SMLoglic', value: 65 },
        { name: 'SSO', value: 45 },
        { name: 'APIMgr', value: 20 },
        { name: 'Logtransfer', value: 12 }
    ],

};
