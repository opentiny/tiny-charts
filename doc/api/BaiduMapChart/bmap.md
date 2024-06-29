格式示例：

```d
bmap: {
        center: [118.775859, 31.985021],
        zoom: 17,
        roam: true,
        mapStyle: {}
    }
```

说明：通过配置`bmap`属性，修改百度地图的初始配置属性。<br/>
`center`：百度地图中心经纬度。<br/>
`zoom`：百度地图缩放级别。<br/>
`roam`：是否开启拖拽缩放，可选值为：`'scale'`, `'move'`, `'true'`，默认true关闭。<br/>
`mapStyle`：百度地图的自定义样式。<br/>
其他更多属性配置可见Echarts百度地图扩展的git网址：<a href='https://github.com/apache/echarts/tree/release/extension-src/bmap' target="_blank">https://github.com/apache/echarts/tree/release/extension-src/bmap</a>。