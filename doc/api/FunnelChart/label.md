
默认值：

```d
 label: {
        show: true,
        position: 'outside',
        formatter: `{b|{b}:}{c|{c}%}`,
        rich: {
            b: {
                color: '#191919',
                padding: [2, 4, 0, 0]
            },
            c: {
                color: '#000000',
                fontWeight: 'bold',
                padding: [2, 0, 0, 0]
            }
        }
    }
```

说明：通过配置`label`属性，来修改图表的文本。<br/>
`show`：选择是否展现图表文本。<br/>
`position`：图表文本的位置。可选值：`'left/right/top/bottom/inside/insideRight/insideLeft/leftTop/leftBottom/rightTop/rightBottom'`。<br/>
`formatter`：文本内容格式器，支持字符串模板和回调函数两种形式，详细参数解释见：
<a href='https://echarts.apache.org/zh/option.html#series-funnel.label.formatter' target="_blank">https://echarts.apache.org/zh/option.html#series-funnel.label.formatter</a>。<br/>
`rich`：自定义富文本样式，可以配置formatter文本格式，详细参数解释见：
<a href='https://echarts.apache.org/zh/option.html#series-funnel.label.rich' target="_blank">https://echarts.apache.org/zh/option.html#series-funnel.label.rich</a>。
