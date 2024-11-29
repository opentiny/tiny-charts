# 网格布局
网格布局根据指定的方式，将节点排列在网格上。

## 1.使用方式

`通过layout的type属性控制布局类型`，下面是网格布局的简单使用：

</br>

```javascript
// html片段
<div id="chartContainer"></div>
```

```javascript
// 引用图表库
import { GridChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用节点组件
import GridNode from './GridNode.vue';
const option = {
	layout: {
		type: 'grid',
	},
	node: {
		width: 50,
		height: 50,
	},
	// 图表数据
	data: {
		nodes: [{
			id: '0',
			text: 'gridbox-server-ceil-1',
			name: 'main',
			ip: '101.0.1.128'
		},{
			id: '1',
			text: 'gridbox-server-ceil-2',
			name: 'portal',
			ip: '101.0.1.128'
		},{
			id: '2',
			text: 'gridbox-server-ceil-3',
			name: 'ecs',
			ip: '101.0.1.128'
		},{
			id: '3',
			text: 'gridbox-server-ceil-4',
			name: 'ecs',
			ip: '101.0.1.128'
		},{
			id: '4',
			text: 'gridbox-server-ceil-5',
			name: 'hecs',
			ip: '101.0.1.128'
		}],
		edges: [{
      start: '0',
      end: '1',
		},{
      start: '1',
      end: '2',
		},{
      start: '2',
      end: '3',
	  },{
			start: '3',
			end: '4',
		}],
	}
};
let chartContainerDom = document.getElementById('chartContainer');
let chartIns = new GridChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();

```

节点GridNode代码如下：


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






