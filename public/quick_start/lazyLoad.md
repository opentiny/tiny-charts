# 懒加载及渲染优化

## 背景

随着互联网的发展，用户页面上的图表数量及图表的需求与日俱增，图表往往意味着较高的性能消耗，这对页面渲染性能产生极大的冲击。<br>
我们需要类似图片懒加载的处理方法来解决上述需求：当图表元素处于视口范围内（或图表元素与是否存在相交区域）才进行渲染；在图表元素尚未滚动至视口范围或图表元素已滚动脱离视口范围就停止渲染。<br>
因此判断图表元素是否在视口范围内的方法尤为重要。js 提供了一种原生的 api：`Intersection Observer API`。它会注册一个回调函数，每当被监视的元素进入或者退出另外一个元素时 (或者 viewport )，或者两个元素的相交部分大小发生变化时，该回调方法会被触发执行。你可以根据执行的结果，判断图表元素是否进行渲染。

## Intersection Observer API 的用法

Intersection Observer API 允许你配置一个回调函数，当以下情况发生时会被调用

<ul>
<li>每当目标 (target) 元素与设备视窗或者其他指定元素发生交集的时候执行。设备视窗或者其他元素我们称它为根元素或根 (root)。</li>
<li>Observer 第一次监听目标元素的时候</li>
</ul>

无论你是使用视口还是其他元素作为根，API 都以相同的方式工作，只要目标元素的可见性发生变化，就会执行你提供的回调函数，以便它与所需的交叉点交叉。

### 创建 Intersection Observer

```js
// 相应参数
let option = {
  root: document.documentElement, // 设置需要判断的根元素(必须为目标元素的父级元素)，不设置默认为html,用于检查目标的可见性。
  rootMargin: '0px', // 根元素的外边距，该属性值是用作根元素和目标元素发生交集时候的计算交集的区域范围。
  threshold: 0, // 设置根元素与目标元素相交比例达到多少时，触发callback回调。默认值为0（意味着只要有相交区域，就触发callback回调）,最大值1.0（意味着相交区域达到100%即目标区域完全在视口内，才触发callback回调）。
};
// 回调调用函数,你可以根据以下回调结果去判断是否渲染图表
let callback = (entries, observer) => {
  entries.forEach((entry, index) => {
    entry.intersectionRatio; // number：根元素与目标元素相交比例
    entry.isIntersecting; // boolean：根元素与目标元素是否存在相交区域
  });
};
// 创建 Intersection Observer
let observer = new IntersectionObserver(callback, option);
// 监听指定图表元素
observer.observe(chartDom);
```

详细参数解释见： https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
