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
import merge from '../../util/merge';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import init from '../../option/init';
import cloneDeep from '../../util/cloneDeep';
import BaseOption from '../../option/base';
import updateWidth from './barChartOption';
import RectCoordSys, { xkey, xdata, ldata, ydata } from '../../option/RectSys';
import { CHART_TYPE, ADAPTIVE_THEME } from '../../util/constants';
import { getTextWidth } from '../../util/dom';


class BarLineChart {

  static name = CHART_TYPE.BARLINE

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.chartInstance = chartInstance;
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, CHART_TYPE.BAR);
    // x轴key值
    const xAxisKey = xkey(iChartOption);
    // x轴数据
    const xAxisData = xdata(iChartOption.data, xAxisKey);
    // 图例数据
    const legendData = ldata(iChartOption.data, xAxisKey);
    // 连线的数据
    const seriesData = ydata(iChartOption.data, legendData);
    // 赋值数据
    this.baseOption.legend.data = iChartOption.legend.data || legendData;
    this.baseOption.xAxis.forEach(item => {
      item.data = xAxisData;
    });
   
  }

  // 根据渲染出的结果，二次计算option
  updateOptionAgain() {
    let baseOption = this.baseOption;
    const iChartOption = this.iChartOption;
    const lineOption = iChartOption.lineOption;
    const barOption = iChartOption.barOption;
    const lineDataName = lineOption.dataName;
    const barDataName = barOption.dataName;
    const series = [];
    const dataMaxObj = {};
    // 折线图数据
    if (lineDataName && lineDataName.length > 0) {
      const newLineOption = merge(iChartOption,lineOption);
      const lineChartBaseOpt = new LineChart(newLineOption, {}, this.chartInstance);
      const lineBaseOption = lineChartBaseOpt.getOption();
      const lineSeries = lineBaseOption.series;
      lineDataName.forEach(lineName => {
        for (let i = 0; i < lineSeries.length; i++) {
          if (lineSeries[i].name === lineName) {
           series.push(lineSeries[i]);
           dataMaxObj[lineSeries[i].name] = Math.max(...lineSeries[i].data);
          }
        }
        
      });
    }
    // 柱状图数据
    if (barDataName && lineDataName.length > 0) {
      const newBarOption = merge(iChartOption,barOption);
      const barChartBaseOpt = new BarChart(newBarOption, {}, this.chartInstance);
      const barBaseOption = barChartBaseOpt.getOption();
      const barSeries = barBaseOption.series;
      barDataName.forEach(lineName => {
        for (let i = 0; i < barSeries.length; i++) {
          if (barSeries[i].name === lineName) {
           series.push(barSeries[i]);
           dataMaxObj[barSeries[i].name] = Math.max(...barSeries[i].data);
          }
        }
      });
    }
    baseOption.series = series;
    // 处理双Y轴对齐
    if(baseOption.yAxis && baseOption.yAxis.length === 2) {
      const yAxisLeft = baseOption.yAxis[0];
      const yAxisRight = baseOption.yAxis[1];
      const yAxisLeftArr = [];
      const yAxisRightArr = [];
      yAxisLeft.dataName.forEach(item => {
        yAxisLeftArr.push(dataMaxObj[item]);
      })
      yAxisRight.dataName.forEach(item => {
        yAxisRightArr.push(dataMaxObj[item]);
      })
      const yAxisLeftMax = Math.max(...yAxisLeftArr);
      const yAxisRightMax = Math.max(...yAxisRightArr);
      const yAxisLeftUnit = yAxisLeft.unit ? yAxisLeft.unit : '';
      const yAxisRightUnit = yAxisRight.unit ? yAxisRight.unit : '';
      const leftNumerical = Math.floor((Math.floor(Math.log10(yAxisLeftMax)) ) / 3);
      const rightNumerical = Math.floor((Math.floor(Math.log10(yAxisRightMax)) ) / 3);
      const yAxisLeftLabelWidth = getTextWidth(yAxisLeftMax + yAxisLeftUnit) + 12 + leftNumerical * 4;
      const yAxisRightLabelWidth = getTextWidth(yAxisRightMax + yAxisRightUnit) + 12 + rightNumerical * 4;
      const leftNameTextStyle = yAxisLeft.nameTextStyle;
      const rightNameTextStyle = yAxisRight.nameTextStyle;
      if(!leftNameTextStyle) {
        yAxisLeft.nameTextStyle = {
          align: 'left',
          padding: [0, 0, 0, -yAxisLeftLabelWidth],
        }
      } else {
        leftNameTextStyle.align =  leftNameTextStyle.align ? leftNameTextStyle.align : 'left';
        leftNameTextStyle.padding =  leftNameTextStyle.padding ? leftNameTextStyle.padding : [0, 0, 0, -yAxisLeftLabelWidth];
      }
      if(!rightNameTextStyle) {
        yAxisRight.nameTextStyle = {
          align: 'right',
          padding: [0, -yAxisRightLabelWidth, 0, 0],
        }
      } else {
        rightNameTextStyle.align =  rightNameTextStyle.align ? rightNameTextStyle.align : 'right';
        rightNameTextStyle.padding =  rightNameTextStyle.padding ? rightNameTextStyle.padding : [0, -yAxisRightLabelWidth, 0, 0];
      }
      
    }
    
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }

  // 自适应柱条宽度
  resize(callback) {
    // 如果存在 dataZoom，提前返回
    if (this.baseOption.dataZoom[0].show === true) {
      return;
    };
    // 如果用户自定义了 barWidth，提前返回
    if (this.iChartOption.itemStyle?.barWidth) {
      return;
    }
    if (ADAPTIVE_THEME.includes(this.iChartOption.theme)) {
      updateWidth(this.baseOption, this.chartInstance, this.iChartOption);
      callback && callback(this.baseOption);
    }
  }
}

export default BarLineChart;
