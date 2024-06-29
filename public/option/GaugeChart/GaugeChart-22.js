const option = {
    theme: 'light',
    color: '#ec6f1a',
    position: {
        center: ['50%', '50%'],
        radius: '15%'
    },
    silent: true,
    data: [
        {
            name: '60',
            value: 60 
        }
    ],
    text: {
        offset: [3, 3],
        formatter: function (value) {
            return '{value|' + value + '}\t{unit|%}'
        },
        formatterStyle: {
            unit: {
                color: '#000',
                fontSize: 12,
                fontWeight: 'bolder',
            },
            value: {
                color: '#000',
                fontSize: 26,
                fontWeight: 'bolder',
            },
        }
    },
    splitLine: {
        show: false
    },
    itemStyle: {
        width: 8
    }
    
};
