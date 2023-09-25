import cloneDeep from '../../../util/cloneDeep';
import BaseOption from './BaseOption';
import { event } from '../../../util/event';
import { handleYaxis, handleTheme, handleTooltip, handleColor, handleXaxis } from './handleOption';
import { handleSeries, handleLabelStyle } from './handleSeries';
import grid from '../../../option/config/grid';


class StackProcessBarChart {
  constructor(iChartOption, _, chartInstance) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    const theme = iChartOption.theme;
    const color = iChartOption.color;
    const data = iChartOption.data;
    handleXaxis(this.baseOption)
    // 处理Yaxis数据
    handleYaxis(this.baseOption, data);
    // 处理series
    handleSeries(this.baseOption, iChartOption, data);
    // 处理主题
    handleTheme(this.baseOption, theme);
    //  柱状颜色
    handleColor(this.baseOption, color);
    // 处理tooltip
    handleTooltip(this.baseOption, iChartOption);
    // 设置文本样式
    handleLabelStyle(this.baseOption, iChartOption);

    this.baseOption.grid = grid(iChartOption);
    this.baseOption.grid[0].containLabel = false;
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event);
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

export default StackProcessBarChart;
