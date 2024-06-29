const option = {
    theme: 'light',
    type: 'circle',
    position: {
        center: ['40%', '50%'],
        radius: ['44%', '50%']
    },
    title: {
        text: '{a|500}\n{b|波道总数}',
        left: '40%',
        textAlign: 'center',
        textStyle: {
            rich: {
                a: {
                    color: '#191919',
                    fontSize: 30,
                },
                b: {
                    fontSize: 16,
                    color: '#BBBBBB',
                    padding: [10, 0, 0, 0]
                },
            }
        },
    },
    legend: {
        show: true,
        position: {
            right: '8%',
            top: 'center'
        },
        orient: 'vertical',
        height: 120,
        formatter: (name) => {
            let data = [
                { value: 100, name: '<100G波道数' },
                { value: 200, name: '100G波道数' },
                { value: 200, name: '200G/400G波道数' },
            ];
            let total = data.reduce((a, b) => {
                return a + b.value;
            }, 0);
            let item = data.filter((item) => item.name === name)[0];
            let percent = Math.floor((item.value / total) * 100 * 100) / 100 + '%';
            return '{value|' + item.value + '}{percent|' + (percent) + '}\n{title|' + name + '}'
        },
        textStyle: {
            rich: {
                value: {
                    fontSize: 24,
                    color: '#191919',
                    padding: [24, 0, 0, 0],
                },
                percent: {
                    fontSize: 12,
                    width: 20,
                    color: '#999999',
                    padding: [28, 0, 0, 8],
                },
                title: {
                    fontSize: 14,
                    color: '#999999',
                    padding: [8, 0, 0, 0],
                },
            },
        },
    },
    label: {
        show: false,
    },
    data: [
        { value: 100, name: '<100G波道数' },
        { value: 200, name: '100G波道数' },
        { value: 200, name: '200G/400G波道数' },
    ],
    itemStyle: {
        borderRadius: 20,
    },
    series: [
        {
            data: [
                {
                    name: '<100G波道数',
                    value: 100,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#4A46FF'
                            }, {
                                offset: 1, color: '#D593FF'
                            }],
                        }
                    }
                },
                {
                    name: '100G波道数',
                    value: 200,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#51C4FF'
                            }, {
                                offset: 1, color: '#51FFD0'
                            }],
                        }
                    }
                },
                {
                    name: '200G/400G波道数',
                    value: 200,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#37ADFF'
                            }, {
                                offset: 1, color: '#3B58F4'
                            }],
                        }
                    }
                },
            ]
        },
        // 外环
        {
            name: '外环',
            type: 'pie',
            silent: true,
            clockwise: true,
            center: ['40%', '50%'],
            radius: ['48%', '55%'],
            z: -1,
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: 'rgba(255,255,255,0.2)',
                borderWidth: 1,
                borderColor: '#6e8ec1',
                borderType: 'dashed'
            },
            data: [1]
        },
    ]
};