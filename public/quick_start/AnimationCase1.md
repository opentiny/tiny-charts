### 独立动画配置项

| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| start |  开始位置   | `object` | `无` |
| end | 结束位置  |`object` | `无` |
| duration |  动画时长 |`number` |`null` |
| delay |  动画延时 |`number` |`0` |
| repeat |  动画重复次数 | `number` |`0` |
| easing |  动画缓动效果</br> 可选值：参考<a href='./AnimationEasing' target="_top">缓动函数</a>  | `string` |`Easing.Linear.In` |
| onUpdate |  动画数据更新回调  | `function` |`无` |
| onAfterUpdate |  动画数据更新后回调 |`function` | `无` |
| onRepeat |  动画重复时回调  |`function` | `无` |
| onStart | 动画开启时回调  | `function` |`无` |
| onStop |  动画停止时回调  |`function` | `无` |
| onFinish |  动画完成时回调  | `function` |`无` |
### 独立动画方法

| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| start | 开启动画  | `function` |`无` |
| stop | 结束动画  | `function` |`无` |

<br />

### 2.动画组
```javascript
// 引用动效
import {AnimationGroup} from '{{VITE_BASECOPYRIGHTSPAT}}/framework/module/animation';
let domElement1 = document.getElementById('dom1');
let domElement2 = document.getElementById('dom2');
let animationGroup = new AnimationGroup();
animationGroup.add(domElement1, {
    start: {
      left: 0
    },
    end: {
      left: 500
    },
    duration: 1000,
    onUpdate: function (params, elapsed, element) {
        element.style.left = paramms.left+'px'
    }
})
animationGroup.add(domElement2, {
    start: {
      left: 500
    },
    end: {
      top: 0
    },
    duration: 1000,
    onUpdate: function (params, elapsed, element) {
        element.style.left = paramms.left+'px'
    }
})
animationGroup.start();
```