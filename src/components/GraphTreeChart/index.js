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
import { BaseOption } from './BaseOption';
import cloneDeep from '../../util/cloneDeep';
import { handleData, updateData } from './handleData';
import { handleCategories, handleForce, handleArrow, handlePosition, handleLineStyle } from './handleOption';
import { mixTree } from './mixTree';
import { CHART_TYPE } from '../../util/constants';

class GraphTreeChart {

  static name = CHART_TYPE.GRAPH_TREE

  constructor(iChartOption, chartInstance) {
    this.rootData = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    // 配置主题
    const theme = iChartOption.theme || 'light';
    // 处理节点类目样式
    handleCategories(iChartOption, this.baseOption, theme);
    // 处理基础数据
    const { rootData } = handleData(iChartOption.data, this.baseOption);
    this.rootData = { ...rootData };
    // 处理force配置(节点间距、节点密集度、节点连线长度、树趋近率)
    handleForce(iChartOption, this.baseOption);
    // 配置节点连线箭头
    handleArrow(iChartOption, this.baseOption, theme);
    // 处理图表位置
    handlePosition(iChartOption, this.baseOption);
    // 配置节点连线样式
    handleLineStyle(iChartOption, this.baseOption, theme);
    // GraphTreeChart聚合树图, 需要走一遍echarts Tree图获取节点对应坐标;
    mixTree(this, chartInstance, this.baseOption);
  }

  updateNodesData(positionArr, idArr) {
    // 将获取到的坐标和id匹配起来传给nodes，更新nodes数据
    updateData(this.rootData, this.baseOption, positionArr, idArr);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default GraphTreeChart;
