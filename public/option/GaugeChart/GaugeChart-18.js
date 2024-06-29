const option = {
  theme: 'light',
  data: [
    {
      value: 71,
      name: 'Utilization rate'
    }
  ],
  splitColor: [
    [0.25, '#0d9458'],
    [0.5, '#eeba18'],
    [0.75, '#ec6f1a'],
    [1, '#f43146'],
  ],
  pointer: true,
  itemStyle: {
    width: 16,
    lineStyle: {
      color: '#fff',
      width: 4,
    },
    // 去掉外层光晕
    outerGauge: {
      show: false
    }
  },
  // 此处不能通过设置属性splitLine:{show:false}不展示刻度线及文本，因为多色盘间距是根据刻度生成的
  axisLabelStyle: {
    color: 'transparent',
  }
};
