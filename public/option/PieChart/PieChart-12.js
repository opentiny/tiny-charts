const option = {
    theme: 'light',
    title:{
        text:`{a|253}\n{b|总数量}\n{b|(人员数)}`,
        textStyle: {
            rich: {
                a: {
                    color: '#191919',
                    fontSize: 50,
                },
                b: {
                    fontSize: 16,
                    color: '#999',
                    padding: [10, 0, 0, 0]
                },
            }
        },
    },
    label:{
        show: true,
        type:'percent',
        line: false
    },
    // 图表描边颜色配置
    itemStyle:{
        borderColor:'#ffffff'
    },
    data:[                             
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        {value: 14, name: 'SG' },
    ]
};

