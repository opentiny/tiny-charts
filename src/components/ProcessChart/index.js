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
import miniProcess from '../../feature/mini/miniProcessChart';
import RectCoordSys from '../../option/RectSys';
import { PROCESSBARTYPE, CHARTTYPENAME } from './BaseOption';
import handleData from './handleData';
import { handleGrid, handleYaxis, handleXaxis, handleDataZoom, handleLegend, handleTooltip } from './handleOption';
import handleSeries, { setNameSeriesWidth } from './handleSeries';
import cloneDeep from '../../util/cloneDeep';
import { CHART_TYPE } from '../../util/constants';
import { mergeSeries } from '../../util/merge';
import { isArray } from '../../util/type';
import setA2ui from '../../feature/a2ui';
import updateWidth from '../BarChart/barChartOption';

class ProcessChart {

  static name = CHART_TYPE.PROCESS

  constructor(iChartOption, chartInstance) {
    // 保存初始的iChartOption
    this.initIchartOption = cloneDeep(iChartOption);
    this.baseOption = {};
    this.iChartOption = {};
    this.chartName = CHART_TYPE.PROCESS;
    this.dom = chartInstance._dom;
    this.chartInstance = chartInstance;
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    if (!iChartOption.name) {
      throw new Error('ProcessChart must have a name');
    }
    // 加载默认的直角坐标系
    RectCoordSys(this.baseOption, iChartOption, iChartOption.name, this.chartInstance);
    // 是否是基础双向进度图
    const doubleSide = iChartOption.name === CHARTTYPENAME.ProcessBarChart && iChartOption.type && iChartOption.type === PROCESSBARTYPE;
    const dataSet = handleData(iChartOption, doubleSide);
    this.dataSet = dataSet;
    if (!dataSet) return;

    handleGrid(this.baseOption, iChartOption, doubleSide, this.chartInstance);

    handleYaxis(this.baseOption, iChartOption, dataSet, doubleSide);

    handleXaxis(this.baseOption, doubleSide, iChartOption);
    // datazoom和legend会在init配置默认值做特殊处理手动用初始值做混合
    handleDataZoom(this.baseOption, this.initIchartOption);

    handleLegend(this.baseOption, dataSet, doubleSide, this.initIchartOption);

    handleSeries(this.baseOption, iChartOption, dataSet, doubleSide, this.chartInstance);

    handleTooltip(this.baseOption, iChartOption, dataSet, doubleSide);
    // 合并用户自定义series
    mergeSeries(iChartOption, this.baseOption);
    // 处理特性
    miniProcess(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }

  // 更新name的宽度
  resize(callback){
    let series = this.baseOption?.series;
    if(series && isArray(series) && series.length > 0) {
      let nameSeries;
      series.forEach(element => {
          if(element.name === 'seriesName'){
            nameSeries = element;
          }
      });
      if (this.iChartOption.a2ui) {
        setA2ui(this.iChartOption, this);
        updateWidth(this.baseOption, this.chartInstance, {...this.iChartOption, type:'contain', direction: 'horizontal', rawBarwidth: 20});
        miniProcess(this.iChartOption, this.baseOption);
      }
      setNameSeriesWidth(nameSeries, this.dataSet, this.iChartOption, this.chartInstance);
      callback(this.baseOption, { notMerge: false })
    };
  }

}

export default ProcessChart;
