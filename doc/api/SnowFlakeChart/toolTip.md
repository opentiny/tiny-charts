格式：

```d
render: (data,isLeaf) => {
  data 为节点数据
  isLeaf 判断当前悬浮的是叶子节点还是外环容器
};
```

说明：全网视口下，叶子节点和其外环容器的悬浮提示框。雪花图目前提供了一套默认悬浮提示框：详见 SnowFlakeChart/defaultOption.js。
