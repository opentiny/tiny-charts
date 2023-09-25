const BaseOption = {
  series: [
    {
      // 实际数据 + 右侧数值
      name: 'data',
      type: 'bar',
      zlevel: 2,
      barWidth: 8,
      itemStyle: {
        color: () => {
          return '';
        },
      },
      data: [],
    },
    {
      // 底色 + 左侧名称
      name: 'background',
      type: 'bar',
      barWidth: 8,
      barGap: '-100%',
      silent: true,
      itemStyle: {
        color: '',
        borderRadius: 4,
      },
      emphasis: {
        disabled: true,
      },
      label: {
        show: true,
        color: '',
        distance: 20,
        position: 'right',
        fontSize: 12,
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
