// 按需引入高德地图扩展 import 'echarts-extension-amap';
const option = {
  key: '4b5f2cf2cba25200cc6b68c398468899',
  url: 'https://webapi.amap.com/maps',
  v: '1.4.3',
  amap: {
    viewMode: '3D',
    resizeEnable: true,
    center: [118.79322240845, 31.936064370321],
    zoom: 10
  },
  tooltip: {
    show: true
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'amap',
      data: [[118.79, 31.936, 8], [119, 32, 20]],
      encode: {
        value: 2
      }
    }
  ]
}