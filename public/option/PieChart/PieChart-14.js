const option = {
    theme: 'light',
    title:{
        text:`{a|253}\n{b|总数量}\n{b|(用户数)}`,
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
    legend: {
        show: true,
        itemGap:10, // itemGap:控制图例之间的间隔
        width:100,
        bottom:50,
    },
    label:{
        show: true,
        type:'percent',
        line: false
    },
    data:[                             
        {value: 100,name: 'VPC'},
        {value: 90, name: 'IM' },
        {value: 49, name: 'EIP'},
        {value: 14, name: 'SG' },
    ]
};

