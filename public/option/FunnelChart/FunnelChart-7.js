const option = {
    theme: 'light',
    gap: 10,
    label: {
        show: true,
        position: 'outside',
        formatter: `{b|{b}:}{c|{c}%}`,
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
        { value: 80, name: 'Click' },
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' }
    ]
};