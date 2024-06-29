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
import cloneDeep from '../../util/cloneDeep';
import BaseOption from './BaseOption';
import init from '../../option/init';
import merge, { mergeSeries } from '../../util/merge';
import {
  padSize,
  setLabel,
  handleLineStyle,
  dataSort,
  nodeLabelLayout,
  handleItemStyle,
  compareNodeText,
  setEmptyLimit,
  isNameRepeat,
  initNodes
} from './handleOption';
import { setTooltip } from './tooltip';
import { CHART_TYPE } from '../../util/constants';

class SankeyChart {

  static name = CHART_TYPE.SANKEY


  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption());
    // 记录下用户传入的初始的padding值
    this.userPadding = iChartOption.padding || iChartOption.chartPadding;
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    // 配置数据
    const { data: { nodes, links },
      draggable = true,
      tipHtml,
      widthSpace = [10, 30],
      nodeAlign = 'justify',
      label = {}
    } = iChartOption;
    // 如果nodes中没有定义value，需要根据links，给其赋值
    initNodes(nodes, links);
    this.baseOption.series[0].data = nodes;
    this.baseOption.series[0].links = links;
    if (!nodes || !nodes.length || !links || !links.length) { // 数据不全，不执行后续操作
      return;
    }
    // 判断nodes是否有重名，抛错
    isNameRepeat(nodes);
    // 是否设置移动
    this.baseOption.series[0].draggable = draggable;
    // 配置颜色组
    handleItemStyle(iChartOption, this.baseOption);
    // 配置提示悬浮框样式
    setTooltip(iChartOption, tipHtml, this.baseOption);
    // 配置桑基图label属性
    setLabel(iChartOption, this.baseOption);
    // 数据排序，并且补全空值
    setEmptyLimit(nodes);
    // 配置节点矩形的宽度及每列间距
    this.baseOption.series[0].nodeWidth = widthSpace[0];
    this.baseOption.series[0].nodeGap = widthSpace[1];
    // 配置桑基图的布局对齐方式
    this.baseOption.series[0].nodeAlign = nodeAlign;
    // 配置桑基图lineStyle属性
    handleLineStyle(iChartOption);
    // 设置节点文本的展示方式(横向布局，纵向布局)
    nodeLabelLayout(label, this.baseOption);
    // 对比节点与其文本的高度,文本过高则隐藏(需要调取echarts的原生api)
    compareNodeText(iChartOption, this.baseOption, this, chartInstance);
  }

  upDateOption(centerName, leftNodeArr, rightNodeArr) {
    // 配置chartPadding
    const { grid = {}, xAxis, yAxis = { show: false }, tooltip = {}, title, padding, chartPadding } = this.iChartOption;
    padSize(padding || chartPadding, { baseOpt: this.baseOption, userPadding: this.userPadding }, centerName, leftNodeArr, rightNodeArr);
    dataSort(this.iChartOption);
    mergeSeries(this.iChartOption, this.baseOption);
    merge(this.baseOption, {
      grid,
      xAxis: xAxis[0].data && xAxis[0].data.length ? xAxis : { show: false },
      yAxis,
      tooltip,
      title
    });
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default SankeyChart;
