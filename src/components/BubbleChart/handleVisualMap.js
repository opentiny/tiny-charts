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
import min from '../../util/sort/min';
import max from '../../util/sort/max';

export function setVisualMap(baseOption, iChartOption, legendData) {
  const visualMap = [];
  const bubbleSize = iChartOption.bubbleSize || [10, 70];
  const radius = baseOption.dataset[0].source.map(item => {
    return item[2];
  });
  const minValue = min(radius);
  const maxValue = max(radius);
  const seriesIndex = new Array(legendData.length).fill(0).map((item, index) => {
    return index;
  });
  visualMap.push({
    show: false,
    dimension: 2,
    min: minValue,
    max: maxValue,
    seriesIndex,
    inRange: {
      symbolSize: bubbleSize,
    },
  });
  return visualMap;
}

// 设置数据集
export function setDataset(baseOption, iChartOption) {
  let source = [];
  Object.keys(iChartOption.data).forEach(key => {
    source = source.concat(iChartOption.data[key]);
  });
  return [
    {
      source,
    },
  ];
}
