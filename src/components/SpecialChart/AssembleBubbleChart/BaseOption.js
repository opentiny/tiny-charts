const seriesData = [];
const colorData = [];
const findColor = [];
const renderItem = '';
const BaseOption = {
  dataset: [
    {
      source: seriesData,
    },
  ],
  // 图例颜色
  color: colorData,
  legend: {
    data: findColor,
    icon: 'circle',
    left: 'center',
    bottom: 0,
    textStyle: {
      color: '#fff',
    },
  },
  hoverLayerThreshold: Infinity,
  series: [
    {
      type: 'custom',
      colorBy: 'data',
      renderItem,
      name: 'selfcustom',
      coordinateSystem: 'none',
      encode: {
        tooltip: 'value',
        itemName: 'id',
      },
    },
  ],
};
export default BaseOption;
