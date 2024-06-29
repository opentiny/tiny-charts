格式：

```d
render: ({ nodeContainer, tagContainer }, data, option,scale) => {
  nodeContainer 为节点容器
  tagContainer 为tag容器
  data 为节点数据
  option 为整个图表option
  scale 为雪花图的缩放值
};
```

说明：图表的自定义渲染。雪花图目前提供了一套默认渲染：详见SnowFlakeChart/defaultOption.js。
