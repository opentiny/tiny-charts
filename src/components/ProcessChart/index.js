import init from '../../option/init';
import ProcessBarChart from './ProcessBarChart';
import StackProcessBarChart from './StackProcessBarChart';

class ProcessChart {
  constructor(iChartOption, plugins, newChart) {
    this.baseOption = {};
    this.iChartOption = {};
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, plugins, newChart);
  }

  updateOption(iChartOption, plugins, newChart) {
    if (!iChartOption.name) {
      throw new Error('ProcessChart must have a name');
    }
    let chartClass;
    switch (iChartOption.name) {
      case 'ProcessBarChart':
        chartClass = ProcessBarChart;
        break;
      case 'StackProcessBarChart':
        chartClass = StackProcessBarChart;
        break;
      default:
        break;
    }
    const chart = new chartClass(iChartOption, plugins, newChart);
    this.baseOption = chart.getOption();
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

export default ProcessChart;
