[
  {
    theme: 'light',
    barWidth: 8,
    data: [
      { name: '语文', value: 70 },
      { name: '数学', value: 90 },
      { name: '英语', value: 60 },
      { name: '物理', value: 92 },
      { name: '化学', value: 90 },
    ],
    event: {
      'series': {
        click: (params) => {
  
        },
        dblclick: (params) => {
  
        }
      }
    }
  },
  {
    theme: 'light',
    barWidth: 8,
    data: [
      { name: '语文', value: 70 },
      { name: '数学', value: 90 },
      { name: '英语', value: 60 },
      { name: '物理', value: 92 },
      { name: '化学', value: 90 },
    ],
    // 自定义最大值，用于展示data中每项数据在最大值的占据比例，一般可取value最大值。
    // 未定义则data中每项数据的占比为其value值与总value值的比值。
    max: 100,
  }
]