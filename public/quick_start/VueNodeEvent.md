<br />

## 4.节点添加事件
用户需要图表中的节点添加事件时，可使用以下两种方式给节点添加事件。
方式一：
```javascript
//id：需要添加事件的节点id
//eventName：事件方法名
//callbak：回调方法
let deparementNode = chartIns.nodeManager.getNode(id);
deparementNode.addEventListener(eventName, callback);

//示例：对示例中id为'designDept'节点添加点击事件
let deparementNode = chartIns.nodeManager.getNode('designDept');
deparementNode.addEventListener('click',(event, data)=>{
  // data: 节点数据
  // event: 节点信息
});
```
方式二：
```javascript
//id：需要添加事件的节点id
//eventName：事件方法名
//callbak：回调方法
let deparementNode = chartIns.nodeManager.addEventListener(callbak);

chartIns.nodeManager.addEventListener(id, eventName, callback);

//示例：更改示例中id为'designDept'节点的节点添加点击事件
chartIns.nodeManager.updata('designDept', 'click',(event, data)=>{
  // data: 节点数据
  // event: 节点信息
});
```