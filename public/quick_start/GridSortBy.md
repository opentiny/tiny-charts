
### sortBy

指定排序的依据（节点属性名），有degreeMany、degreeFew、自定义。degreeMany数值（edges里面的节点start和end的累加值）越高则该节点被放置得越前，degreeFew数值越低则该节点被放置得越前，若不设置，则按数据默认节点排序。下面的例子以自定义按cluser值从大到小排序。

```javascript
layout: {
	type: 'grid',
  sortBy: 'cluser',
},
data: {
	nodes: [{
		id: '0',
		text: 'gridbox-server-ceil-1',
		name: 'main',
		ip: '101.0.1.128',
		cluser: 1
	},
	{
		id: '1',
		text: 'gridbox-server-ceil-2',
		name: 'portal',
		ip: '101.0.1.128',
		cluser: 3
	},
	{
		id: '2',
		text: 'gridbox-server-ceil-3',
		name: 'ecs',
		ip: '101.0.1.128',
		cluser: 2
	},
	{
		id: '3',
		text: 'gridbox-server-ceil-4',
		name: 'ecs',
		ip: '101.0.1.128',
		cluser: 5
	},
	{
		id: '4',
		text: 'gridbox-server-ceil-5',
		name: 'hecs',
		ip: '101.0.1.128',
		cluser: 4
  }]
}
```