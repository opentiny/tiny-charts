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

function sortData(sort, data) {
  let legendName = [];
  // 升序
  if (sort == 'ascending') {
    const sortedData = [...data].sort((a, b) => { return a.value - b.value })
    sortedData.forEach((item) => {
      legendName.push(item.name);
    })
  }
  // 降序
  else {
    const sortedData = [...data].sort((a, b) => { return b.value - a.value })
    sortedData.forEach((item) => {
      legendName.push(item.name);
    })
  }
  return legendName
}

// 设置legend顺序
export function setLegend(baseOption) {
  let dataUnit = cloneDeep(baseOption.series[0].data);
  let data = [];
  let sort = [];
  if (dataUnit !== undefined) {
    data = dataUnit;
    sort = baseOption.series[0].sort;
  }
  let legendData = sortData(sort, data);
  return legendData
}
