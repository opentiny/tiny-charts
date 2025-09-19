const option = {
    // 图表名称
    name: 'RankProcessChart',
    // 主题,默认值'light'
    theme: 'hdesign-light',

    // padding控制图表距离容器的上、右、下、左padding值
    padding: [16, 16, 0, 16], 
    
    titleName: '名称',
    valueName: '金额',
    percentName: '贡献度',
    // Tooltip 配置
    tooltip: {
        show: true,
        formatter: null
    },
    
    // 排序配置
    sort: {
        field: 'value',
        order: 'desc'
    },
    
    // 数据
    data: [
        { name: '小王', value: 100, percent: 100 },
        { name: '小明', value: 60, percent: 60 },
        { name: '小智', value: 40, percent: 40 },
        { name: '小刚', value: 70, percent: 70 },
        { name: '小李', value: 50, percent: 50 }
    ],
    
};