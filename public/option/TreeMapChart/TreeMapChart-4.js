const option = {
    theme: 'light',
    label: {
        color: '#ffffff',
        fontSize: 16,
        fontStyle: 'italic',
        overflow: 'break',
        formatter: '{b}\n{c}'
    },
    data: [{
        name: 'nodeA',
        value: 100,
        children: [{
            name: 'nodeAa',
            value: 40,
            label: {
                color: 'red'
            }
        },
        {
            name: 'nodeAb',
            value: 60
        }
        ]
    },
    {
        name: 'nodeB',
        value: 200,
        children: [{
            name: 'nodeBa',
            value: 200,
            children: [{
                name: 'nodeBa1',
                value: 200
            }]
        }]
    }
    ]
};