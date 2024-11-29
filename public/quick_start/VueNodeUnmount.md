## 3.卸载节点
用户需要卸载图表中的 Vue 节点组件时，可以使用以下两种方式卸载对应 Vue 组件。若卸载节点后需要重新布局，可以调用 `chartIns.refresh()`方法。
方式一：
```javascript
//id：需要卸载的节点id
chartIns.nodeManager.unmount(id);

//示例：卸载示例中的id为'researchDept'节点
chartIns.nodeManager.unmount('researchDept');
```
方式二：
```javascript
//id：需要卸载的节点id
let deparementNode = chartIns.nodeManager.getNode(id);
deparementNode.unmount();

//示例：卸载示例中的id为'researchDept'节点
let deparementNode = chartIns.nodeManager.getNode('researchDept');
deparementNode.unmount();
```