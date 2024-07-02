格式：

```javascript
// 参数：container 为节点容器
// 参数：data 为节点数据
render: (container, data)=>{
    let id = data.id;
    let nodeClass = 'fc-node-example-red';
    if(id.indexOf('1') !== -1){
        nodeClass = 'fc-node-example-blue';
    }
    let node = `<div class="fc-node-example ${nodeClass}">${id}<div>`;
    container.insertAdjacentHTML('beforeend', node);
}
```

说明：render 方法会在每个节点渲染时调用，支持原生 dom、React JSX、Vue Slot。当节点需要鼠标悬浮弹窗时，可自行实现。
