```javascript

// 柱状图的配置
const barChartOpt = {
  theme: 'cloud-light',
  color: [
    "#2070F3",
    "#55CCD9",
  ],
  padding: [40, 50, 50, 50],
  data: [
    { "Month": '8月', "去年": 2000, "今年": 2500 },
    { "Month": '9月', "去年": 3000, "今年": 3500 },
    { "Month": '10月', "去年": 4000, "今年": 4500 },
    { "Month": '11月', "去年": 5000, "今年": 5500 },
    { "Month": '12月', "去年": 2500, "今年": 3000 },
    { "Month": '1月', "去年": 1000, "今年": 1500 },
  ],
  xAxis: {
    key: 'Month',
    name: '月份',
    axisLabel: {
      color: '#777777',
      fontSize: 18
    },
  },
  yAxis: {
    name: '百分比(%)',
    axisLabel: {
      color: "#777777",
      fontSize: 18,
    },
  },
  legend: {
    show: true,
    position: {
      left: "center",
      bottom: 15
    },
    textStyle: {
      fontSize: 16,
      padding: [4, 0, 0, 0],
      color: '#777777',
      overflow: 'none',
    },
    itemGap: 150,
    itemWidth: 24,
    itemHeight: 12,
  },
  tooltip: {
    textStyle: { color: "#666", fontSize: 12 },
    borderWidth: 0,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemStyle: {
    barWidth: '25',
    barGap: "60%",
  },
};

export default {
  name: 'BarChart',
  ...,
  created() {
    this.integrateChart = new IntegrateChart();
  },
  methods() {
    this.integrateChart.init(this.$refs.chartContainer);
    this.integrateChart.setSimpleOption('BarChart', barChartOpt, {});
    this.integrateChart.linter('check', 'dialog');
    this.integrateChart.render();
  }
}
</script>

```