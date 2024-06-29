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
        title: {
            text: '{a|300}{b|个}\n{c|总数量}',
            textStyle: {
                rich: {
                    a: {
                        fontSize: 50,
                        color: '#191919',
                    },
                    b: {
                        padding: [10, 0, 0, 10],
                        fontSize: 16,
                        color: '#999',
                    },
                    c: {
                        padding: [10, 0, 0, 0],
                        fontSize: 24,
                        color: '#bbbbbb',
                    },
                }
            },
        },
        tipHtml: (params, ticket, callback) => {
            let htmlString =
                '<div>' +
                '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + params.color + ';">' +
                '</span>' +
                '<span style="margin-left:5px;">' +
                '<span style="display:inline-block;padding-right:5px;">' + params.name + '</span>' +
                '<span style="font-weight:normal">' + params.value + '</span>' +
                '<span>(' + params.percent + '%)</span>' +
                '</span>' +
                '</div>';
            return htmlString
        },
        label: {
            show: true,
            type: 'percent',
            line: false
        },
        data: [
            { value: 100, name: '架构设计' },
            { value: 100, name: '开发' },
            { value: 50, name: '性能' },
            { value: 50, name: '测试' },
        ]
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
