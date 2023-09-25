const option = {
    theme: 'light',
    series: [
        {
            name: 'Expected',
            gap: 5,
            sort: 'ascending',
            type: 'funnel',
            left: '10%',
            width: '80%',
            label: {
                formatter: '{b}Expected'
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
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' },
                { value: 100, name: 'Show' }
            ]
        },
        {
            name: 'Actual',
            type: 'funnel',
            sort: 'ascending',
            gap: 5,
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label: {
                position: 'inside',
                formatter: '{c}%',
            },
            itemStyle: {
                opacity: 1,
                borderWidth: 2
            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}Actual: {c}%'
                }
            },
            data: [
                { value: 30, name: 'Visit' },
                { value: 10, name: 'Inquiry' },
                { value: 5, name: 'Order' },
                { value: 50, name: 'Click' },
                { value: 80, name: 'Show' }
            ],
            z: 100
        }
    ]
};