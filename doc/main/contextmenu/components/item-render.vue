<template>
	<div class="chart-container">
		<div class="chart" ref="chartRef">
		</div>
	</div>
</template>

<script>
import MindmapChart from '../../../../src/framework/charts/MindmapChart';
import Demo from '../../../nodeExample/demoDrop.vue';
import '../../../../src/feature/nodeRender/vue-node';

const option = {
	menu: { // 右键菜单
    node: {
      data: [
        { icon: './image/charts/contextmenu/delete.svg', label: '删除节点', value: 'delete' },
        { icon: './image/charts/contextmenu/copy.svg', label: '复制节点', value: 'copy' },
        { icon: './image/charts/contextmenu/merge.svg', label: '合并节点', value: 'merge' },
        { icon: './image/charts/contextmenu/setting.svg', label: '数据配置', value: 'setting' },
        { icon: './image/charts/contextmenu/add.svg', label: '新增子节点', value: 'add' },
      ],
      itemRender: (itemData, targetId) => {
        return `<div style="width: 100%; display: flex; align-items: center;justify-content:space-between;">
        <p style=" margin-right: 6px;">${itemData.label}</p>
        <img style="width: 20px; height: 20px;" src="${itemData.icon}" alt="" />
        <div>`
      },
    },
  },
	theme: 'hdesign-light',
	layout: {
		type: 'mindmap',
		direction: 'LR',
		nodeShape: 'rect',
		vGap: 10,
		hGap: 100
	},
	node: {
		width: 200,
		height: 100,
	},
	line: {
		type: 'Bezier',
		style: {
			active: {
				color: 'red',
				width: 2,
			},
			disable: {
				color: 'blue',
				// width:1,
			},
		},
	},
	canvas: {
		show: true,
		grid: {
			size: 20,
			show: true,
			type: 'dot', //dot mesh doubleMesh
			config: {
				color: '#aaaaaa', // 颜色
				unitSize: 1, // 宽度
			}
		}
	},
	connector: {
		startSharing: 'merge',
		endSharing: 'merge',
		type: 'expand',

	},

	// 图表数据
	data: {
		id: 'root',
		text: '产品研发中心',
		peopleNum: 100,
		children: [
			{
				id: 'R&DDept1',
				text: '研发部',
				peopleNum: 20,
			},
			{
				id: 'designDept2',
				text: '设计部',
				peopleNum: 60,
			},
		]
	}
};

export default {
	name: 'ContextmenuExample',
	data () {
		return {
			currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
		}
	},
	created () {
	},
	mounted () {
		this.renderChart();
		this.$bus.on('themeChange', (val) => {
			this.currentTheme = val;
			this.renderChart();
		})
	},
	methods: {
		renderChart () {
			this.integrateChart = new MindmapChart();
			this.integrateChart.init(this.$refs.chartRef);
			option.component = Demo;
			this.integrateChart.setOption({...option});
			this.integrateChart.render();
		}
	}
}
</script>

<style scoped>
.chart{
  width: 100% !important;
  height: 300px;
}

</style>