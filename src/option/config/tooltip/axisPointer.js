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
import Theme from '../../../feature/token';

function axisPointer(tooltip, chartName) {
  switch (chartName) {
    case 'ProcessBarChart':
    case 'BarChart':
      tooltip.axisPointer = {
        type: 'shadow',
        shadowStyle: {
          color: Theme.config.tooltipAxisPointerShadowColor,
        },
      };
      break;
    default:
      break;
  }
}

export default axisPointer;
