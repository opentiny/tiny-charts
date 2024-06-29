const option = {
    theme: 'light',
    label: {
        show: true,
        position: 'outside',
        formatter: '{b|{b}:}{c|{c}%}',
        rich: {
            b: {
                padding: [2, 4, 0, 0]
            },
            c: {
                fontWeight: 'bold',
                padding: [2, 0, 0, 0]
            }
        }
    },
    data: [
        { value: 100, name: 'Show' },
        { value: 75, name: 'Click' },
        { value: 50, name: 'Visit' },
        { value: 25, name: 'Order' }
    ]
};