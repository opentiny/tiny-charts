const option = {
    theme: 'light',
    legend: {
        show: true,
        position: {
            left: 'center',
            bottom: '10%'
        },
        orient: 'horizontal',
        // 统一对图例图标设置类型,默认circle,可选值:rect、roundRect、triangle、diamond;若定义了legend.data,则此属性失效。
        icon: 'circle',
        // 控制图例图标的高度,
        itemHeight: 20,
        // 控制图例图标的宽度
        itemWidth: 20,
    },
    label: {
        show: true,
        type: 'percent',
        line: true
    },
    data: [
        { value: 100, name: 'VPC' },
        { value: 95, name: 'IM' },
        { value: 49, name: 'EIP' },
        { value: 15, name: 'SG' },
    ]
};