## 2.配置项详情

</br>

| 名称   | 说明 |  类型 | 必选 |    默认值 | 
| :----- |  :----- |  :----- |  :-----  |  :-----  |  
| type |  布局类型   | `string` | `true` | `circle` |
| center | 圆的中心位置  |`[number, number]` | `false` | `[0,0]` |
| radius |  圆的半径，若设置了 radius，则 startRadius 与 endRadius 不生效  | `number` |`false` |`无` |
| startRadius |  螺旋状布局的起始半径  | `number` |`false` |`无` |
| endRadius |  螺旋状布局的结束半径  | `number` |`false` |`无` |
| clockwise |  是否按照顺时针排列 |`boolean` |`false` |`true` |
| divisions |  节点在环上的分段数（几个段将均匀分布）  | `number` |`false` |`1` |
| startAngle |  开始节点的弧度  | `number` |`false` |`0` |
| endAngle |  结束节点的弧度 |`number` | `false` |`2 * Math.PI` |
| ordering |  节点在环上排序的依据</br>可选值： `null` 代表直接使用数据中的顺序、 `topology`按照拓扑排序、`degree`按照度数大小排序 |`string` | `false` | `null` | 


## 3.配置项体验







