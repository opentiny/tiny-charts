```javascript

// 折线图的配置
let lineChartOpt = {
  theme: 'hdesign-light',
  color: ["#e87ae1", "#55CCD9"],
  padding: [40, 50, 50, 50],
  smooth: true,
  legend: {
    show: true,
    itemGap: 32,
    icon: "circle",
    itemWidth: 24,
    itemHeight: 12,
  },
  data: [
    { 'Month': 'Jan', '去年': 20, '今年': 37 },
    { 'Month': 'Feb', '去年': 27, '今年': 39 },
    { 'Month': 'Mar', '去年': 31, '今年': 20 },
    { 'Month': 'Apr', '去年': 30, '今年': 15 },
    { 'Month': 'May', '去年': 37, '今年': 13 },
    { 'Month': 'Jun', '去年': 36, '今年': 17 },
    { 'Month': 'Jul', '去年': 42, '今年': 22 },
    { 'Month': 'Aug', '去年': 22, '今年': 12 },
    { 'Month': 'Sep', '去年': 17, '今年': 30 },
    { 'Month': 'Oct', '去年': 40, '今年': 33 },
    { 'Month': 'Nov', '去年': 42, '今年': 22 },
    { 'Month': 'Dec', '去年': 32, '今年': 11 }
  ],
  xAxis: {
    data: 'Month',
    axisLine: { lineStyle: { width: 2, color: "#DFDFDF", type: "dashed" } },
    axisLabel: { color: "#2070f3", fontSize: 19 },
  },
  yAxis: {
    name: 'Percentage(%)',
    type: "value",
    splitLine: {
      show: true,
      lineStyle: { width: 2, type: "dashed", color: "#dfdfdf" },
    },
  },
  tooltip: {
    textStyle: { color: "red", fontSize: 14 },
  },
};

export default {
  name: 'LineChart',
  ...,
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted(){
    this.integrateChart.init(this.$refs.chartContainer);
    this.integrateChart.setSimpleOption('LineChart', lineChartOpt, {});
    this.integrateChart.linter('check', 'dialog');
    this.integrateChart.render();
  }
}
</script>
```