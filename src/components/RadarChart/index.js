import BaseOption from './BaseOption';
import { event } from '../../util/event';
import init from '../../option/init';
import { insertCenterDom, removeCenterDom, resizeCenterDom } from '../../util/centerDom';
import { isArray } from '../../util/type';
import cloneDeep from '../../util/cloneDeep';
import { setSeries, setMarkLineSeries } from './handleSeries';
import PolarCoordSys from '../../option/PolarCoordinateSystem';
import { setRadar, setTooltip, setMarkLine, getRadarMax, getRadarKeys } from './handleOptipn';

class RadarChart {
  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.chartInstance = chartInstance;
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    const theme = iChartOption.theme;
    const isCustomMaxVal = !!(isArray(iChartOption.radarMax) || iChartOption?.radar?.indicator);
    // 雷达坐标系最大值
    iChartOption.radarMax = iChartOption.radarMax || getRadarMax(iChartOption.data, iChartOption, isCustomMaxVal);
    // 在配置不同系列的最大值的时候。数据不在同一维度，不显示markLine
    PolarCoordSys(this.baseOption, iChartOption, 'RadarChart');
    // 雷达所有维度
    const radarKeys = getRadarKeys(iChartOption.data);
    // 绘制雷达地图
    this.baseOption.radar.push(setRadar(radarKeys, iChartOption, isCustomMaxVal));
    // 赋值数据
    this.baseOption.series = setSeries(theme, radarKeys, iChartOption.data);
    // 阈值线
    setMarkLine(this.baseOption, iChartOption, radarKeys, isCustomMaxVal);
    // 图表鼠标悬浮提示框
    setTooltip(this.baseOption, iChartOption, radarKeys);
    // 设置阈值红点
    setMarkLineSeries(this.baseOption, iChartOption, radarKeys, isCustomMaxVal);
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event);
    }
  }

  // 根据渲染出的结果，二次计算option
  updateOptionAgain(YAxiMax, YAxiMin) {
    const container = this.chartInstance.getDom();
    insertCenterDom(container, this.iChartOption);
  }

  resize(){
    const container = this.chartInstance.getDom();
    resizeCenterDom(container, this.iChartOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default RadarChart;
