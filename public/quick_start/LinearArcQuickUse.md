# 线形弧线布局
线形弧线布局根据指定的方式，将节点排列在一条直线上，并用弧线相连。

## 1.使用方式

`通过layout的type属性控制布局类型`，下面是线形弧线图的简单使用：

</br>

```javascript
// html片段
<div id="chartContainer"></div>
```

```javascript
// 引用图表库
import { LinearArcChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用节点组件
import LinearArcNode from './LinearArcNode.vue';
const option = {
	layout: {
		type: 'lineaArc',
	},
	node: {
		width: 50,
		height: 50,
	},
	line: {
		type: 'Ellipse',
		endMarker:{
		  type:'none'
		}
	},
	// 图表数据
	data: {
		nodes: [{
			id: '0',
			text: '0',
			width: 10,
			height: 10,
			fill: 'rgb(91, 143, 249)'
		},{
			id: '1',
			text: '1',
			width: 12,
			height: 12,
			fill: 'rgb(90, 216, 166)'
		},{
			id: '2',
			text: '2',
			width: 4,
			height: 4,
			fill: 'rgb(93, 112, 146)'
		},{
			id: '3',
			text: '3',
			width: 14,
			height: 14,
			fill: 'rgb(246, 189, 22)'

		},{
			id: '4',
			text: '4',
			width: 8,
			height: 8,
			fill: 'rgb(232, 104, 74)'
		},{
			id: '5',
			text: '5',
			width: 10,
			height: 10,
			fill: 'rgb(109, 200, 236)',
		},{
			id: '6',
			text: '6',
			width: 4,
			height: 4,
			fill: 'rgb(146, 112, 202)'
		},{
			id: '7',
			text: '7',
			width: 4,
			height: 4,
			fill: 'rgb(255, 157, 77)'
		},
		{
			id: '8',
			text: '8',
			width: 4,
			height: 4,
			fill: 'rgb(38, 154, 153)',
		},{
			id: '9',
			text: '9',
			width: 8,
			height: 8,
			fill: 'rgb(227, 137, 163)',
		},{
			id: '10',
			text: '10',
			width: 18,
			height: 18,
			fill: 'rgb(91, 143, 249)',
		},{
			id: '11',
			text: '11',
			width: 20,
			height: 20,
			fill: 'rgb(255, 157, 77)'
		}],
		edges: [
			{
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
			},{
				start: '4',
				end: '5',
			},{
				start: '5',
				end: '6',
			},{
				start: '6',
				end: '7',
			},{
				start: '7',
				end: '8',
			},{
				start: '8',
				end: '9',
			},{
				start: '9',
				end: '10',
			},{
				start: '10',
				end: '11',
			},{
				start: '0',
				end: '2',
			},{
				start: '0',
				end: '4',
			},
			{
				start: '0',
				end: '6',
			},{
				start: '0',
				end: '8',
			},{
				start: '4',
				end: '6',
			},{
				start: '4',
				end: '8',
			},{
				start: '4',
				end: '10',
			},
		],
	}
};
let chartContainerDom = document.getElementById('chartContainer');
let chartIns = new LinearArcChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();

```

节点LinearArcNode代码如下：


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






