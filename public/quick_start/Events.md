# 事件监听

{{VITE_BASECOPYRIGHTS}} 的基础图表提供了 2 种事件监听处理方式，包括：
- 鼠标事件触发
- 代码事件触发

## 鼠标事件触发
鼠标事件触发是在ECharts的<a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank">echartsInstance. on</a>基础上的再封装，{{VITE_BASECOPYRIGHTS}} 提供 4 种调用方式：

### 1.{{VITE_BASECOPYRIGHTS}} 实例的 on / off 方法

{{VITE_BASECOPYRIGHTS}} 的 on / off 方法实际上仅是对ECharts 的 on / off 方法做了透传，具体参数说明可以<a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank">点击这里跳转查看</a>

</br>

```jsx
// 开启鼠标事件监听
chartInstance.on(eventName, handler);
//或
chartInstance.on(eventName, query, handler);

// 关闭鼠标事件监听
chartInstance.off(eventName);
//或
chartInstance.off(eventName, handler);
```

### 2.{{VITE_BASECOPYRIGHTS}} 实例的 bindEvents / unbindEvents 方法

bindEvents / unbindEvents 与 on / off 方法的区别在于可以进行批量事件的绑定和解绑

</br>

```jsx
// 开启鼠标事件监听
chartInstance.bindEvents([
    {
        eventName: 'click',
        handler: ()=>{}
    },{
        eventName: 'mouseover',
        query: {seriesName: 'uuu'},
        handler: ()=>{}
    }
]);

// 关闭鼠标事件监听
chartInstance.unbindEvents([
    {
        eventName: 'click',
        handler: ()=>{}
    },{
        eventName: 'mouseover',
        handler: ()=>{}
    }
]);
```

### 3.在配置项option中写入event事件
此方法仅适用于存在query的事件监听
```jsx
// 填入图表配置项
let chartOption = {
    ...
    event:{
        'series':{
            'click': (e)=>{ console.log(e) },
            'mouseover': (e)=>{ console.log(e) },
        },
        'series.line':{
            'click': (e)=>{ console.log(e) },
            'mousemove': (e)=>{ console.log(e) },
        },
    }
};
chartInstance.setSimpleOption('LineChart', chartOption);
```

### 4.获取ECharts原生实例进行事件监听
```jsx
//拿到ECharts实例
chartInstance.getEchartsInstance().on('legendselectchanged', function (params) {
    console.log(params);
});
```
<br/>
<br/>

## 代码事件触发
场景一：当您想要点击页面其他地方的按钮、列表时，折线图某条线做出高亮的响应；<br/>
场景二：当您的页面数据加载完毕后，柱状图的dataZoom需要重新定位start与end；<br/>
类似上述的场景，就需要使用代码事件触发了。{{VITE_BASECOPYRIGHTS}} 建议直接获取到ECharts原生实例进行事件派发：

<br/>

示例一：
```jsx
//通过代码将 dataZoom 的起始和结束定位在 20 和 30
chartInstance.getEchartsInstance().dispatchAction({
    type: 'dataZoom',
    start: 20,
    end: 30
});
```

示例二：
```jsx
//通过代码将 'Abroad' 类别的数据高亮
chartInstance.getEchartsInstance().dispatchAction({
    type: 'highlight',
    seriesName: 'Abroad',
});
```