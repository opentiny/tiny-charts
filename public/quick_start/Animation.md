# 动画

在实际场景中，带有动画的图表会带来更好的视觉效果和交互体验<br>

目前 {{VITE_BASECOPYRIGHTS}} HUICharts 提供了相关动画配置供使用者灵活配置,实现丰富且多样的图表动画效果。满足不同场景的动画需求。

## 配置方式

可以在`chartOption`中传入动画的具体配置。

```javascript
// 引用图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';

// 创建图表实例
const chartIns = new HuiCharts();

// 初始化图表容器
const chartContainerDom = ...;
chartIns.init(chartContainerDom);

// 动画的配置项
const animationConfig={
    animation:true,
    animationDuration:500,
    ...
}

// 填入图表配置项
const chartOption = {
    // 填入动画配置项
    ...animationConfig,
    ...
};
// 指定使用图表类型：LineChart、AreaChart、BarChart、PieChart、GaugeChart、RadarChart、ProcessChart、BubbleChart等
// 图表类型的英文名称可以在文档左侧菜单栏看到
const chartType = 'LineChart';
chartIns.setSimpleOption(chartType, chartOption);

// 开始渲染
chartIns.render();
```

## 配置项

| 名称   | 说明 |     默认值 | 
| :----- |  :----- |  :-----  |  
| animation |  是否开启动画   | `true` |
| animationThreshold | 是否关闭动画的阈值  | `2000` |
| animationDuration |  进场动画的时长 |`750` |
| animationEasing |  进场动画的时长 | `'quinticInOut'` |
| animationDelay |  进场动画的时长  | `0` |
| animationDurationUpdate |  数据更新动画的时长  | `300` |
| animationEasingUpdate |  数据更新动画的缓动效果 | `'quinticInOut'` |
| animationDelayUpdate |  数据更新动画的延迟  | `0` |
| stateAnimation.duration | 状态切换的动画时长  | `300` |
| stateAnimation.easing |  状态切换的动画缓动  | `'quinticInOut'` |
