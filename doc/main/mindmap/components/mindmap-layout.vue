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
		type: 'grid',
		begin: [0,-40]
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
        type: 'Direct',
    },
	// 图表数据
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
		},
		
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
                        type: 'grid',
                        begin: [val.beginX,val.beginY],
                        width: val.width,
                        height: val.height
                    }
                }
            }
            if(val.type === 'pre') {
                optionObj = {
                    layout: {
                        type: 'grid',
                        preventOverlap: val.preventOverlap,
                        preventOverlapPadding: val.preventOverlapPadding,
                        width: 200,
                        height: 80,
                        begin: [0,50]
                    }
                }
            }
            if(val.type === 'rows') {
                optionObj = {
                    layout: {
                        type: 'grid',
                        rows: val.rows,
                        begin: [0,-40]          
                    }
                }
            }
            if(val.type === 'sortBy') {
                optionObj = {
                    layout: {
                        type: 'grid',
                        sortBy: val.sortBy,
                        begin: [0,-40],
                        width: 500,
                        rows:1   
                    },
                    data: {
                        nodes: [{
                            id: '0',
                            text: '1',
                            name: 'main',
                            ip: '101.0.1.128',
                            cluser: 1
                        },
                        {
                            id: '1',
                            text: '2',
                            name: 'portal',
                            ip: '101.0.1.128',
                            cluser: 3
                        },
                        {
                            id: '2',
                            text: '3',
                            name: 'ecs',
                            ip: '101.0.1.128',
                            cluser: 2
                        },
                        {
                            id: '3',
                            text: '4',
                            name: 'ecs',
                            ip: '101.0.1.128',
                            cluser: 5
                        },
                        {
                            id: '4',
                            text: '5',
                            name: 'hecs',
                            ip: '101.0.1.128',
                            cluser: 4
                        },
                        
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
                            
                        ]
	                }
                }
            }
            if(val.type === 'default') {
                optionObj = {
                    layout: {
                        type: 'grid',
                        begin: [0,-40],
                        rows: 2    
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