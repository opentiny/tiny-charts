const option = {
    // 图表名称
    name: 'RankProcessChart',
    // 主题,默认值'hdesign-light'
    theme: 'hdesign-light',

    // padding控制图表距离容器的上、右、下、左padding值
    padding: [16, 16, 0, 16], 
    
    titleName: '项目名称',
    valueName: '完成任务',
    percentName: '进度',
    
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
    
    // 滚动条功能
    data: [
        { name: '电商平台', value: 45, percent: 100, content: '电商平台项目已完成45个任务，完成度100%' },
        { name: '移动APP', value: 38, percent: 95, content: '移动APP项目已完成38个任务，完成度95%' },
        { name: '管理系统', value: 32, percent: 80, content: '管理系统项目已完成32个任务，完成度80%' },
        { name: '数据分析', value: 26, percent: 65, content: '数据分析项目已完成26个任务，完成度65%' },
        { name: '微信小程序', value: 18, percent: 45, content: '微信小程序项目已完成18个任务，完成度45%' },
        { name: '支付系统', value: 12, percent: 30, content: '支付系统项目已完成12个任务，完成度30%' },
        { name: '物流管理', value: 28, percent: 70, content: '物流管理项目已完成28个任务，完成度70%' },
        { name: '客服系统', value: 22, percent: 55, content: '客服系统项目已完成22个任务，完成度55%' },
        { name: '推荐引擎', value: 10, percent: 25, content: '推荐引擎项目已完成10个任务，完成度25%' },
        { name: '搜索优化', value: 6, percent: 15, content: '搜索优化项目已完成6个任务，完成度15%' },
        { name: '营销工具', value: 16, percent: 40, content: '营销工具项目已完成16个任务' },
        { name: '报表系统', value: 24, percent: 60, content: '报表系统项目已完成24个任务' },
        { name: '监控平台', value: 14, percent: 35, content: '监控平台项目已完成14个任务' },
        { name: '权限管理', value: 36, percent: 90, content: '权限管理项目已完成36个任务' },
        { name: '消息推送', value: 20, percent: 50, content: '消息推送项目已完成20个任务' },
        { name: '文件存储', value: 30, percent: 75, content: '文件存储项目已完成30个任务' },
        { name: '日志系统', value: 17, percent: 42, content: '日志系统项目已完成17个任务' },
        { name: '配置中心', value: 11, percent: 28, content: '配置中心项目已完成11个任务' },
        { name: '网关服务', value: 13, percent: 33, content: '网关服务项目已完成13个任务' },
        { name: '缓存系统', value: 7, percent: 18, content: '缓存系统项目已完成7个任务' },
        { name: '测试平台', value: 34, percent: 85, content: '测试平台项目已完成34个任务' },
        { name: '部署工具', value: 37, percent: 92, content: '部署工具项目已完成37个任务' },
        { name: '代码审查', value: 27, percent: 67, content: '代码审查项目已完成27个任务' },
        { name: '性能监控', value: 35, percent: 88, content: '性能监控项目已完成35个任务' },
        { name: '安全防护', value: 9, percent: 22, content: '安全防护项目已完成9个任务' }
    ],
    
};
