const data = [
    { name: 'cluster1-group-machine', value: 4 },
    { name: 'cluster2-keep-machine', value: 9 },
    { name: 'cluster3-project-machine', value: 6 },
    { name: 'cluster4-vant-machine', value: 4 },
    { name: 'cluster5-element-machine', value: 5 },
];
const option = {
    theme: 'light',
    position: {
        center: ['40%', '50%'],
        radius: ['8%', '60%'],
    },
    label: {
        show: false,// 不显示角度轴坐标文本
    },
    legend: {
        show: true,
        position: {
            right: '15%',
            top: 'center'
        },
        orient: 'vertical',
        formatter: (name) => {
            const item = data.filter((item) => item.name === name)[0];
            let title = '';
            if (name.length > 10) {
                title = name.slice(0, 10) + '...';
            } else {
                title = name;
            }
            return '{title|' + title + '}{value|' + item.value + '}';
        },
        textStyle: {
            rich: {
                title: {
                    color: '#808080',
                    fontSize: 14,
                    padding: [0, 0, 0, 5],
                    width: 120,
                },
                value: {
                    fontSize: 16,
                    width: 40,
                    color: '#191919',
                },
            },
        },
        tooltip: {
            show: true,
        }
    },
    data: data,
};