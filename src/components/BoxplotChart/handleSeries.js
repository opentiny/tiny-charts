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
import cloneDeep from '../../util/cloneDeep';

const datasetInit = [
  {
    source: [],
  },
  {
    transform: {
      type: 'boxplot',
    },
  },
  {
    fromDatasetIndex: 1,
    fromTransformResult: 1,
  },
];

const seriesInit = [
  {
    name: 'boxplot',
    type: 'boxplot',
    datasetIndex: 1,
    itemStyle: {
      color: '',
      borderColor: ''
    },
  },
  {
    name: 'outlier',
    type: 'scatter',
    datasetIndex: 2,
    itemStyle: {
      color: '',
    },
  },
];

/**
 * 组装echarts所需要的dataset
 * @param {传入数据} data
 * @returns
 */
export function setDataset(data) {
  const dataset = cloneDeep(datasetInit);
  dataset[0].source = data;
  return dataset;
}

export function setSeries() {
  const series = cloneDeep(seriesInit);
  series[0].itemStyle.color = 'rgb(238, 243, 254)';
  series[0].itemStyle.borderColor = 'rgb(32, 112, 243)';
  series[1].itemStyle.color = 'rgb(32, 112, 243)';
  return series;
}
