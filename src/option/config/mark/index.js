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
import Theme from '../../../feature/token';

export function getMarkLineDefault() {
  return {
    symbol: 'none',
    silent: true,
    label: {
      show: false,
    },
    lineStyle: {
      width: Theme.config.markLineWidth,
    },
    emphasis: {
      label: {
        show: false,
      },
      lineStyle: {
        width: Theme.config.markLineEmphasisWidth,
      },
    },
    data: [],
  };
}

export function getMarkPointDefault() {
  return {
    symbol: 'path://M50 0 L0 50 L100 50 Z',
    symbolSize: [10, 6],
    label: {
      color: Theme.config.markPointLabelColor,
    },
    data: [],
  };
}
