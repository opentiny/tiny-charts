const option = {
    // 图表名称
    name: 'RankProcessChart',
    // 主题,默认值'light'
    theme: 'dpui-light',

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
    
    // 数据
    data: [
        { name: '李华', value: 100, percent: 100 },
        { name: '小明', value: 60, percent: 60 },
        { name: '小智', value: 40, percent: 40 },
        { name: '小刚', value: 70, percent: 70 },
        { name: '小', value: 50, percent: 50 }
    ],
    
};