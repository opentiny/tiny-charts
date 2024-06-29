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
function axisLine(xAxisUnit, xAxisItem, iChartOption) { 
  if (iChartOption.xAxisLine || xAxisItem.line) {
    const xAxisLine = iChartOption.xAxisLine || xAxisItem.line;
    if(xAxisLine.show === false){
      xAxisUnit.axisLine.show = false;
      xAxisUnit.axisTick.show = false;
      xAxisUnit.axisLabel.show = false;
    }
    if (xAxisLine.lineStyle) {
      Object.assign(xAxisUnit.axisLine.lineStyle, xAxisLine.lineStyle);
    }
    if (xAxisLine.textStyle) {
      Object.assign(xAxisUnit.axisLabel, xAxisLine.textStyle);
    }
  }
}

export default axisLine;
