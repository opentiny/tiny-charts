# 懒加载

当页面的图表数量较多时，通常会使用懒加载的方法渲染图表，提高页面性能。<br>

<br>

通用的懒加载方式为：当图表元素处于视口范围内才进行渲染，当图表元素尚未滚动至视口范围或图表元素已滚动脱离视口范围就停止渲染。<br>

<br>

本文介绍一种 JS 原生的 API：`Intersection Observer API`。它和 {{VITE_BASECOPYRIGHTS}} 的接口联合起来可以快速实现懒加载。<br>

## Intersection Observer API 简介

Intersection Observer API 允许你配置一个回调函数，当以下情况触发时被调用：

<ul>
<li>每当目标 (target) 元素与设备视窗或者其他指定元素的相交部分大小发生变化时候执行。设备视窗或者其他元素我们称它为根元素或根 (root)。</li>
<li>Observer 第一次监听目标元素的时候</li>
</ul>

无论你是使用视口还是其他元素作为根(root)，API 都以相同的方式工作，只要目标元素的可见性发生变化，就会执行你提供的回调函数。

## Intersection Observer 与 {{VITE_BASECOPYRIGHTS}} 结合使用

```javascript
// 初始化图表实例
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 初始化图表
const chartIns = new HuiCharts();
const chartDom = ...;
const chartOpt = ...;
chartIns.init(chartDom);
chartIns.setSimpleOption('HillChart', chartOpt);

// 创建 Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // entry.isIntersecting 为 true 时表示 root 和 target 有相交
      if (entry.isIntersecting) {
        // 渲染图表
        chartIns.render();
      }
    });
  }, {
    root: document.documentElement, // root 为 文档元素
    rootMargin: '0px', 
    threshold: 0 // 相交触发比例
  }
);

// 监听图表容器DOM
observer.observe(chartDom);

// 页面卸载取消对指定元素的监听
observe.disconnect();
```

详细参数解释见： https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API

## 浏览器兼容性

<a href='https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7' target="_blank">点击此处查看浏览器兼容性</a>
