let option = {};
axios.get('/json/house.svg').then(res => {
  let svg = res.data;
  echarts.registerMap('svg', { svg: svg });
  option = {
    theme: 'light',
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      left: '80%',
      bottom: '35%',
      min: 50,
      max: 100,
      orient: 'vertical',
      text: ['', 'Percent(%)'],
      realtime: true,
      calculable: true,
      inRange: {
        color: ['#deebf7', '#9ecae1', '#3182bd']
      }
    },
    series: [
      {
        type: 'map',
        map: 'svg',
        name: 'WiFi覆盖率',
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: '#2E8BDE'
          }
        },
        selectedMode: false,
        data: [
          { name: '主卧', value: 80 },
          { name: '次卧', value: 70 },
          { name: '卧室', value: 90 },
          { name: '阳台1', value: 20 },
          { name: '阳台2', value: 50 },
          { name: '洗手间', value: 80 },
          { name: '厨房', value: 70 },
        ],
      }]
  };
  resolve(option)
});

