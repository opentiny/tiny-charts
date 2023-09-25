const baseOption = {
  series: [
    {
      // 实际数据 + 右侧数值
      name: 'data',
      type: 'bar',
      zlevel: 2,
      barWidth: 8,
      cursor: 'pointer',
      itemStyle: {
        borderRadius: 4,
        color: () => {
          return '';
        },
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
    {
      // 底色 + 左侧名称
      name: 'background',
      type: 'bar',
      barWidth: 8,
      barGap: '-100%',
      cursor: 'pointer',
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
        offset: [0, -24],
        position: 'insideTopRight',
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

const doubleBaseOption = {
  grid: [
    // 左边的坐标系
    {
      left: '4%',
      width: '46%',
      top: 0,
      bottom: 0,
      containLabel: false,
    },
    // 右边的坐标系
    {
      right: '4%',
      width: '46%',
      top: 0,
      bottom: 0,
      containLabel: false,
    },
  ],
  xAxis: [
    // 左侧的x轴
    {
      show: true,
      type: 'value',
      gridIndex: 0,
      inverse: true,
      splitLine: {
        lineStyle: {
          type: [8, 4],
        },
      },
      axisLabel: {
        show: false,
      },
    },
    // 右侧的x轴
    {
      show: true,
      type: 'value',
      gridIndex: 1,
      splitLine: {
        lineStyle: {
          type: [8, 4],
        },
      },
      axisLabel: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      // 左侧的y轴
      type: 'category',
      gridIndex: 0,
      show: true,
      inverse: true,
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '',
        },
      },
      position: 'right',
      data: [],
    },
    {
      // 右侧的y轴
      type: 'category',
      gridIndex: 1,
      inverse: true,
      show: false,
      data: [],
    },
  ],
  series: [
    {
      // 实际数据 + 左侧数值
      name: '',
      xAxisIndex: 0,
      yAxisIndex: 0,
      type: 'bar',
      zlevel: 2,
      barWidth: 8,
      itemStyle: {
        borderRadius: [4, 0, 0, 4],
        color: () => {
          return '';
        },
      },
      emphasis: {
        disabled: true,
      },
      label: {
        show: false,
      },
      data: [],
    },
    {
      // 左侧底色
      name: 'backgroundLeft',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      barWidth: 8,
      barGap: '-100%',
      itemStyle: {
        color: 'grey',
        borderRadius: [4, 0, 0, 4],
      },
      emphasis: {
        disabled: true,
      },
      label: {
        show: true,
        offset: [0, 0],
        position: 'insideBottomLeft',
        formatter: () => {
          return '';
        },
        overflow: 'truncate',
        rich: {
          nameLeft: {
            fontSize: 14,
            color: '',
            lineHeight: 14,
            padding: [0, 0, 20, 0],
          },
          valueLeft: {
            fontSize: 14,
            color: '',
            lineHeight: 14,
            fontWeight: 'bold',
          },
        },
      },
      data: [],
    },
    {
      // 实际数据 + 右侧数值
      name: '',
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      zlevel: 2,
      barWidth: 8,
      itemStyle: {
        borderRadius: [0, 4, 4, 0],
        color: () => {
          return '';
        },
      },
      emphasis: {
        disabled: true,
      },
      label: {
        show: false,
      },
      data: [],
    },

    {
      // 右侧底色
      name: 'backgroundRight',
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      barWidth: 8,
      barGap: '-100%',
      itemStyle: {
        color: '',
        borderRadius: [0, 4, 4, 0],
      },
      emphasis: {
        disabled: true,
      },
      label: {
        show: true,
        offset: [0, 0],
        position: 'insideBottomRight',
        formatter: () => {
          return '';
        },
        overflow: 'truncate',
        rich: {
          nameRight: {
            fontSize: 14,
            color: '',
            lineHeight: 14,
            padding: [0, 0, 20, 0],
            align: 'right',
          },
          valueRight: {
            fontSize: 14,
            color: '',
            lineHeight: 14,
            align: 'right',
            fontWeight: 'bold',
          },
        },
      },
      data: [],
    },
  ],
};

export { baseOption, doubleBaseOption };
