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
    textStyle: {
      color: '#fff',
    },
  },
  hoverLayerThreshold: Infinity,
  series: [
    {
      type: 'custom',
      colorBy: 'data',
      renderItem: "",
      name: 'selfcustom',
      coordinateSystem: 'none',
      encode: {
        tooltip: 'value',
        itemName: 'id',
      },
    },
  ],
};
export default BaseOption;
