## 2.配置项详情

</br>

| 名称   | 说明 |  类型 | 必选 |    默认值 | 
| :----- |  :----- |  :----- |  :-----  |  :-----  |  
| type |  布局类型   | `string` | `true` | `grid` |
| begin | 网格开始位置  |`[number, number]` | `false` | `[0,0]` |
| width |  布局区域宽度 |`number` |`false` |`无` |
| height |  布局区域高度 |`number` |`false` |`无` |
| preventOverlap |  是否防止重叠  | `boolean` |`false` |`false` |
| preventOverlapPadding |  防止叠时节点的间距 padding。preventOverlap 为 true 时生效  | `number` |`false` |`10` |
| rows |  网格的行数，不设置时算法根据节点数量、布局空间、cols（若指定）自动计算 |`number` | `false` |`无` |
| cols |  网格的列数，不设置时算法根据节点数量、布局空间、rows（若指定）自动计算  |`number` | `false` |`无` |
| condense | 为 false 时表示利用所有可用画布空间，为 true 时表示利用最小的画布空间  | `number` |`false` |`无` |
| sortBy |  指定排序的依据（节点属性名）</br>可选值：`degreeMany`数值越高则该节点被放置得越前，`degreeFew`数值越低则该节点被放置得越前，`null`按数据默认节点排序,  |`string` | `false` | `无` |


## 3.配置项体验







