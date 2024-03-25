格式示例：

```d
  onCircleHover: (alarmTooltip, alarmData) => {
    alarmTooltip.innerHTML = `<div class='timeline_tipDom'><div class='tip'><div>
    ${getTime(alarmData.time)}</div><div><span class='point ${alarmData.type}'></span>${alarmData.content}</div></div></div>`
  },
```

说明：时间轴圆点悬浮事件，调用onCircleHover回调。