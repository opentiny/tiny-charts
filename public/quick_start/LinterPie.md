```javascript

// 柱状图的配置
const pieChartOpt = {
  theme: 'hdesign-light',
  color: [
    "#2070F3",
    "#55CCD9",
    "#715AFB",
    "#8ABEF3",
    "#EB74DF",
  ],
  type: 'pie',
  position: {
    center: ["40%", "50%"]
  },
  data: [
    { name: "资产创建", value: 150 },
    { name: "资产调整", value: 120 },
    { name: "资产转移", value: 200 },
    { name: "资产处置", value: 200 },
    { name: "计划外折旧", value: 200 },
  ],
  legend: {
    show: true,
    left: "80%",
    bottom: 15,
    align: "left",
    itemGap: 32,
    orient: "vertical",
    top: "30%",
  },
  itemStyle: {
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderRadius: 10
  },
  labelLine: {
    show: true,
    lineStyle: { color: "red" },
    smooth: 0.3,
    length: 10,
    length2: 10,
  },
};

export default {
  name: 'PieChart',
  ...,
  created() {
    this.integrateChart = new IntegrateChart();
  },
  methods() {
    this.integrateChart.init(this.$refs.chartContainer);
    this.integrateChart.setSimpleOption('PieChart', PieChartOpt, {});
    this.integrateChart.linter('check', 'dialog');
    this.integrateChart.render();
  }
}
</script>
```