const option = {
    // 图表名称
    name: 'RankProcessChart',
    // 主题,默认值'hdesign-light'
    theme: 'hdesign-light',

    // padding控制图表距离容器的上、右、下、左padding值
    padding: [16, 16, 0, 16], 
    
    // 自定义图表信息 - 可自定义列标题
    titleName: '部门',
    valueName: '业绩(万元)',
    percentName: '达成率',
    
    // Tooltip 配置
    tooltip: {
        show: true,
        formatter: null
    },
    
    // 数据
    data: [
        { name: '销售一部', value: 1250, percent: 95, content: '销售一部业绩1250万元，达成率95%，表现优异' },
        { name: '销售二部', value: 980, percent: 78, content: '销售二部业绩980万元，达成率78%，进展良好' },
        { name: '销售三部', value: 1420, percent: 88, content: '销售三部业绩1420万元，达成率88%，业绩领先' },
        { name: '销售四部', value: 760, percent: 65, content: '销售四部业绩760万元，达成率65%，需要提升' },
        { name: '销售五部', value: 1100, percent: 82, content: '销售五部业绩1100万元，达成率82%，稳步增长' }
    ],
    
};
