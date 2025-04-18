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
import { pageIconArr } from './pageIcon';
import { getUnitAnimationConfig } from '../animation'

function getBaseOption() {
  return {
    data: [],
    icon: 'circle',
    left: 'center',
    bottom: 12,
    padding: Token.config.legendPadding,
    inactiveColor: Token.config.legendInactiveColor,
    inactiveBorderColor: Token.config.legendInactiveBorderColor,
    inactiveBorderWidth: Token.config.legendInactiveBorderWidth,
    borderWidth: Token.config.legendBorderWidth,
    formatter: undefined,
    textStyle: {
      fontSize: Token.config.legendTextFontSize,
      color: Token.config.legendTextColor,
      padding: Token.config.legendTextPadding,
      rich:{
        title:{
          verticalAlign:'middle'
        }
      },
      overflow: 'none',
      width: undefined,
    },
    width: undefined,
    pageTextStyle: {
      color: Token.config.legendPageTextColor,
    },
    pageIconColor: Token.config.legendPageIconColor,
    pageIconInactiveColor: Token.config.legendPageIconInactiveColor,
    pageIcons: {
      horizontal: pageIconArr,
      vertical: pageIconArr,
    },
    selectedMode: true,
    align: 'left',
    itemGap: Token.config.legendItemGap,
    itemWidth: Token.config.legendItemWidth,
    itemHeight: Token.config.legendCircleItemHeight,
    itemStyle: {
      borderWidth: Token.config.legendItemBorderWidth,
      opacity:1,
    },
    ...getUnitAnimationConfig()
  };
}

function base() {
  return getBaseOption();
}

export default base;
