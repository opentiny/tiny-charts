const option = {
  theme: 'light',
  color: ['#1F55B5'],
  chartPadding: [50, 120, 50, 120],
  data: [
    { name: 'BRAS 01', value: 80 },
    { name: 'BRAS 02', value: 60 },
    { name: 'BRAS 03', value: 40 },
    { name: 'BRAS 04', value: 31 },
    { name: 'BRAS 05', value: 25 },
  ],
  opacity: .8,
  text: {
    fontSize: '12',
    show: true
  },
  coincide: '-100%',
  yAxisName: 'Units',
  // 高亮状态配置
  emphasis: {
    disabled: false,
    label: {
      color: '#5990FD'
    },
    itemStyle: {
      borderWidth: 2,
      borderColor: '#fff'
    }
  }
};