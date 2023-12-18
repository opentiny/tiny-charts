# 响应式（类媒体查询效果）

在实际场景中，图表的尺寸会动态变化，在不同尺寸下，图表展示形式可能不一样。<br>

当图表尺寸过小时，聚焦核心图元，隐藏非必要的属性，如图例、坐标轴等。当图表尺寸足够时，才需要将所有的属性展示出来。<br>

目前 HUI-Charts 提供了一套响应式图表配置方法，让图表在不同尺寸之间实现最佳视觉效果。

## 使用方式

您可以调用`chartInstance.mediaScreen(dom, screenOption)`方法实现自定义响应式图表，不同分辨率下切换图表形态。

```javascript
// 监听尺寸变化的DOM元素，该DOM可以为document、图表容器、甚至是页面中任意元素
const screenDOM = document.documentElement;
// 响应式配置，会根据宽度匹配 screenDOM 的尺寸，应用相应的 option
const screenOption = [{
  maxWidth:1920,
  minWidth:1280,
  option:{
    legend:{...},
    markLine:{...}
  }
},{
  maxWidth:1279,
  option:{
    markLine:{...}
  }
}];
// 开启响应式布局（类媒体查询效果）, mediaScreen需要在 init  和 setSimpleOption 之间调用
chartInstance.mediaScreen(screenDOM, screenOption);
```
