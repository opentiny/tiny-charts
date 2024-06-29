[
  {
    theme: 'light',
    type: 'circle', // type = 'circle' 表示为圆环图
    // 是否关闭hover态的效果，默认为false
    silent: false,
    title: {
      text: '{a|20}\n{b|总数量}\n{b|(用户数)}',
      textStyle: {
        rich: {
          a: {
            color: '#999',
            fontSize: 30,
          },
          b: {
            fontSize: 16,
            color: '#999',
            padding: [10, 0, 0, 0],
          },
        },
      },
    },
    legend: {
      show: true,
    },
    label: {
      show: true,
      type: 'percent',
      line: false,
    },
    data: [
      { value: 100, name: 'VPC' },
      { value: 90, name: 'IM' },
      { value: 49, name: 'EIP' },
      { value: 14, name: 'SG' },
    ],
    // 自定义设置图表事件
    event: {
      series: {
        click: params => {},
        dblclick: params => {},
      },
    },
  },
  {
    theme: 'light',
    type: 'pie', // type = 'circle' 表示为实心饼图
    legend: {
      show: false,
    },
    selectedMode: 'multiple',
    data: [
      { value: 100, name: 'VPC' },
      { value: 90, name: 'IM' },
      { value: 49, name: 'EIP' },
      { value: 14, name: 'SG' },
    ],
  },
  {
    theme: 'light',
    type: 'multi-circle',
    position: {
      center: ['50%', '45%'],
    },
    title: {
      text: '345',
      subtext: '总数量\n(用户数)',
      top: '30%',
      itemGap: 12,
      textStyle: {
        fontSize: 30,
      },
    },
    legend: {
      show: true,
      offset: 30, // 图例偏移量可以为绝对像素值，也可以为百分比
      position: {
        left: 'center',
        bottom: 50,
      },
    },
    data: [
      {
        name: 'VPC',
        value: 100,
        children: [
          { name: 'VPC_1', value: 20 },
          { name: 'VPC_2', value: 80 },
        ],
      },
      {
        name: 'IM',
        value: 80,
        children: [
          { name: 'IM_1', value: 30 },
          { name: 'IM_2', value: 50 },
        ],
      },
      {
        name: 'EIP',
        value: 50,
        children: [
          { name: 'EIP_1', value: 10 },
          { name: 'EIP_2', value: 40 },
        ],
      },
    ],
  },
];
