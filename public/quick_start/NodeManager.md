# 节点管理器

需要对节点进行操作时，可以使用nodeManager进行管理。<br>
## 1.获取节点数据
```javascript
// chartIns：图表实例
let nodeManager = chartIns.nodeManager;
```
## 2.更新节点数据
```javascript
let newData = {
  width：100,
  height：100,
  ...data //节点的业务数据
};
nodeManager.updata(id, newData);
```

## 3.卸载节点
```javascript
nodeManager.unmount(id);
```

## 4.节点添加事件
用户需要图表中的节点添加事件时，可使用以下两种方式给节点添加事件：
方式一：直接给节点绑定事件
```javascript
//id：需要添加事件的节点id
//eventName：事件方法名
//callbak：回调方法
let deparementNode = chartIns.nodeManager.getNode(id);
deparementNode.addEventListener(eventName, callback);

//示例：对id为'designDept'节点添加点击事件
let deparementNode = chartIns.nodeManager.getNode('designDept');
deparementNode.addEventListener('click',(event, data)=>{
  // data: 节点数据
  // event: 节点信息
});
```
方式二：通过给nodeManager绑定事件
```javascript
//id：需要添加事件的节点id
//eventName：事件方法名
//callback：回调方法
chartIns.nodeManager.addEventListener(id, eventName, callback);

//示例：给id为'designDept'节点的节点添加点击事件
chartIns.nodeManager.updata('designDept', 'click', (event, data)=>{
  // data: 节点数据
  // event: 节点信息
});
```

## 5.数据传递-由外到内
由外部将新数据传入节点中，可使用以下两种方式：
方式一：调用图表refresh方法更新全局数据
```javascript
let newChartOption = {...};
chartIns.refresh(newChartOption);
```
方式二：调用节点的updata方法进行更新数据
```javascript
chartIns.nodeManager.updata(id, newData);
```
## 6.数据传递-由内到外
节点中的数据需要往图表或图表外部传递时，可使用以下两种方式：
方式一：给节点添加事件，触发时节点事件回调向外部传递数据`参考上方第4点`

方式二：使用CustomEvent自定义事件
```javascript
// 节点组件中
var myEvent = new CustomEvent('myCustomEvent', {
    detail: data, // 需要传递的数据
    bubbles: true,
    cancelable: true
});
document.dispatchEvent(myEvent);

// 节点组件外
document.addEventListener('myCustomEvent',(e)=>{
  // e.detail: 传递出来的数据
});
```

## 7.获取节点
```javascript
nodeManager.getNode(id);
```

## 8.获取节点数据
```javascript
nodeManager.getNodeData(id);
```

## 9.获取节点Dom
```javascript
nodeManager.getDom(id);
```

## 10.判断节点是否存在
```javascript
nodeManager.isExist(id);
```