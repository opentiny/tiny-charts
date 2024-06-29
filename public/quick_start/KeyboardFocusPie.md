```javascript

// 圆盘图的配置
let pieChartOpt = {
  keyboardFocus: 'single',
  theme: 'cloud-light',
  type: 'circle', 
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' },
  ]
};

export default {
  name: 'PieChart',
  ...,
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted(){
    this.integrateChart.init(this.$refs.chartContainer);
    this.integrateChart.setSimpleOption('PieChart', pieChartOpt);
    this.integrateChart.render();
  }
}
</script>
```