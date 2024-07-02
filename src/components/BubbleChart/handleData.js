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
/**
 * 从数据中拿出legend-data
 */
export function getLegendData(data) {
  return Object.keys(data);
}

/**
 * 从数据中拿出x轴的坐标数据
 */
export function getXAxisData(data) {
  const xAxisData = [];
  const dataValues = Object.values(data);
  dataValues.forEach((item) => {
    item.forEach((val) => {
      if (xAxisData.indexOf(val[0]) === -1) {
        xAxisData.push(val[0]);
      }
    });
  });
  return xAxisData;
}
