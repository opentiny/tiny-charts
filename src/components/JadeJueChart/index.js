import init from '../../option/init';
import BaseOption from './BaseOption';
import cloneDeep from '../../util/cloneDeep';
import { setSeriesData } from './handleSeries';
import { handleLabelFormatter } from './labelFormatter';
import PolarCoordSys from '../../option/PolarCoordinateSystem';
import { setStartAngle, setbarWidth, handleLegendData } from './handleOption';
import { event } from '../../util/event';

const CHART_NAME = 'JadeJueChart';
class JadeJueChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    iChartOption.position = iChartOption.position || iChartOption.chartPosition;
    iChartOption.max = iChartOption.max || iChartOption.calibrationValue;
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, iChartOption, CHART_NAME);
    // 配置玉玦图的标定值和两种data下不同的angleAxis.sum和angleAxis.max
    handleLabelFormatter(iChartOption, this.baseOption);
    // 配置玉玦图的seriesData数据（value,name,color）
    setSeriesData(iChartOption, this.baseOption);
    // 设置默认线宽为8
    setbarWidth(iChartOption, this.baseOption);
    // 配置玉玦图的起点角度及文本位置
    setStartAngle(iChartOption, this.baseOption);
    // 为第一种数据类型单独配置legend.data和对应颜色
    handleLegendData(iChartOption, this.baseOption);
    // 配置图表事件
    event(chartInstance, iChartOption.event);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default JadeJueChart;
