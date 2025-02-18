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

import Theme from '../../../feature/token';
import merge from '../../../util/merge';

function getThresholdMarkLineLabel() {
  const { colorError } = Theme.config.colorState
  return {
    label: {
      color: colorError,
      fontSize: Theme.config.markLineLabelFontSize,
      lineHeight: 20,
      position: 'insideEnd'
    },
    lineStyle: {
      color: colorError,
    },
  }
}


function setThresholdMarkLineLabel(markLine) {
  const thresholdLabel = getThresholdMarkLineLabel()
  merge(markLine, thresholdLabel)
}

// 默认场景就是阈值线
function getMarkLineDefault(isThreshold = false) {
  const lineStyle = {
    width: Theme.config.markLineWidth,
  }
  if (isThreshold) lineStyle.color = Theme.config.colorState.colorError
  return {
    symbol: 'none',
    silent: true,
    label: {
      show: false,
    },
    lineStyle: lineStyle,
    emphasis: {
      label: {
        show: false,
      },
      lineStyle: {
        width: Theme.config.markLineEmphasisWidth,
      },
    },
    data: [],
  };
}

function getMarkPointDefault() {
  return {
    symbol: 'path://M50 0 L0 50 L100 50 Z',
    symbolSize: [10, 6],
    label: {
      show: false,
    },
    data: [],
  };
}


export { getMarkLineDefault, getMarkPointDefault, setThresholdMarkLineLabel }