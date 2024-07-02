const option = {
    theme: 'light',
    legend: {
        show: true,
        position: {
            left: 'center',
            bottom: 20.2
        },
        orient: 'horizontal'
    },
    radarMax: [
        {
            name: 'Equipment',
            max: 200
        },
    ],
    radar: {
        //  开启标签响应鼠标事件
        triggerEvent: true,
        axisName: {
            formatter: (indicatorName, indicator) => {
                return `${indicatorName}系列`
            },
        }
    },
    event: {
        'radar': {
            click: (params) => {

            }
        }
    },
    data: {
        'Domestic': {
            'Equipment': 100,
            'VM': 50,
            'CSP': 80,
            'RD': 53,
            'Markets': 78
        }
    }
};
