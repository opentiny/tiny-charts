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
import chartToken from './chartToken';

export const seriesInit = {
  center: ['50%', '50%'],
  radius: ['12%', '70%'],
  type: 'sunburst',
  sort: undefined,
  emphasis: {
    focus: 'descendant',
  },
  itemStyle: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '',
  },
  data: [],
  label: {
    rotate: 0,
    color: '',
  },
  levels: [],
};

/**
 * 组装echarts所需要的series
 * @param {传入数据} iChartOption
 * @returns
 */
export function setSeries(iChartOption) {
  const { data } = iChartOption;
  const series = cloneDeep(seriesInit);
  series.data = data;
  series.itemStyle.borderColor = chartToken.itemBorderColor;
  series.label.color = chartToken.labelColor;
  return series;
}
