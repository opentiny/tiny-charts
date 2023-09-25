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
        orient:'horizontal',
        // 统一对图例图标设置类型,默认circle,可选值:rect、roundRect、triangle、diamond;若定义了legend.data,则此属性失效。
        icon:'circle',
        // 控制图例图标的高度,
        itemHeight:20,
        // 控制图例图标的宽度
        itemWidth:20,
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

