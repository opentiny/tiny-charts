此属性配置和 eCharts 基本一致，详细配置请参考：<a target="_blank" href="https://echarts.apache.org/zh/option.html#series-sankey">https://echarts.apache.org/zh/option.html#series-sankey</a>

此外，SankeyChart 内置了一部分默认如何和自定义属性，如下：

```d
label: { // 节点的label默认是由其name和value组成
  distance:5,
  textArrange: 'horizontal' || 'vertical', // name和value的排列方向(只在全局label属性设置生效)
  overHide: false, // 当节点label的高度超过节点高度，是否隐藏其label(只在全局label属性设置生效)
  formatter: (params) => { // 节点的label默认值，用户可自定义（自定义则textArrange、rich需要用户自己实现）
    if(textArrange==='horizontal'){
      return `{name|${params.name}} {value|${params.data.empty ? 0 : params.data.value}}`; // 横向排列的label默认展示
    }else if(textArrange==='vertical'){
      return `{name|${params.name}}\n{value|${params.data.empty ? 0 : params.data.value}}`; // 纵向排列的label默认展示
    }
  },
  rich: {
    name: { // 配置name字段的样式
      fontSize: 12,
      color:'#777777'
    },
    value: { // 配置value字段的样式
      fontSize: 12,
      color:'#191919',
      align:'center'
    }
  }
};
```

注意：在 data.nodes 中对每个节点设置 label 属性的权重>全局的 label 属性的权重
