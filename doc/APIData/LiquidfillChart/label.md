格式示例：

```d
 label: {
        formatter: '{a}\n{b}\n购房比: {c}',
        fontSize: 40,
        color: 'green',
    },
```


说明：通过配置`label`属性，来修改图表的文本<br/>
`formatter`：文本内容格式器，支持字符串模板和回调函数两种形式。详细参数可参照漏斗图的formatter：https://echarts.apache.org/zh/option.html#series-funnel.label.formatter。<br/>
`font`：文本的字体大小。<br/>
`color`：文本的颜色。<br/>
其他更多属性配置可见水球图的git网址：<a href='https://github.com/ecomfe/echarts-liquidfill' target="_blank">https://github.com/ecomfe/echarts-liquidfill</a>。
