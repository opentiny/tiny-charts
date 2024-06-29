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
import { isArray } from '../../util/type';
import merge from '../../util/merge';

// 微型场景下，不显示不必要的图元
function mini(iChartOption, baseOption) {
  if (iChartOption.mini) {
    baseOption.grid.forEach(item => {
      Object.assign(item, {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: false,
      });
    });

    baseOption.legend = Object.assign(baseOption.legend, {
      show: false
    });
    baseOption.title = merge(baseOption.title, {
      show: false
    });
    baseOption.tooltip = Object.assign(baseOption.tooltip, {
      show: false
    });
    if (!isArray(baseOption.xAxis)) {
      baseOption.xAxis = [baseOption.xAxis];
    }
    if (!isArray(baseOption.yAxis)) {
      baseOption.yAxis = [baseOption.yAxis];
    }
    baseOption.xAxis.forEach(item => {
      Object.assign(item, {
        show: false,
        boundaryGap: true,
      });
    });
    baseOption.yAxis.forEach(item => {
      Object.assign(item, {
        show: false,
        max: 'dataMax',
      });
    });
  }
}

export default mini;