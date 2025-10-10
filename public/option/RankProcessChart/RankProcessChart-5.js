const option = {
    // 图表名称
    name: 'RankProcessChart',
    // 主题,默认值'hdesign-light'
    theme: 'hdesign-light',

    // padding控制图表距离容器的上、右、下、左padding值
    padding: [16, 16, 0, 16], 
    
    titleName: '产品线',
    valueName: '营收(万元)',
    percentName: '增长率',
    
    color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#F4A460', '#FF7F50'],
    
    // 排序配置
    sort: {
        field: 'value',
        order: 'desc'
    },
    
    // Tooltip 配置
    tooltip: {
        show: true,
        formatter: null
    },
    
    // 自定义配色
    data: [
        { 
            name: '智能家具', 
            value: 3250, 
            percent: 100, 
            color: 'blue',
            content: '智能家具产品线营收3250万元，同比增长100%' 
        },
        { 
            name: '智能硬件', 
            value: 2850, 
            percent: 92, 
            content: '智能硬件产品线营收2850万元，同比增长92%' 
        },
        { 
            name: '企业软件', 
            value: 1980, 
            percent: 78, 
            content: '企业软件产品线营收1980万元，同比增长78%' 
        },
        { 
            name: '移动应用', 
            value: 3420, 
            percent: 85, 
            content: '移动应用产品线营收3420万元，同比增长85%' 
        },
        { 
            name: '云服务', 
            value: 4150, 
            percent: 88, 
            content: '云服务产品线营收4150万元，同比增长88%' 
        },
        { 
            name: '数据分析', 
            value: 2680, 
            percent: 95, 
            content: '数据分析产品线营收2680万元，同比增长95%' 
        },
        { 
            name: '物联网', 
            value: 1750, 
            percent: 73, 
            content: '物联网产品线营收1750万元，同比增长73%' 
        },
        { 
            name: '人工智能', 
            value: 3280, 
            percent: 81, 
            content: '人工智能产品线营收3280万元，同比增长81%' 
        },
        { 
            name: '区块链', 
            value: 1450, 
            percent: 90, 
            content: '区块链产品线营收1450万元，同比增长90%' 
        }
    ],
    
};
