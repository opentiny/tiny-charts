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
import Theme from '../../feature/token';
import merge from '../../util/merge';
import chartToken from './chartToken';

/**
 * 配置山峰图高亮状态
 * @param {*} baseOpt
 * @param {*} iChartOpt
 */
export const handleEmphasis = (baseOpt, iChartOpt) => {
  const { emphasis } = iChartOpt;
  const defaultEmphasis = {
    disabled: true,
    label: {
      // 为啥是蓝色待确定
      color: Theme.config.colorState.colorInfo,
    },
    itemStyle: {
      borderColor: chartToken.emphasisItemBorderColor,
      borderWidth: 2,
    },
  };
  merge(defaultEmphasis, emphasis);
  baseOpt.series[0] = {
    ...baseOpt.series[0],
    emphasis: defaultEmphasis,
  };
};
