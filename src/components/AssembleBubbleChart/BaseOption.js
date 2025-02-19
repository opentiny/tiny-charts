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
const BaseOption = {
  dataset: [
    {
      source: [],
    },
  ],
  // 图例颜色
  color: [],
  legend: {
    data: [],
    icon: 'circle',
    left: 'center',
    bottom: 0,
    textStyle: {},
  },
  hoverLayerThreshold: Infinity,
  series: [
    {
      type: 'custom',
      colorBy: 'data',
      renderItem: "",
      name: 'custom',
      coordinateSystem: 'none',
      encode: {
        tooltip: 'value',
        itemName: 'id',
      },
    },
  ],
};

const CHARTTYPE = {
  NON_NESTED: 'non-nested', // 非嵌套式
  NON_NESTED_AGGREGATE: 'non-nested-aggregate', // 非嵌套聚合式
  NESTED: 'nested', // 嵌套式
};

export default BaseOption;
export { CHARTTYPE };
