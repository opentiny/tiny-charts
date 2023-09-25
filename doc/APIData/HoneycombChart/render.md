格式：

```d
// container: 节点容器
// data: 节点数据
render: (container, data)=>{
    let status = data.status;
    let node = `<div class="hc-node-example ${status}"><div>`;
    container.insertAdjacentHTML('beforeend', node);
}
```

说明：render 方法会在每个节点渲染时调用
