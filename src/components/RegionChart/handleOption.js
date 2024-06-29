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
import merge from '../../util/merge';
import chartToken from './chartToken';

/**
 * 装载除series以外的一级属性
 * @param {传入数据} iChartOption
 * @returns
 */
export function setOption(iChartOption) {
  const { visualMap } = iChartOption;
  // 处理visualMap字体颜色随主题变化
  const defaultVisualMap = {
    textStyle: {
      color: chartToken.visualMapTextColor,
    },
  };
  visualMap && merge(visualMap, defaultVisualMap);
}
