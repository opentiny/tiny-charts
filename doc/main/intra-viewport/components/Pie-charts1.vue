<template>
  <div className="chart-container" :style="{height: '400px', width: '100%'}">
    <div
        class='chart'
        ref="chartContainer"
        style="height: 400px"
        :style="{height: '400px', width: '100%'}"
      >
    </div>
  </div>
</template>
<script>
import IntegrateChart from '../../../../src/index';

export default {
  name: 'BarChart',
  data(){
    return {
      value: 0,
      chartWidth: '1400px',
    }
  },
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted() {
    const option = {
        theme: 'light',
        type: 'circle', 
        // 是否关闭hover态的效果，默认为false
        silent: false,
        title: {
            text: '{a|253}\n{b|总数量}\n{b|(用户数)}',
            textStyle: {
                rich: {
                    a: {
                        color: '#191919',
                        fontSize: 51,
                    },
                    b: {
                        fontSize: 17,
                        color: '#999',
                        padding: [10, 0, 0, 0]
                    },
                }
            },
        },
        legend: {
            show: true,
        },
        label: {
            show: true,
            type: 'percent',
            line: false
        },
        data: [
            { value: 100, name: 'VPC' },
            { value: 90, name: 'IM' },
            { value: 49, name: 'EIP' },
            { value: 14, name: 'SG' },
        ],
        // 自定义设置图表事件
        event: {
            'series': {
                click: (pieParams) => {

                },
                dblclick: (pieParams) => {

                }
            }
        }
    };
    this.renderChart(option);
  },
  methods: {
    renderChart(option) {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.setSimpleOption('PieChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
