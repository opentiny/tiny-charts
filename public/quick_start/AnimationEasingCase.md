## 1.使用方式
使用缓动函数时，需要引入Easing
```javascript
// 引用入动效, 引用Easing
import {Animation, Easing} from '{{VITE_BASECOPYRIGHTSPAT}}/framework/module/animation';
let animation = new Animation(domElement, {
    start: {
      left: 0
    },
    end: {
      left: 1000
    },
    duration: 1000,
    easing: Easing.Linear.In, // 缓动配置
    onUpdate: function (params, elapsed, element) {
        element.style.left = paramms.left+'px';
        element.style.top = paramms.top+'px';
    }
})
animation.start();
```