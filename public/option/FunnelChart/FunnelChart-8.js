const option = {
    theme: 'light',
    series: [
        {
            name: 'Expected',
            type: 'funnel',
            minSize: '10%',
            left: '10%',
            width: '80%',
            label: {
                formatter: '{b}Expected',
                position: 'outside',
            },
            itemStyle: {
                opacity: 0.7,
            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}Expected: {c}%'
                }
            },
            data: [
                { value: 100, name: 'Show' },
                { value: 80, name: 'Click' },
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Order' },
            ]
        },
        {
            name: 'Actual',
            type: 'funnel',
            minSize: '10%',
            left: '10%',
            width: '80%',
            maxSize: '100%',
            label: {
                position: 'inside',
                formatter: '{c}%',
                color: '#ffffff'
            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}Actual: {c}%'
                }
            },
            data: [
                { value: 30, name: 'Visit' },
                { value: 20, name: 'Order' },
                { value: 60, name: 'Click' },
                { value: 100, name: 'Show' }
            ],
            z: 100
        }
    ]
};