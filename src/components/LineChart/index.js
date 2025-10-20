/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import init from '../../option/init';
import mini from '../../feature/mini/miniLineChart';
import { setSeries, setDatasetSeries } from './handleSeries';
import cloneDeep from '../../util/cloneDeep';
import BaseOption from '../../option/base';
import { setVisualMap } from './handleVisualMap';
import { handlePredict } from './handlePredict';
import { topArea, bottomArea,  } from './AreaChart';
import { getDatasetData } from '../../util/dataset';
import { mergeVisualMap, mergeSeries } from '../../util/merge';
import { handleData, onlyOnePoint, discrete, setTooltip } from './handleOptipn';
import RectCoordSys, { xkey, xdata, ldata, ydata } from '../../option/RectSys';
import AdaptiveRectSys from '../../option/RectSys/adaptive'
import { lttb } from '../../feature/performance/lttb';
import { handleMarkLineMax } from '../../option/config/mark';
import { CHART_TYPE } from '../../util/constants';
import { isArray, isObject } from '../../util/type';
import legend from '../../option/config/legend';

class LineChart {

  static name = CHART_TYPE.LINE

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.iChartOption = {};
    this.chartInstance = chartInstance;
    getDatasetData(iChartOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, CHART_TYPE.LINE, chartInstance);
    // x轴key值
    const xAxisKey = xkey(iChartOption);
    const data = iChartOption.massive ? lttb(iChartOption.data) : iChartOption.data
    // x轴数据
    const xAxisData = xdata(data, xAxisKey);
    // 图例数据
    const legendData = ldata(data, xAxisKey);
    // 连线的数据
    const seriesData = ydata(data, legendData);
    // 给图例和x轴赋值
    handleData(this.baseOption, legendData, xAxisData);
    // 组装series
    this.baseOption.series = setSeries({
      seriesData,
      legendData,
      yAxis: iChartOption.yAxis,
      focus: iChartOption.focus,
      stack: iChartOption.stack,
      isStep: iChartOption.step,
      isArea: iChartOption.area,
      colors: this.baseOption.color,
      isSmooth: iChartOption.smooth,
      markLine: iChartOption.markLine,
      markPoint: iChartOption.markPoint,
      splitLine: iChartOption.splitLine,
      labelHtml: iChartOption.labelHtml,
      itemStyle: iChartOption.itemStyle,
      massive: iChartOption.massive,
      colors: iChartOption.color
    });
    // 设置VisualMap，通过数值映射颜色
    this.baseOption.visualMap = setVisualMap(legendData, seriesData, iChartOption, this.baseOption);
    // 针对预测值图表需求，图表需要进行特殊处理
    handlePredict(this.baseOption, iChartOption);
    // 是否关闭hover态的效果，默认为false
    if (iChartOption.silent) {
      this.baseOption.tooltip = {};
    }
    // 当数据只有一条时，显示数据点
    onlyOnePoint(this.baseOption);
    // 针对离散数据, 创建同名Series, 显示离散数据的单个点
    discrete(iChartOption, this.baseOption);
    setTooltip(this.baseOption, iChartOption,legendData, this)
    // 合并用户自定义series
    if (iChartOption.dataset) {
      setDatasetSeries(this.baseOption, iChartOption);
    } else {
      mergeSeries(iChartOption, this.baseOption);
    }
    // 合并用户自定义visualMap
    mergeVisualMap(iChartOption, this.baseOption);
    // 处理特性
    mini(iChartOption, this.baseOption);
  }

  // 根据渲染出的结果，二次计算option
  updateOptionAgain(echartsIns) {
    const markLine = this.iChartOption.markLine;
    if (isArray(markLine)) {
      let top;
      let bottom;
      if (markLine.length > 1) {
        markLine.forEach(item => {
          item.newValue = item.yAxis || item.xAxis || item.value;
          if (!top && !bottom) {
            top = item;
            bottom = item;
          } else if (top.newValue < item.newValue) { 
            top = item;
          } else if (bottom.newValue > item.newValue) { 
            bottom = item;
          }
        })
      } else {
        top = markLine[0] || {};
        top.newValue = top?.yAxis || top?.xAxis || top?.value;
      }
      let topColor = top?.lineStyle?.color;
      let bottomColor = bottom?.lineStyle?.color;
      topColor = topColor && (topColor.includes('rgb') || topColor.includes('#')) ? topColor : undefined;
      bottomColor = bottomColor && (bottomColor.includes('rgb') || bottomColor.includes('#')) ? bottomColor : undefined;
      this.transformMarkLine = {
        top: top?.newValue,
        topColor: topColor,
        topPosition: top?.label?.position,
        topLabel: top?.label?.formatter,
        topUse: top?.belong,
        bottom: bottom?.newValue,
        bottomColor: bottomColor,
        bottomPosition: bottom?.label?.position,
        bottomLabel: bottom?.label?.formatter,
        bottomUse: bottom?.belong
      }
    }
    // 处理用户设置的阈值大于y轴，设置y轴max保证阈值显示
    if(this.iChartOption.markLine){
      handleMarkLineMax(this.baseOption, echartsIns, this.iChartOption);
    }
    // 面积图上部红色阈值区域需要在二次计算中实现 -- 在原有Series上添加areaStyle
    topArea(this.baseOption, this.iChartOption, echartsIns, this);
    // 面积图下部红色阈值区域需要在二次计算中实现 -- 植入假的同名Series
    bottomArea(this.baseOption, this.iChartOption, echartsIns, this);    
    // 坐标轴二次计算
    AdaptiveRectSys(this.baseOption, this.iChartOption, echartsIns, this)
    // 合并用户自定义series
    mergeSeries(this.iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  /**
   * 图表渲染完毕后，获得y刻度的最大值
   * @param {echartsIns为图表实例} echartsIns
   * @param {index为yAxis数组下标} index
   * _extent是一个数组，_extent[0]为该轴上最小值，_extent[1]为该轴上最大值
   */
  getYAxisMaxValue(echartsIns, index) {
    return echartsIns?.getModel()?.getComponent('yAxis', index)?.axis?.scale?._extent?.[1] || 1;
  }

  /**
   * 图表渲染完毕后，获得y轴刻度的最小值
   * @param {echartsIns为图表实例} echartsIns
   * @param {index为yAxis数组下标} index
   * _extent是一个数组，_extent[0]为该轴上最小值，_extent[1]为该轴上最大值
   */
  getYAxisMinValue(echartsIns, index) {
    return echartsIns?.getModel()?.getComponent('yAxis', index)?.axis?.scale?._extent?.[0] || 0;
  }

  resize(callback) {
    this.baseOption.legend = legend(this.iChartOption, 'LineChart', this.chartInstance);
    callback(this.baseOption);
  }
}

export default LineChart;
