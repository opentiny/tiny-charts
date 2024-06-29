const option = {
  theme: 'light',
  color: ['#F43146'],
  position: {
    center: ['45%', '50%'],
  },
  data: [
    {
      name: '问题IP',
      value: 10,
    },
  ],
  legend: {
    show: true,
    position: {
      right: '20%',
      top: 'center'
    },
    orient: 'vertical',
    formatter: (name) => {
      let data = [
        { name: '问题IP', value: 10 },
      ];
      const item = data.filter((item) => item.name === name)[0];
      return '{title|' + name + '}{value|' + item.value + '%}';
    },
    textStyle: {
      rich: {
        title: {
          color: '#808080',
          fontSize: 12,
          padding: [0, 8, 0, 0],
        },
        value: {
          fontSize: 14,
          color: '#191919',
        },
      },
    },
  },
};