const option = {
    theme: 'light',
    startAngle: 90,
    endAngle: -270,
    color: '#10c7c1',
    position: {
        radius: '15%',
        center: ['50%', '50%']
    },
    silent: true,
    data: [
        {
            value: 60,
            name: '60'
        }
    ],
    text: {
        offset: [3, 3],
        formatter: function (value) {
            return '{value|' + value + '}\t{unit|%}'
        },
        formatterStyle: {
            value: {
                color: '#000',
                fontSize: 26,
                fontWeight: 'bolder',
            },
            unit: {
                color: '#000',
                fontSize: 12,
                fontWeight: 'bolder',
            }
        }
    },
    itemStyle: {
        width: 8
    },
    splitLine: {
        show: false
    }
};
