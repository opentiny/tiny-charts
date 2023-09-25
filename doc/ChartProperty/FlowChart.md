<title>

## 配置项说明

</title>

<api>
<name>vGap</name>
<introduce>节点之间纵向最小距离</introduce>
<type>Number</type>
<required>非必填</required>
<defaults>有默认值</defaults>

默认值：`30`

说明：节点之间纵向最小距离。`vGap`值越大，整体图表高度越高。

</api>



<api>
<name>data</name>
<introduce>图表数据</introduce>
<type>Object</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
data: {
    id: 'a1',
    children: [
        {
            id: 'b1',
            children: []
        },{
            id: 'b2',
            children: []
        }
    ]
}
```

说明：流程图的数据中, 每个节点必须有 id，子节点放在 children 中，可以根据自身场景添加其他数据，这些数据会在render中获取到

</api>

<api>
<name>render</name>
<introduce>每个节点的DOM</introduce>
<type>Function</type>
<required>必填</required>
<defaults>无默认值</defaults>

格式：

```d
// container: 节点容器
// data: 节点数据
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

说明：render方法会在每个节点渲染时调用，支持原生dom、React JSX、Vue Slot。
</api>