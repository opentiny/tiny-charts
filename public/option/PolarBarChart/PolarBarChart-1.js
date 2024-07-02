const data = [
    { name: 'cluster-1', value: 9 },
    { name: 'cluster-2', value: 8 },
    { name: 'cluster-3', value: 7 },
    { name: 'cluster-4', value: 6 },
    { name: 'cluster-5', value: 4 },
];
const option = {
    theme: 'light',
    position: {
        center: ['40%', '50%'],
        radius: ['8%', '60%'],
    },
    legend: {
        show: true,
        position: {
            top: 'center',
            right: '15%',
        },
        orient: 'vertical',
        formatter: (name) => {
            const item = data.filter((item) => item.name === name)[0];
            return '{title|' + name + '}{value|' + item.value + '}';
        },
        textStyle: {
            rich: {
                title: {
                    color: '#808080',
                    fontSize: 14,
                    padding: [0, 0, 0, 5],
                    width: 100,
                },
                value: {
                    fontSize: 16,
                    width: 40,
                    color: '#191919',
                },
            },
        },
    },
    data: data,
};