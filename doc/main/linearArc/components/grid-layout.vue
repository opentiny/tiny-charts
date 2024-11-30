<template>
	<div className="chart-container">
		<div class='chart grid-layout-wrap' ref="chartRef">
		</div>
	</div>
</template>
  
<script >
import GridChart from '../../../../src/framework/charts/GridChart';
import GridNode from '../../../nodeExample/GridNode.vue';
const defaultOption = {
	theme: 'hdesign-light',
	layout: {
		type: 'linearArc',
        width: 800,
        height: 200,
        begin: [320,80]
	},
	node: {
		width: 50,
		height: 50,
	},
	canvas: {
        show: true,
		scaleAllow:false,
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
    line: {
		type: 'Ellipse',
		endMarker:{
		  type:'none',
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
			},
			{
				id: '1',
				text: '1',
				width: 12,
				height: 12,
				fill: 'rgb(90, 216, 166)'
			},
			{
				id: '2',
				text: '2',
				width: 4,
				height: 4,
				fill: 'rgb(93, 112, 146)'
			},
			{
				id: '3',
				text: '3',
				width: 14,
				height: 14,
				fill: 'rgb(246, 189, 22)'

			},
			{
				id: '4',
				text: '4',
				width: 8,
				height: 8,
				fill: 'rgb(232, 104, 74)'
			},
			{
				id: '5',
				text: '5',
				width: 10,
				height: 10,
				fill: 'rgb(109, 200, 236)',
			},
			{
				id: '6',
				text: '6',
				width: 4,
				height: 4,
				fill: 'rgb(146, 112, 202)'
			},
			{
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
			},
			{
				id: '9',
				text: '9',
				width: 8,
				height: 8,
				fill: 'rgb(227, 137, 163)',
			},
			{
				id: '10',
				text: '10',
				width: 18,
				height: 18,
				fill: 'rgb(91, 143, 249)',

			},
			{
				id: '11',
				text: '11',
				width: 20,
				height: 20,
				fill: 'rgb(255, 157, 77)'

			}	
		
		],
		edges: [
			{
				start: '0',
				end: '1',
			},
			{
				start: '1',
				end: '2',
			},
			{
				start: '2',
				end: '3',
			},
			{
				start: '3',
				end: '4',
			},
            {
				start: '4',
				end: '5',
			},
            {
				start: '5',
				end: '6',
			},
            {
				start: '6',
				end: '7',
			},
            {
				start: '7',
				end: '8',
			},
            {
				start: '8',
				end: '9',
			},
            {
				start: '9',
				end: '10',
			},
            {
				start: '10',
				end: '11',
			},
            {
				start: '0',
				end: '2',
			},
            {
				start: '0',
				end: '4',
			},
			{
				start: '0',
				end: '6',
			},
            {
				start: '0',
				end: '8',
			},
            {
				start: '4',
				end: '6',
			},
            {
				start: '4',
				end: '8',
			},
            {
				start: '4',
				end: '10',
			},
            {
				start: '4',
				end: '11',
			},
		],
	}

};
function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export default {
	name: 'GridLayout',
	props: {
		option:Object
	},
	data() {
		return {
			currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
		}
	},
	created() {
	},
	mounted() {
		this.renderChart(this.convertOption(this.option));
		this.$bus.on('themeChange', (val) => {
			this.currentTheme = val;
			this.renderChart();
		})

	},
    watch: {
        option:{
            handler: function(newVal){
                this.renderChart(this.convertOption(newVal))
            },
            deep: true
        }
        
    },
	methods: {
        convertOption(val) {
            let optionObj = {}
            if(val.type === 'begin') {
                optionObj = {
                    layout: {
                        type: 'linearArc',
                        rows:1,
                        begin: [val.beginX,val.beginY],
                        width: val.width,
                        height: val.height
                    }
                }
            }
            if(val.type === 'default') {
                optionObj = {
                    layout: {
                        type: 'linearArc',
                        rows:1,
                        width: 800,
                        height: 200,
                        begin: [320,80]
                    }
                }
            }
            return optionObj
        },
		renderChart(data) {
            let newOption = copy(defaultOption);
            Object.assign(newOption,data);
			this.$refs.chartRef.innerHTML = '';
			newOption.component = GridNode;
			this.integrateChart = new GridChart();
			this.integrateChart.init(this.$refs.chartRef);
			this.integrateChart.setOption(newOption);
			this.integrateChart.render();
		}
	}
}
</script>

<style scoped>
.chart-container .chart {
	margin-top: 0rem;
    overflow: hidden;
}
.chart-container {
  border: 1px solid var(--ti-base-color-common-1);
}
.grid-layout-wrap {
	width: 100%;
	height: 250px;
}
</style>