/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import base from './base';
import axisPointer from './axisPointer';
import merge from '../../../util/merge';

/**
 * tipHtml 和 tipHtmlStyle 为旧属性，后续逐步废弃
 */
function tooltip(iChartOption, chartName) {
  const formatter = iChartOption.tipHtml;
  const formatterStyle = iChartOption.tipHtmlStyle;
  const tooltip = base(chartName);
  if (formatter) {
    tooltip.formatter = formatter;
  }
  if (formatterStyle) {
    tooltip.padding = formatterStyle.padding || tooltip.padding;
    tooltip.backgroundColor = formatterStyle.backgroundColor || tooltip.backgroundColor;
  }
  axisPointer(tooltip, chartName);
  merge(tooltip, iChartOption.tooltip);
  return tooltip;
}

export default tooltip;
