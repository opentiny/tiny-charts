格式：

```d
说明：控制单组数据雷达图的顶部显示数据的单位
radar: {
// 开启标签响应鼠标事件
triggerEvent:true,
axisName: {
formatter: (indicatorName,indicator) => {
return `${indicatorName}系列`
},
color:'#191919'
}
},
```

详细请看https://echarts.apache.org/zh/option.html#radar
