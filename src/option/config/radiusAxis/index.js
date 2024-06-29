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
import merge from '../../../util/merge';
import Theme from '../../../feature/token';

function radiusAxis(iChartOption, chartName) {
  let radiusAxisOpt;
  switch (chartName) {
    case 'JadeJueChart':
      radiusAxisOpt = base();
      merge(radiusAxisOpt, iChartOption.radiusAxis);
      break;
    case 'PolarBarChart':
      radiusAxisOpt = base();
      radiusAxisOpt.axisLabel.margin = Theme.config.radiusAxisLabelGap;
      merge(radiusAxisOpt, iChartOption.radiusAxis);
      break;
    case 'CircleProcessChart':
      radiusAxisOpt = {
        type: 'category',
        show: false,
      };
      break;
    default:
      break;
  }

  return radiusAxisOpt;
}

export default radiusAxis;
