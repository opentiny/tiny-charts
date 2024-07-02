const option = {
    theme: 'light',
    color: [
        '#fa2a2d',
        '#ff7500',
        '#ffbf00',
        '#41ba41',
        '#00aaee'
    ], // 自定义颜色组，会循环使用该颜色组
    legend: {
        show: true,
        position:{
            left: 'center',
            bottom: 20
        },
        orient:'horizontal'
    },
    radarMax: 100,
    data:{
        'Domestic':{
            'Equipment': 47,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 77
        },
        'Abroad':{
            'Equipment': 77,
            'VM': 55,
            'CSP': 93,
            'RD': 90,
            'Markets': 87
        }
    }
};
