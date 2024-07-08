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

// 图表类型
const CHARTTYPE = ['RectangularHeatMapChart', 'CalendarHeatMapChart', 'HexagonHeatMapChart'];

// 基础series
const SERIESUNIT = {
  RectangularHeatMapChart: {
    type: 'scatter',
    symbol: 'rect',
    symbolSize: '',
    cursor: 'pointer',
    data: [],
  },
  CalendarHeatMapChart: {
    name: '',
    type: 'heatmap',
    cursor: 'pointer',
    label: {
      show: undefined,
      color: '',
    },
    data: [],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
    itemStyle: {
      borderColor: '',
    },
    progressive: 1000,
    animation: false,
  },
  HexagonHeatMapChart: {
    type: 'custom',
    name: '',
    renderItem: undefined,
    data: [],
  },
};




// 热力图的图元颜色
const SYMBOLCOLOR = {
  RectangularHeatMapChart: '#F43146',
  CalendarHeatMapChart: '#1F55B5',
  HexagonHeatMapChart: ['#FFFFFF', '#448DFF', '#4350EA', '#33307C ', '#242648', '#973152', '#F8364D'],
};


export { SYMBOLCOLOR, CHARTTYPE, SERIESUNIT};
