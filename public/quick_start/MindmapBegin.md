## 2.配置项详情
</br>

| 名称   | 说明 |  类型 | 必选 |    默认值 | 
| :----- |  :----- |  :----- |  :-----  |  :-----  |  
| type |  布局类型   | `string` | `true` | `mindmap` |
| direction | 布局方向 <br> 可选值：`LR `由左到右布局、`RL`由右到左布局、`TB`由上到下布局、`BT`由下到上布局、`H`左右布局、`V`上下布局  |`string` | `true` | `LR` |
| oneSide |  direction为 H/V 时根节点左侧或上侧的配置点 |`array` |`false` |`无` |
| hGap |  节点横向最小距离 |`number` | `true` |`30` |
| vGap |  节点纵向最小距离  |`number` | `true` |`30` |

## 3.配置项体验

```javascript
layout: {
	direction: 'LR', // 布局方向
	oneSide: ['designDept'], // direction为 H/V 时根节点左侧或上侧的配置点
	hGap: 30, // 节点横向最小距离
	vGap: 30, // 节点纵向最小距离
}
```