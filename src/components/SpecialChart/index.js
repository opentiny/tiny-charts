import MarkerLineChart from './MarkerLineChart';
import setIChartOption from './util/iChartOption';
import DoubleSidesAreaChart from './DoubleSidesAreaChart';
import AssembleBubbleChart from './AssembleBubbleChart';
import ThresholdProcessBarChart from './ThresholdProcessBarChart';

class SpecialChart {
  constructor(iChartOption, plugins, newChart) {
    this.baseOption = {};
    this.iChartOption = {};
    // 组装 iChartOption, 补全默认值
    this.iChartOption = setIChartOption(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, plugins, newChart);
  }

  updateOption(iChartOption, plugins, newChart) {
    if (!iChartOption.name) {
      throw new Error('SpecialChart must have a name');
    }
    let chartClass;
    switch (iChartOption.name) {
      case 'AssembleBubbleChart':
        chartClass = AssembleBubbleChart;
        break;
      case 'MarkerLineChart':
        chartClass = MarkerLineChart;
        break;
      case 'ThresholdProcessBarChart':
        chartClass = ThresholdProcessBarChart;
        break;
      case 'DoubleSidesAreaChart':
        chartClass = DoubleSidesAreaChart;
        break;
      default:
        break;
    }
    const chart = new chartClass(iChartOption, plugins, newChart);
    this.baseOption = chart.getOption();
    // DoubleSidesAreaChart,没用padding。使用原生grid属性。兼容chartPadding和padding
    if (iChartOption.name !== 'DoubleSidesAreaChart') {
      // 图表位置
      this.baseOption.grid = {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true,
      };
      iChartOption.chartPadding = iChartOption.chartPadding || iChartOption.padding;
      this.baseOption.grid.top = iChartOption.chartPadding[0];
      this.baseOption.grid.right = iChartOption.chartPadding[1];
      this.baseOption.grid.bottom = iChartOption.chartPadding[2];
      this.baseOption.grid.left = iChartOption.chartPadding[3];
    }
  }

  // 根据渲染出的结果，二次计算option
  // secondaryUpdateOption(YAxiMax, YAxiMin) {
  // }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default SpecialChart;
