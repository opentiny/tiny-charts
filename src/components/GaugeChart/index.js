import BaseOption from './BaseOption';
import handleSeries from './handleSeries';
import cloneDeep from '../../util/cloneDeep';
import { handleTooltip } from './handleOptipn';
import { event } from '../../util/event';
import megreSeries from '../../util/megreSeries';
import init from  '../../option/init'
class GaugeChart {
  constructor(iChartOption, _, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, _, chartInstance);
  }

  updateOption(iChartOption, _, chartInstance) {
    // 图表基础颜色
    this.baseOption.color = iChartOption.color;
    // 图表鼠标悬浮提示框
    this.baseOption.tooltip = handleTooltip(iChartOption);
    // 赋值数据
    this.baseOption.series = handleSeries(iChartOption, this.baseOption.color);
    // 配置图表事件
    event(chartInstance, iChartOption.event);
    // 合并用户自定义series
    this.baseOption.legend.show = false;
    megreSeries(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default GaugeChart;
