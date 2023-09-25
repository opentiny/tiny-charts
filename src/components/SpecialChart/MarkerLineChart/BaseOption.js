const BaseOption = {
  grid: {
    top: 30,
    bottom: 20,
    left: 24,
    right: 0,
  },
  series: [
    {
      type: 'line',
      symbol: 'circle',
      itemStyle: {},
      label: {
        show: true,
        position: 'top',
      },
      lineStyle: {
        shadowBlur: 0,
        shadowOffsetY: 0,
      },
      markLine: {
        // 不设置箭头,纯线
        symbol: ['none'],
        // 自定义线的问文字
        label: {},
        lineStyle: {},
        data: [
          {
            yAxis: '',
          },
        ],
      },
    },
  ],
};
export default BaseOption;
