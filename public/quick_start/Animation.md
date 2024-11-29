# 动画
动画的过程本质是视觉属性在时间上的变化，带来视觉上的动画效果。
目前提供了独立动画、动画组、仅获取动画进度三种方式，可搭配不同的缓动函数，实现不同场景的动画需求。
- 独立动画：适用于单一动画场景使用。
- 动画组：适用于多个动画场景，可同时操作多个动画的启动、结束、删除等功能。
- 仅获取动画进度：适用于只需要动画进度的场景。
## 使用方式
### 1.独立动画

```javascript
// 引用动效
import {Animation, Easing} from '{{VITE_BASECOPYRIGHTSPAT}}/framework/module/animation';
let domElement = document.getElementById('dom');
let animation = new Animation(domElement, {
    start: {
      left: 0
    },
    end: {
      left: 500
    },
    duration: 1000,
    delay: 100,
    easing: Easing.Linear.In, //可选配置，具体效果请参考动画-缓动效果
    onUpdate: function (params, elapsed, element) {
        // params：当前帧状态(例：{left：1} 
        // elapsed：动画当前进度(0~1)，例如执行到50%时，elapsed的值为0.5
        // element：动画节点
        element.style.left = paramms.left+'px'
    }
})
animation.start(); 
```