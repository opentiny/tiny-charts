[
  {
    // 基础配置
    name: 'RankProcessChart',
    mode: 'svg',
    theme: 'hdesign-light',
    
    // 内边距配置
    padding: [32, 32, 0, 32],
    
    // 显示配置
    titleName: '项目名称',
    valueName: '完成度',
    percentName: '进度',
    
    // Tooltip 配置
    tooltip: {
      show: true,
      formatter: null
    },
    
    // 数据
    data: [
      { 
        name: '前端开发', 
        value: 85, 
        percent: 85, 
        color: '#1976d2',
        content: '前端开发进度85%，包含页面设计、组件开发、样式优化等工作' 
      },
      { 
        name: '后端开发', 
        value: 72, 
        percent: 72, 
        color: '#388e3c',
        content: '后端开发进度72%，API接口设计完成，数据库优化进行中' 
      },
      { 
        name: '测试验收', 
        value: 45, 
        percent: 45, 
        color: '#f57c00',
        content: '测试验收进度45%，单元测试完成，集成测试进行中' 
      },
      { 
        name: '部署上线', 
        value: 20, 
        percent: 20, 
        color: '#7b1fa2',
        content: '部署上线进度20%，环境配置完成，自动化部署准备中' 
      }
    ]
  }
]