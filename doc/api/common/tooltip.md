默认值：

```d
tooltip 提示框组件：tooltip.show = true 默认显示
```

格式：

```d
tooltip: {
  show: true,
  formatter: (params, ticket, callback) => {
    let htmlString = '';
    params.map((item, index) => {
      if (index === 0) htmlString += item.name + '<br/>';
      htmlString += 
      ` <div>
          <i style="display:inline-block;width:10px;height:10px;background-color:${item.color};"></i>
          <span style="margin-left:5px;color:#ffffff">
              <span style="display:inline-block;width:100px;">${item.seriesName} User</span>
              <span style="font-weight:bold"> ${item.value} %</span>
              <span style="color:gray"> out </span>
              <span style="color:red"> ${100 - item.value} %</span>
          </span>
        </div>`;
    });
    return htmlString;
  }
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段
详细参数解释见： <a target="_blank" href="https://echarts.apache.org/zh/option.html#tooltip.formatter">https://echarts.apache.org/zh/option.html#tooltip.formatter</a>
