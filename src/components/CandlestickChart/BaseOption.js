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
// 显示volume需要的grid
const VOLUMEGRID = [
  {
    left: '5%',
    right: '5%',
    height: '50%',
    top: '2%',
    containLabel: false,
  },
  {
    left: '5%',
    right: '5%',
    top: '63%',
    height: '25%',
    containLabel: false,
  },
];

const BASICSERIES = [
  {
    name: '日K',
    type: 'candlestick',
    data: undefined,
    itemStyle: {
      color: undefined,
      color0: undefined,
      borderColor: undefined,
      borderColor0: undefined,
    },
  },
];

export { BASICSERIES, VOLUMEGRID };
