const option = {
  theme: 'hdesign-light',
  color: ['#2070F3'],
  position: {
    center: ['50%', '50%'],
    radius: '46%'
  },
  markLine: {
    value: 80,
    color: '#09AA71'
  },
  max: 100,
  data: [
    {
      name: '问题IP',
      value: 65,
    }
  ],
  itemStyle: {
    borderRadius: '50%'
  },
  legend: {
    show: false,
  },
  title: {
    text: '{value|65}{unit|%}',
    subtext: '问题IP',
    itemGap: -18,
    textStyle: {
      textSize: 30,
      fontWeight: 'bold',
      rich: {
        value: {
          padding: [-20, 0, 0, 0],
          fontSize: 60,
          color: '#191919',
        },
        unit: {
          fontSize: 16,
          color: '#191919',
          fontWeight: 'bolder',
          padding: [0, 0, 0, 6]
        },
      }
    },
    subtextStyle: {
      textSize: 20,
      color: '#777777',
    }
  }
};