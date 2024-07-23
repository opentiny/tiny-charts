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
import visualMap from '../../option/config/visualMap'

export function handleVisualMap(option, iChartOption) {
  let defaultVisualMap = visualMap(iChartOption.type || 'piecewise');
  if (iChartOption.visualMap) {
    const baseVisualMap = {
      show: true,
      right: 20,
      top: 'middle',
      align: 'left',
      itemHeight:30,
      inRange:{
        color: iChartOption.color
      }
    }
    merge(defaultVisualMap, baseVisualMap)
    option.visualMap = merge(defaultVisualMap, iChartOption.visualMap)
  }
}
