<template>
  <div class="node-two">
    <div class="node-top">
        <div class="title">{{ info.name }}</div>
        <div class="time">
					<tiny-select v-model="info.selectValue">
      			<tiny-option v-for="item in info.selectOptions" :key="item.value" :label="item.label" :value="item.value" :icon="item.icon">
      			</tiny-option>
    			</tiny-select>
        </div>
    </div>
		<div class="node-content">
			<div class="content-left">
					<div class="num"> {{ info.num }}</div>
					<div class="desc"> {{ info.desc }}</div>
					<div class="text" v-for="(item, index) in info.label" :key="index">{{ item }}</div>
			</div>
			<div class="content-right">
				<div class="chart-con" ref="chartConRef">

				</div>
			</div>
		</div>
  </div>
</template>

<script  >
import { Rate, Select , Option } from '@opentiny/vue'
import IntegrateChart from '../../src/index';
export default {
  components: {
    TinyRate: Rate ,
		TinySelect: Select,
		TinyOption: Option
  },
  props: {
    data: Object,
  },
  data() {
    return {
      info: {
        name: 'Support',
        selectOptions: [
					{ value: 1, label: 'Last 7 days',},
  				{ value: 2, label: 'Last 30 days',},
				],
				selectValue: 1,
				num: 283,
				desc: 'traffic',
				label:['support','responsible']
			}
    };
  },
	created() {
		this.integrateChart = new IntegrateChart();
	},
  mounted() {
    if (this.data) {
      Object.assign(this.info, this.data);
    }
		let name = 'Utilization rate';
		let chartOpt = {
			startAngle: 180,
    	endAngle: 0,
			color: 'rgb(246, 177, 42)',
			itemStyle: {
        width: 12
    	},
			position: {
        center: ['68%', '75%'],
        radius: '100%',
    	},
			splitLine: {
        show: false
    	},
			text: {
				formatter: function (value) {
            return '{value|' + value + '}{unit|%}\n{name|'+ name +'}'
        },
				formatterStyle:{
					value: {
						color:'#000',
						fontSize: 24,
            fontWeight: '800',
					},
					unit: {
						color:'#000',
						fontSize: 24,
						fontWeight: '800',
          },
					name: {
						fontSize: 10,
						color: '#7b7c82',
						padding: [0, 5, 5, 5],
					},
				}
			},
			data:[                             
        {
          value: 71 ,
          name: name
        },
				
    ]
		}
		this.integrateChart.init(this.$refs.chartConRef);
		this.integrateChart.setSimpleOption('GaugeChart', chartOpt, {});
		this.integrateChart.render();
		
  },
  computed: {
    
  },

  methods: {
    
  },
  watch: {
    
  }
}
</script>


<style lang="less" scoped>
.node-two {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
	padding: 10px 10px 10px 15px;
	// background-color: rgb(23, 23, 33);
	// color: #fff;
	.node-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.time {
			width: 100px;
		}
	}
	.node-content {
		display: flex;
		justify-content: space-between;
		.content-left {
			.num {
				font-size: 28px;
				font-weight: 600;
				margin-top: 5px;
				margin-bottom: 2px;
			}
			.desc {
				font-size: 12px;
				color: #6D8FF0;
				margin-bottom: 20px;
			}
			.text {
				font-size: 12px;
				margin-bottom: 5px;

			}
		}
		.content-right {
			.chart-con {
				width: 200px;
				height: 120px;
			}
		}
	}
	
}


:deep(.tiny-select) {
	.tiny-input-display-only > input {
		background: transparent !important;
		border: none;
		color: #6D8FF0;
	}
}
</style>