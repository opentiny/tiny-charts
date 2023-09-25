const option = {
    //图表名称
    name: 'ThresholdProcessBarChart',
    theme: 'light',
    //chartPadding控制图表距离容器的上、右、下、左padding值
    chartPadding: [32, 100, 32, 32],
    color: ['#00aaee'],
    //数据
    data: [
        { name: 'UniEPMgr', value: 80 },
        { name: 'SMLoglic', value: 65 },
        { name: 'SSO', value: 45 },
        { name: 'APIMgr', value: 20 },
        { name: 'Logtransfer', value: 12 }
    ],
    unit: '%',
    markLine: {
        value: 40,
        // 控制哪一部分变颜色
        bounds: 'left',
        // 阈值线的颜色
        itemColor: {
            initialColor: ['rgba(243,66,98,0.50)'],
            endColor: ['#F34262']
        },
    },
    linearGradient: {
        initialColor: ['rgba(78,128,243,0.50)'],
        endColor: ['#4E80F3']
    }
};
