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

function getBaseTitle() {
  return {
    text: '',
    subtext: '',
    top: 'center',
    left: 'center',
    itemGap: Theme.config.titleItemGap,
    textStyle: {
      color: Theme.config.titleTextColor,
      fontSize: Theme.config.titleTextFontSize,
      lineHeight: 28,
      fontWeight: 'normal',
    },
    subtextStyle: {
      color: Theme.config.titleSubTextColor,
      fontSize: Theme.config.titleSubtextFontSize,
      lineHeight: 24,
      fontWeight: 'normal',
    },
  };
}

function base() {
  return getBaseTitle();
}

export default base;
