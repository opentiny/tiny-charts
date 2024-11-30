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
        type: 'Direct',
    },
	// 图表数据
	data: {
		nodes: [{
			id: '0',
			name: 'main',
			ip: '101.0.1.128',
            x: 700,
            y: 50
		},
		{
			id: '1',
			name: 'portal',
			ip: '101.0.1.128',
            x: 600,
            y: 150
		},
		{
			id: '2',
			name: 'ecs',
			ip: '101.0.1.128',
            x: 800,
            y: 150
		}],
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
				end: '0',
			}
		],
	}

};
function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export default {
	name: 'CircleLayout',
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
            if(val.type === 'function') {
                optionObj = {
                    layout: {
                        algorithm: function(nodes, containerSize){
                            nodes.forEach((item,index) => {
                                item.x = containerSize.width / 2 + 150 * index - 240;
                                item.y = containerSize.height / 2 + 20 * index - 20;
                            })
                        }
                    }
                }
            }
            return optionObj
        },
		renderChart(data) {
            let newOption = copy(defaultOption);
            Object.assign(newOption,data,true);
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
}
.chart-container {
  border: 1px solid var(--ti-base-color-common-1);
}
.grid-layout-wrap {
	width: 100%;
	height: 250px;
    overflow: hidden;
}
</style>