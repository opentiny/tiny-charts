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
import base from './base';
import icon from './icon';
import size from './size';
import position from './position';
import textStyle from './textStyle';
import itemStyle from './itemStyle';
import merge from '../../../util/merge';
import setPolymorphism from './polymorphism';
import xkey from '../xAxis/xkey';
import ldata from './ldata';
import { updateLegendOccupancy } from './calculate';

function legend(iChartOption, chartName, chartInstance) {
  const selfLegend = iChartOption.legend;
  const {
    data,
    show,
    orient,
    formatter,
    selectedMode,
  } = selfLegend;
  const legend = base();
  // 控制显示
  if (!show) {
    legend.show = false;
  }
  // 图例排布方向
  if (orient) {
    legend.orient = orient;
  }
  // 图例选择模式, 当 selectedMode == false 时表示不可点击
  legend.selectedMode = selectedMode !== undefined ? selectedMode : true;
  // 图例位置
  position(legend, selfLegend);
  // 图例整体的宽高
  size(legend, selfLegend);
  // 图例样式
  itemStyle(legend, chartName);
  // 图例文本格式化
  legend.formatter = formatter;
  // 图例图标大小
  legend.itemWidth = selfLegend.itemWidth || legend.itemWidth;
  legend.itemHeight = selfLegend.itemHeight || legend.itemHeight;
  // 图例每项之间的间隔
  legend.itemGap = selfLegend.itemGap || legend.itemGap;
  // 数据
  legend.data = data;
  // 配置图例富文本样式
  textStyle(legend, selfLegend.textStyle);
  merge(legend, iChartOption.legend);
  // 自定义icon
  icon(legend, iChartOption);
  // 图例多形态
  if( legend.orient === 'vertical' ){
    setPolymorphism(legend, iChartOption)
  }
  const updateLegendCharts = ['PieChart'];
  if (updateLegendCharts.includes(chartName) && iChartOption.adaptive && legend.orient === 'vertical'){
    const xAxisKey = xkey(iChartOption);
    const lData = ldata(iChartOption.data, xAxisKey);
    const legendData = iChartOption.data.map(item => item[lData[0]]) || []
    updateLegendOccupancy(iChartOption, legend, legendData, chartInstance)
  }
  return legend;
}

export default legend;
