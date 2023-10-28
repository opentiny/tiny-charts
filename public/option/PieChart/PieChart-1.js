const option = {
    theme: 'light',
    type: 'circle', // type = 'circle' 表示为圆环图
    // 是否关闭hover态的效果，默认为false
    silent: false,
    title: {
        text: `{a|253}\n{b|总数量}\n{b|(用户数)}`,
        textStyle: {
            rich: {
                a: {
                    color: '#191919',
                    fontSize: 50,
                },
                b: {
                    fontSize: 16,
                    color: '#999',
                    padding: [10, 0, 0, 0]
                },
            }
        },
    },
    legend: {
        show: true,
    },
    label: {
        show: true,
        type: 'percent',
        line: false
    },
    data: [
        { value: 100, name: 'VPC' },
        { value: 90, name: 'IM' },
        { value: 49, name: 'EIP' },
        { value: 14, name: 'SG' },
    ],
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
