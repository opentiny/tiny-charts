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
import Token from '../../../feature/token';

function getBaseTitle() {
  return {
    text: '',
    subtext: '',
    top: 'center',
    left: 'center',
    itemGap: Token.config.titleItemGap,
    textStyle: {
      color: Token.config.titleTextColor,
      fontSize: Token.config.titleTextFontSize,
      lineHeight: 28,
      fontWeight: 'normal',
    },
    subtextStyle: {
      color: Token.config.titleSubTextColor,
      fontSize: Token.config.titleSubtextFontSize,
      lineHeight: 24,
      fontWeight: 'normal',
    },
  };
}

function base() {
  return getBaseTitle();
}

export default base;
