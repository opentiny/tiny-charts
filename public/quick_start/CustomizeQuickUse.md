# 自定义布局
自定义布局根据用户传入的节点位置信息，将节点显示在画布上。
用户可使用两种自定义布局方式：
- `data.nodes`传入坐标控制
- layout传入`algorithm`函数控制

注意：algorithm函数的优先级高于布局的优先级，布局的优先级高于传入坐标控制的优先级
## 1.data.nodes传入坐标控制

</br>

```javascript
// html片段
<div id="chartContainer"></div>
```

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
	// 图表数据
	data: {
		nodes: [{
			id: '0',
			name: 'main',
			ip: '101.0.1.128',
			x:700,
			y:50
		},{
			id: '1',
			name: 'portal',
			ip: '101.0.1.128'
			x:600,
			y:150
		},{
			id: '2',
			name: 'ecs',
			ip: '101.0.1.128',
			x:600,
			y:150
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

节点CustomizeNode代码如下：


```javascript
<template>
	<tiny-tooltip pre :content="tipContent" placement="bottom" effect="light">
		<div class="grid-card" :style="style">
			<img v-if="iconPath" :src="iconPath" />
			<div class="text" :style="`bottom:${data.height / 2 }px`"> {{ data.text }}</div>
		</div>
	</tiny-tooltip>
</template>
import { Tooltip } from '@opentiny/vue'
export default {
	components: {
		TinyTooltip:  Tooltip
	},
	props: {
		data: Object,
	},
	data() {
		let styleObject = {};
		let data = this.data;
		let iconPath;
		let tipContent = [];
		let icons = {
			main: './image/charts/layout/servers_main.svg',
			portal: './image/charts/layout/servers_portal.svg',
			bms: './image/charts/layout/servers_bms.svg',
			ecs: './image/charts/layout/servers_ecs.svg',
			hecs: './image/charts/layout/servers_hecs.svg'
		}
		if(data.width) {
			styleObject.width = data.width + 'px';
		}
		if(data.height) {
			styleObject.height = data.height + 'px';
		}
		if(data.fill) {
			styleObject.background = data.fill;
		}
		iconPath = icons[data.name];
		if(data.name){
			tipContent.push(`服务器名称：${data.name} \n`)
		}
		if(data.ip){
			tipContent.push(`IP地址： ${data.ip}`)
		}
		if(!tipContent.length) {
			tipContent = null;
		}
		return {
      style: styleObject,
			iconPath: iconPath,
			tipContent: tipContent
    }
	},
}
```




