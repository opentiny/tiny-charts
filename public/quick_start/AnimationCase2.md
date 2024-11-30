### 动画组配置项

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

### 动画组方法

| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| add | 添加动画项  | `function` |`无` |
| start | 开启动画  | `function` |`无` |
| stop | 结束动画  | `function` |`无` |
| remove | 删除动画项  | `function` |`无` |
| removeAll | 删除所有动画项  | `function` |`无` |
| onFinish | 动画组完成时回调  | `function` |`无` |
| onAfterUpdate | 动画组更新后回调  | `function` |`无` |

<br/>

### 3. 仅获取动画进度值
```javascript
// 引用动效
import {Animation, Easing} from '{{VITE_BASECOPYRIGHTSPAT}}/framework/module/animation';
let animation = new Animation(null, {
    start: null,
    end: null,
    duration: 1000,
    easing: Easing.Linear.In,
    onUpdate: function (params, elapsed, element) {
      console.log(elapsed);
    }
})
animation.start();
```
### 配置项

| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| start |  开始位置   | `object` | `null` |
| end | 结束位置  |`object` | `null` |
| duration |  动画时长 |`number` |`null` |
| delay |  动画延时 |`number` |`0` |
| repeat |  动画重复次数 | `number` |`0` |
| easing |  动画缓动效果 </br> 可选值：参考<a href='./AnimationEasing' target="_top">缓动函数</a> | `string` |`Easing.Linear.In` |
| onUpdate |  动画数据更新回调  | `function` |`无` |
| onAfterUpdate |  动画数据更新后回调 |`function` | `无` |
| onRepeat |  动画重复时回调  |`function` | `无` |
| onStart | 动画开启时回调  | `function` |`无` |
| onStop |  动画停止时回调  |`function` | `无` |
| onFinish |  动画完成时回调  | `function` |`无` |
### 动画方法

| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| start | 开启动画  | `function` |`无` |
| stop | 结束动画  | `function` |`无` |
