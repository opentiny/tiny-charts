import cloneDeep from '../../util/cloneDeep';
import BaseOption from './baseOption';
import {
  handleData,
  handleColor,
  handleText,
  handlePadding,
  handleCoincide,
  setGradientColor,
  handleMarkLine,
} from './handleOption';
import { handleEmphasis } from './handleSeries';

import { event } from '../../util/event';
import init from '../../option/init';
import title from '../../option/config/rectTitle';
import toolTip from '../../option/config/tooltip';
import xAxis from '../../option/config/xAxis';
import yAxis from '../../option/config/yAxis';

const CHART_NAME = 'HillChart';

class HillChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    // 是否显示坐标轴
    // 配置x轴
    this.baseOption.xAxis = xAxis(iChartOption, CHART_NAME)[0];
    if (iChartOption.axis && iChartOption.axis.show) {
      // 配置y轴
      this.baseOption.yAxis = yAxis(this.baseOption, iChartOption, CHART_NAME);
    } else {
      this.baseOption.xAxis['axisLine'] = {
        show: false,
      };
      this.baseOption.xAxis['axisTick'] = {
        show: false,
      };
      this.baseOption.yAxis.show = false;
    }
    // 配置标题
    this.baseOption.title = title(iChartOption);
    // 配置数据
    handleData(iChartOption, this.baseOption);
    // 配置山峰颜色及透明度
    handleColor(iChartOption, this.baseOption);
    // 配置文本
    handleText(iChartOption, this.baseOption);
    // 配置ChartPadding
    handlePadding(iChartOption, this.baseOption);
    // 配置相邻山峰间隔
    handleCoincide(iChartOption, this.baseOption);
    // 配置悬浮提示框
    this.baseOption.tooltip = toolTip(iChartOption, CHART_NAME);
    this.baseOption.tooltip.trigger = 'item';
    // 配置渐变色
    setGradientColor(
      this.baseOption,
      iChartOption.color,
      iChartOption.gradientColor,
      iChartOption.opacity,
      iChartOption,
    );
    // 配置图表事件
    event(chartInstance, iChartOption.event);
    // 配置阈值线
    handleMarkLine(this.baseOption, iChartOption);
    // 配置高亮状态
    handleEmphasis(this.baseOption, iChartOption);
  }

  // 根据渲染出的结果，二次计算option
  // secondaryUpdateOption(YAxiMax, YAxiMin) {
  // }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default HillChart;



