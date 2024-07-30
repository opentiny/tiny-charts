# 生命周期

## 图表数据刷新
当您要刷新已经渲染完毕的图表时，如果您想刷新配置项和数据，可以使用：
```javascript
// 新的配置项，为对象格式
let newChartOption = {...};
chartIns.refresh(newChartOption);
```
如果您想仅仅刷新数据，可以使用：
```javascript
// 新的数据，为数组格式
let newData = [...];
chartIns.refreshData(newData);
```

## 图表渲染完毕的回调
```javascript
chartIns.onRenderReady(callback);
```

## 图表适配屏幕宽度
{{VITE_BASECOPYRIGHTS}} 默认开启支持自动适应屏幕宽度，当您希望手动调用时，可以使用：
```javascript
chartIns.setResize();
```

## 获取ECharts原生实例
当您需要操作ECharts的原生实例时，可以使用如下方法获取：
```javascript
chartIns.getEchartsInstance();
```

## 图表卸载
```javascript
chartIns.uninstall();
```