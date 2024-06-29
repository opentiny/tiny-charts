const option = {
    theme: 'light',
    splitNumber: 5,
    text: {
        offset: ['20%', 0],
        formatter: function (value) {
            return '{value|' + value + '}{unit|%}{icon|↑7%}{name|VS Yesterday}'
        },
        formatterStyle: {
            value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#000000',
            },
            unit: {
                fontSize: 12,
                color: '#999999',
                padding: [20, 0, 0, 6],
            },
            icon: {
                fontSize: 14,
                color: 'green',
                padding: [20, 6, 0, 0],
            },
            name: {
                fontSize: 14,
                color: '#ffffff',
                padding: [20, 0, 0, 0],
            }
        }
    },
    data: [
        {
            value: 51,
            name: 'VS Yesterday'
        },
    ]
};
