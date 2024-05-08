/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
// 坐标轴刻度
function axisLabel(xAxisUnit, xAxisItem, iChartOption) { 
  // 自定义formatter 
  xAxisUnit.axisLabel.formatter = xAxisItem.formatter || undefined;
  // 显示间隔
  xAxisUnit.axisLabel.interval = iChartOption.xAxisInterval || xAxisItem.interval;
  // 旋转角度
  xAxisUnit.axisLabel.rotate = iChartOption.xAxisLabelRotate || xAxisItem.labelRotate;
  // 超出省略
  if (iChartOption.xAxisEllipsis || xAxisItem.ellipsis) {
    const xEllipsis = iChartOption.xAxisEllipsis || xAxisItem.ellipsis;
    xAxisUnit.axisLabel.overflow = xEllipsis.overflow || 'none';
    xAxisUnit.axisLabel.width = xEllipsis.labelWidth;
  }
}

export default axisLabel;
