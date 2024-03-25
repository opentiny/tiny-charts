格式：

```d
tooltip: (container, data) => {
  let template = `<div class="mc-scales-item-hover-title">文本</div>`;
  container.insertAdjacentHTML('beforeend', template);
};
```

说明：通过回调函数的参数，自行制作一个 HTML 片段，container为节点，data为节点数据。
