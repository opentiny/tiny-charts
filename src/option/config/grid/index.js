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
import { isArray } from '../../../util/type';

function grid(iChartOpt) {
  const gridUnit = base();
  gridUnit.top = iChartOpt.padding[0];
  gridUnit.left = iChartOpt.padding[3];
  gridUnit.right = iChartOpt.padding[1];
  gridUnit.bottom = iChartOpt.padding[2];
  let gridResult = iChartOpt.grid || [gridUnit];
  if (!isArray(gridResult)) {
    gridResult = [gridResult];
  }
  gridResult.forEach(item => {
    merge(gridUnit, item);
  });
  return gridResult;
}

export default grid;
