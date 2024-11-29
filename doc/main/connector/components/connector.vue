<template>
	<div className="chart-container">
		<div class='chart grid-layout-wrap' :class="option.nodeType" ref="chartRef">
		</div>
	</div>
</template>
  
<script >
import CustomizeChart from '../../../../src/framework/charts/CustomizeChart';
import NodeThree from '../../../nodeExample/NodeThree.vue';
const defaultOption = {
	theme: 'hdesign-light',
	layout: {
        direction: 'LR',
        nodeShape: 'rect',
	},
	node: {
		width: 50,
        height: 50
	},
    connector: {
        startSharing: 'merge', // 均分方式 merge sharing  strict
        endSharing: 'merge',
        type: 'dot',
        show: true,
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
			text: 'ceil-1',
            x: 180,
            y: 150
		},
		{
			id: '1',
			text: 'ceil-2',
            x: 380,
            y: 65
		},
		{
			id: '2',
			text: 'ceil-3',
            x: 380,
            y: 150
		},
		{
			id: '3',
			text: 'ceil-4',
            x: 380,
            y: 245
		},
		
		],
		edges: [
			{
				start: '0',
				end: '1',
			},
			{
				start: '0',
				end: '2',
			},
			{
				start: '0',
				end: '3',
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
            let optionObj = {};
            if(val.type === 'default') {
                optionObj = {
                    layout: {
                        direction: 'LR',
                        nodeShape: val.nodeType,
                    },
                    connector: {
                        show: val.show,
                        type: val.types,
                        startSharing: val.startSharing,
                        centerCircle: val.centerCircle,
                        style:{
                            width: val.width,
                            height: val.height,
                            background: val.color
                        }
                    }
                }
            }
            return optionObj
        },
		renderChart(data) {
            let newOption = copy(defaultOption);
            Object.assign(newOption,data);
			this.$refs.chartRef.innerHTML = '';
			newOption.component = NodeThree;
			this.integrateChart = new CustomizeChart();
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
	height: 350px;
}

</style>