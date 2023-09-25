const option = {
    theme: 'light',
    legend: {
        show: true,
        position:{
            left: 'center',
            bottom: 20
        },
        orient:'horizontal'
    },
    // radarMax 用来设置雷达图最外圈代表的数值
    // 当不设置 radarMax 时，雷达图坐标系的最外圈为数据中的最大值
    radarMax: 100,
    data:{
        'Domestic':{
            'Equipment': 43,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 78
        }
    }
};
