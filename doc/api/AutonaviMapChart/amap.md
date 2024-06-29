格式示例：

```d
amap: {
    viewMode: '3D',
    resizeEnable: true,
    center: [118.79322240845, 31.936064370321],
    zoom: 10
  },
```

说明：通过配置`amap`属性，修改高德地图的初始配置属性。<br/>
`viewMode`：高德地图的3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验。<br/>
`resizeEnable`：是否开启高德地图resize。<br/>
`center`：高德地图中心经纬度。<br/>
`zoom`：高德地图缩放级别。<br/>
其他更多属性配置可见Echarts高德地图扩展的git网址：<a href='https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md' target="_blank">https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md</a>。