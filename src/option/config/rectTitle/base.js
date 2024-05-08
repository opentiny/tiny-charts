/**
 * Copyright (c) 2024 - present TinyCharts Authors.
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

// 直角坐标系中的title用于y轴名称
function getBaseOption() {
  return {
    text: '',
    textStyle: {
      fontWeight: 'normal',
      color: Theme.config.yAxisNameColor,
      fontSize: Theme.config.yAxisNameFontSize,
    },
    padding: [0, 0, 0, 0],
  };
}

function base() {
  return getBaseOption();
}

export default base;
