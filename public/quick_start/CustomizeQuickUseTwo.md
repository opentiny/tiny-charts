
</br>

## 2.layout传入algorithm函数控制
algorithm函数有两个参数信息，第一个参数为nodes数据，第二个参数为容器位置宽高信息

注意：algorithm函数的布局位置优先级最高


</br>

```javascript
// 引用图表库
import { CustomizeChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用节点组件
import CustomizeNode from './CustomizeNode.vue';
const option = {
	node: {
		width: 50,
		height: 50,
	},
	layout: {
		algorithm: function(nodes, containerSize){
			nodes.forEach((item,index) => {
				item.x = containerSize.width / 2 + 150 * index;
        item.y = containerSize.height / 2 + 20 * index;
			})
		}
	}
	// 图表数据
	data: {
		nodes: [{
			id: '0',
			name: 'main',
			ip: '101.0.1.128',
		},{
			id: '1',
			name: 'portal',
			ip: '101.0.1.128'
		},{
			id: '2',
			name: 'ecs',
			ip: '101.0.1.128',
		}],
		edges: [{
      start: '0',
      end: '1',
    },{
      start: '1',
      end: '2',
    },{
      start: '2',
      end: '0',
    }],
	}
};
let chartContainerDom = document.getElementById('chartContainer');
let chartIns = new CustomizeChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();

```
