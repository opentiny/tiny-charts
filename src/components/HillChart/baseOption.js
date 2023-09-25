const baseOption = {
  xAxis: {},
  yAxis: {},
  title: {},
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
      // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      symbol:
        'path://M182.486185,115.849707 L137.966122,115.850379 C149.51482,98.3379479 157.744413,74.0044901 160.078145,45.9496406 C162.570754,73.8914827 170.909366,98.2800834 182.486185,115.849707 Z',
      markLine: {
        'symbol': 'none',
        'silent': true,
        'label': {
          'show': false
        },
        'lineStyle': {
          'width': 1,
          'color': '#F43146'
        },
        'emphasis': {
          'label': {
            'show': false
          },
          'lineStyle': {
            'width': 1
          }
        },
        data: []
      }
    },
  ],
};
export default baseOption;
