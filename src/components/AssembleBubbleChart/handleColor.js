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
import { codeToRGB, getColor } from '../../util/color';
import chartToken from './chartToken';

export function handleColor(params, baseOption) {
  // 处理depth=1的数据
  handleDepthFirst(params, baseOption);
  // 处理depth>=2的数据
  handleDepthMore(params, baseOption);
}

const handleDepthFirst = (params, baseOption) => {
  const { depthFirst, type } = params;
  let hasRecord = []; // 已记录过的类型
  baseOption.legend.data = [];
  depthFirst.forEach((item) => {
    if (!baseOption.legend.data.includes(item.type)) {
      let typeColor = getColor(params.color, hasRecord.length);
      baseOption.legend.data.push(item.type);
      hasRecord.push({
        type: item.type,
        color: typeColor
      });
      item.color = typeColor;
      item.borderColor = typeColor;
      if (type === 'nested') {
        item.color = codeToRGB(typeColor, .2);
      }
    } else {
      hasRecord.forEach((record) => {
        if (record.type === item.type) {
          item.color = record.color;
        }
      });
    }
  });
};

const handleDepthMore = (params, baseOption) => {
  const { depthMore, depthFirst } = params;
  baseOption.dataset[0].source.forEach((item) => {
    item.textColor = chartToken.labelColor;
  });
  if (depthMore && depthMore.length) {
    depthMore.forEach(item => {
      depthFirst.forEach(parent => {
        if (parent.id === item.id.substring(0, item.id.lastIndexOf('.'))) {
          item.color = codeToRGB(parent.borderColor, .2);
          item.borderColor = parent.borderColor;
        }
      });
    });
  }
};