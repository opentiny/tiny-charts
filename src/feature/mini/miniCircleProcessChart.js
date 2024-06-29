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

// 微型场景下，不显示不必要的图元
function mini(iChartOption, baseOption) {
  if (iChartOption.mini) {
    baseOption.legend = Object.assign(baseOption.legend, {
      show: false
    });
    baseOption.title = merge(baseOption.title, {
      show: false
    });
    baseOption.tooltip = Object.assign(baseOption.tooltip, {
      show: false
    });
    baseOption.polar = Object.assign(baseOption.tooltip, {
      radius: ['70%', '100%']
    });
  }
}

export default mini;