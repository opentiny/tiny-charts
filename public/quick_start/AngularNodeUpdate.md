## 2.更新节点
用户需要更新图表中的 Angular 节点组件时，可使用以下两种方式更新对应 Angular 组件。
方式一：
```javascript
//id：需要更新的节点id
//newData：新数据
chartIns.nodeManager.updata(id,newData);

//示例：更改示例中id为'designDept'节点的peopleNum属性
chartIns.nodeManager.updata('designDept', {
  peopleNum: 100
});
```
方式二：
```javascript
//id：需要更新的节点id
//newData：新数据
let deparementNode = chartIns.nodeManager.getNode(id);
deparementNode.update(newData);

//示例：更改示例中id为'designDept'节点的peopleNum属性
let deparementNode = chartIns.nodeManager.getNode('designDept');
deparementNode.update({
  peopleNum: 100
});
```