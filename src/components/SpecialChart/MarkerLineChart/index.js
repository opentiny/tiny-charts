import cloneDeep from '../../../util/cloneDeep';
import BaseOption from './BaseOption';
import { setMark, setToolTip, setMarkLine, setXAxis, setYAxis, setXData, setYAxisName } from './handleOption';

class MarkerLineChart {
  constructor(iChartOption) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.updateOption(iChartOption);
  }

  updateOption(iChartOption) {
    const theme = iChartOption.theme;
    // 配置数据
    const data = iChartOption.data;
    const xAxis = iChartOption.xAxis;
    // time是x轴的数据
    let time = [];
    // value是y轴的数据
    const value = [];
    // 提取出x轴的数据
    const xAxisName = xAxis;
    time = setXData({ data, xAxis, time, value, baseOpt: this.baseOption, xAxisName });
    // 配置是否开启平滑曲线
    const smooth = iChartOption.smooth || false;
    this.baseOption.series[0].smooth = smooth;
    // 配置线条颜色
    const color = iChartOption.color;
    this.baseOption.color = color;
    // 配置悬浮提示框
    let tooltip = iChartOption.tooltip;
    if (tooltip) {
      this.baseOption.tooltip = setToolTip(theme, tooltip.show, tooltip.tipHtml);
    } else {
      tooltip = {
        show: true,
      };
      this.baseOption.tooltip = setToolTip(theme, tooltip.show, tooltip.tipHtml);
    }
    // 配置x轴
    setXAxis(theme, xAxis, this.baseOption, time);
    // 配置y轴
    const yAxis = iChartOption.yAxis;
    setYAxis(theme, yAxis, this.baseOption);
    // 图表y轴的名称采用title标题的形式来实现
    this.baseOption.title = setYAxisName(theme, iChartOption.yAxisName, iChartOption.chartPadding);
    // 配置标记点的颜色及文本信息
    const mark = iChartOption.mark;
    setMark(mark, this.baseOption, theme);
    // 配置标记区域的背景及位置信息
    const markPoint = iChartOption.markPoint;
    this.baseOption.series[0].markPoint = markPoint;
    // 配置阈值线
    const markLine = iChartOption.markLine;
    if (markLine) {
      setMarkLine(markLine, this.baseOption);
    } else {
      return '';
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

export default MarkerLineChart;
