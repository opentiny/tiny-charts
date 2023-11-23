import init from '../../option/init';
import BaseOption from '../../util/baseOption';
import cloneDeep from '../../util/cloneDeep';
import { getLegendData, getXAxisData } from './handleData';
import { setSeries, handleSeriesExtra } from './handleSeries';
import { setTooltip } from './handleOptipn';
import { handleTrendLine } from './handleTrendLine';
import { setDataset, setVisualMap } from './handleVisualMap';
import RectCoordSys from '../../option/RectangularCoordinateSystem';

class BubbleChart {
  constructor(iChartOption, chartInstance, plugins) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.iChartOption = {};
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(plugins);
  }

  updateOption(plugins) {
    const iChartOption = this.iChartOption;
    const theme = iChartOption.theme;
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, 'BubbleChart');
    // 增加气泡图的默认悬浮提示框
    setTooltip(this.baseOption);
    // 组装基础数据
    const legendData = getLegendData(iChartOption.data);
    // 设置x轴类型，是目录型，还是数值型
    const { xAxisType } = iChartOption;
    if (legendData &&
      legendData[0] &&
        legendData[0] && 
      legendData[0] &&
      iChartOption.data[legendData[0]] &&
        iChartOption.data[legendData[0]] && 
      iChartOption.data[legendData[0]] &&
      iChartOption.data[legendData[0]][0] &&
        iChartOption.data[legendData[0]][0] && 
      iChartOption.data[legendData[0]][0] &&
      iChartOption.data[legendData[0]][0][0] &&
        iChartOption.data[legendData[0]][0][0] && 
      iChartOption.data[legendData[0]][0][0] &&
      typeof iChartOption.data[legendData[0]][0][0] === 'string') {
      this.baseOption.xAxis.forEach(item => {
        item.type = xAxisType || 'category';
        item.data = getXAxisData(iChartOption.data[legendData[0]]);
      });
    } else {
      this.baseOption.xAxis.forEach(item => {
        item.type = xAxisType || 'value';
      });
    }
    // 赋值数据
    this.baseOption.legend.data = legendData;
    this.baseOption.series = setSeries({
      theme,
      legendData,
      data: iChartOption.data,
      markLine: iChartOption.markLine,
      color: this.baseOption.color,
    });
    // 添加dataset
    this.baseOption.dataset = setDataset(this.baseOption, iChartOption);
    // 设置VisualMap，通过数值映射气泡大小
    this.baseOption.visualMap = setVisualMap(this.baseOption, iChartOption, legendData);
    // 针对趋势线的需求，图表需要进行特殊处理
    handleTrendLine(this.baseOption, iChartOption, plugins);
    // 添加seires属性
    handleSeriesExtra(this.baseOption, iChartOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default BubbleChart;
