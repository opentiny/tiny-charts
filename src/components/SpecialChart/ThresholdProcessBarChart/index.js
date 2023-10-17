import cloneDeep from '../../../util/cloneDeep';
import BaseOption from './BaseOption';
import { event } from '../../../util/event';
import { handleTooltip, handleTheme, handleData, handleAxis } from './handleOption';
import { handleSeries, handleColor } from './handleSeries';

class ThresholdProcessBarChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);

    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    const theme = iChartOption.theme;
    const color = iChartOption.color;
    const data = iChartOption.data;
    const dataSet = handleData(iChartOption);

    handleTheme(this.baseOption, theme, iChartOption);
    handleAxis(this.baseOption, theme, dataSet, iChartOption);
    handleSeries(this.baseOption, iChartOption, color, dataSet, data);
    handleTooltip(this.baseOption, iChartOption, data);
    // 处理颜色
    handleColor(this.baseOption, iChartOption, color, dataSet);
    // 图表的事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event);
    }
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default ThresholdProcessBarChart;
