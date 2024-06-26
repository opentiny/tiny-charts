const option = {
    theme: 'light',
    legend: {
        show: true,
        position:{
            left: 'center',
            bottom: 20.8
        },
        orient:'horizontal'
    },
    // 阈值线针对单独数据项做配置,threshold需要配置所有的数据子项,不可缺少
    markLine:{
        threshold:{
            'Equipment': 21,
            'VM': 40,
            'CSP': 35,
            'RD': 20,
            'Markets': 51
        }
    },
    data:{
        'Domestic':{
            'Equipment': 41,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 71
        }
    }
};
