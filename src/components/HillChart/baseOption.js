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
import chartToken from './chartToken';

export default function getBaseOption() {
  return {
    xAxis: {},
    yAxis: {},
    title: {},
    series: [
      {
        name: 'hill',
        type: 'pictorialBar',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        symbol:
          'path://M182.486185,115.849707 L137.966122,115.850379 C149.51482,98.3379479 157.744413,74.0044901 160.078145,45.9496406 C162.570754,73.8914827 170.909366,98.2800834 182.486185,115.849707 Z',
        markLine: {
          symbol: 'none',
          silent: true,
          label: {
            show: false,
          },
          lineStyle: {
            width: 1,
            color: chartToken.colorError,
          },
          emphasis: {
            label: {
              show: false,
            },
            lineStyle: {
              width: 1,
            },
          },
          data: [],
        },
      },
    ],
  };
}
