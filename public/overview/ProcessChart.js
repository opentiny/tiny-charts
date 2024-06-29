[
  {   
    // 图表名称
    name: 'ProcessBarChart',
    // 主题,默认值'light'
    theme: 'light',
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [32, 32, 32, 32], 
    // 颜色组，循环使用
    color:['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41','#00aaee'],
    // 数据
    data:[
        { name:'UniEPMgr',    value:80 },
        { name:'SMLoglic',    value:65 },
        { name:'SSO',         value:45 },
        { name:'APIMgr',      value:20 },
        { name:'Logtransfer', value:12 }
    ],
    xAxis:{
      boundaryGap: false
    }
  },
  {   
    // 图表名称
    name: 'StackProcessBarChart',
    // 主题,默认值'light'
    theme: 'light',
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [32, 32, 48, 32], 
    // 颜色组，循环使用
    color:['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41','#00aaee'],
    barWidth: 15,
    calibrationValue:250,
    // 数据
    data: [
      {
        name: 'China',
        children: [
        { type: 'Game', value: 30 },
        { type: 'Move', value: 20 },
        { type: 'Animation', value: 45 },
        { type: 'Fiction', value: 60 },
        ],
      },
      {
          name: 'Mexico',
          children: [
          { type: 'Game', value: 12 },
          { type: 'Move', value: 14 },
          { type: 'Animation', value: 33 },
          { type: 'Fiction', value: 44 },
          ],
      },
      {
          name: 'Canada',
          children: [
          { type: 'Game', value: 35 },
          { type: 'Move', value: 45 },
          { type: 'Animation', value: 19 },
          { type: 'Fiction', value: 33 },
          ],
      },
      {
          name: 'Sweden',
          children: [
          { type: 'Game', value: 34 },
          { type: 'Move', value: 10 },
          { type: 'Animation', value: 8 },
          { type: 'Fiction', value: 66 },
          ],
      },
      {
          name: 'null',
          children: [
          { type: 'Game', value: null },
          { type: 'Move', value: null },
          { type: 'Animation', value: null },
          { type: 'Fiction', value: null },
          ],
      },
    ],
    xAxis:{
      boundaryGap: false
    }  
  }
]