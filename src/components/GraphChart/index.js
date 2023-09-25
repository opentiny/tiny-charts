import megre from '../../util/megre';

class GraphChart {
  constructor(iChartOption, _, chartInstance) {
    this.rootData = {};
    this.baseOption = {};
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, _, chartInstance);
  }

  updateOption(iChartOption, _, chartInstance) {
    // 兼容echarts属性
    megre(this.baseOption, iChartOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
};

export default GraphChart;
