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

function angleAxis(iChartOption, chartName) {
  let angleAxisOpt;
  switch (chartName) {
    case 'JadeJueChart':
      angleAxisOpt = base();
      angleAxisOpt.splitNumber = 5;
      angleAxisOpt.axisTick.show = true;
      merge(angleAxisOpt, iChartOption.angleAxis);
      break;
    case 'PolarBarChart':
      angleAxisOpt = base();;
      angleAxisOpt.type = 'category';
      angleAxisOpt.axisLine.show = true;
      angleAxisOpt.axisLabel.show = false;
      angleAxisOpt.splitLine.show = true;
      merge(angleAxisOpt, iChartOption.angleAxis);
      break;
    case 'CircleProcessChart':
      angleAxisOpt = {
        max: 100,
        show: false,
      };
      break;
    default:
      break;
  }
  return angleAxisOpt;
}

export default angleAxis;
