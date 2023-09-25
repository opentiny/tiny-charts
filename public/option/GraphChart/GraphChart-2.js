let axisData = ['周一', '周二', '周三', '很长很长的周四', '周五', '周六', '周日'];
let data = axisData.map((item, i) => {
  return Math.round(Math.random() * 1000 * (i + 1));
});

let links = data.map((item, i) => {
  return {
    source: i,
    target: i + 1
  };
});
links.pop();

const option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: axisData
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    right: 30,
    left: 50,
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      color: '#42A5F5',
      coordinateSystem: 'cartesian2d',
      symbolSize: 40,
      label: {
        normal: {
          show: true
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data,
      links,
      lineStyle: {
        normal: {
          color: '#2f4554'
        }
      }
    }
  ]
};