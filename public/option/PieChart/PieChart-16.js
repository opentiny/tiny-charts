const option = {
    theme: 'light',
    position: {
        center: ['50%', '50%'],
    },
    legend: {
        show: true,
        position: {
            right: '15%',
            top: 'center'
        },
        itemGap: 10, // itemGap:控制图例之间的间隔
        width: 100,
        orient: 'vertical',
    },
    data: [
        { value: 100, name: 'VPC' },
        { value: 94, name: 'IM' },
        { value: 44, name: 'EIP' },
        { value: 14, name: 'SG' },
    ]
};

