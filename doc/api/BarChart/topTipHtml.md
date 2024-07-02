默认值：

```d
topTipHtml 回调函数控制自定义悬浮框：
( params: Array,
  ticket: string,
  callback: (ticket: string, html: string)
) => string | HTMLElement | HTMLElement[]
```

格式：

```d
topTipHtml: (params, ticket, callback) => {
  let htmlString = '';
  htmlString+=params.value
  return htmlString;
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段
与 tipHtml 区别：它只会定位在图像顶部，不随鼠标移动而改变位置;划入 axisPointer 区域不会使其展示，只有划到对应数据才会显型
详细参数解释见： <a target="_blank" href="https://echarts.apache.org/zh/option.html#tooltip.formatter">https://echarts.apache.org/zh/option.html#tooltip.formatter</a>
