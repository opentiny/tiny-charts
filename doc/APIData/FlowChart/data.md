格式：

```javascript
data: {
    // 每个节点数据必须有 id 属性，用来标记节点唯一性
    // 注意：当在跨层级场景中，必须给节点配置 level 层级属性
    nodes: [
        { id: "1" , ...其他业务数据},
        { id: "2" , ...其他业务数据}, 
        { id: "3" , ...其他业务数据}
    ],
    // 每条边的数据用来表示节点之间的关系，source 表示连线来源节点的id，target 表示连线目标节点的 id
    edges: [
        { source: "1", target: "2", lineStyle: { dash: true } }, 
        { source: "2", target: "3" }
    ]
}
```

说明：流程图的数据中, 必须有 nodes 和 edges 属性。可以根据自身业务在nodes添加其他数据，这些数据会在 render 中获取到。
