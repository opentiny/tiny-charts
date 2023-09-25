const BaseOption = {
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: {
    type: 'category',
    inverse: true,
    show: false,
    data: [],
  },
  series: [
    {
      //用来做前面的文本显示
      name: 'seriesName',
      type: 'bar',
      barWidth: 20,
      stack: 'total',
      silent: true,
      itemStyle: {
        borderRadius: 4,
        color: '',
      },
      label: {
        show: true,
        color: '',
        position: [0, -20],
        fontSize: 14,
        formatter: () => {
          return '';
        },
        overflow: 'truncate',
      },
      data: [],
    },
  ],
};

export default BaseOption;
