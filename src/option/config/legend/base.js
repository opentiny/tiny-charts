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
import { pageIconArr } from './pageIcon';
function getBaseOption() {
  return {
    data: [],
    icon: 'circle',
    left: 'center',
    bottom: 12,
    padding: Theme.config.legendPadding,
    inactiveColor: Theme.config.legendInactiveColor,
    inactiveBorderColor: Theme.config.legendInactiveBorderColor,
    inactiveBorderWidth: Theme.config.legendInactiveBorderWidth,
    borderWidth: Theme.config.legendBorderWidth,
    formatter: undefined,
    textStyle: {
      fontSize: Theme.config.legendTextFontSize,
      color: Theme.config.legendTextColor,
      align: 'left',
      verticalAlign: 'top',
      padding: Theme.config.legendTextPadding,
      rich: {
        a: {
          fontSize: Theme.config.legendTextRichFontSize,
          color: Theme.config.legendTextRichColor,
          align: 'left',
          verticalAlign: 'top',
          padding: Theme.config.legendTextRichPadding,
        },
        b: {
          fontSize: Theme.config.legendTextRichFontSize,
          color: Theme.config.legendTextRichColor,
          align: 'left',
          verticalAlign: 'top',
          padding: Theme.config.legendTextRichPadding,
        },
      },
      overflow: 'none',
      width: undefined,
    },
    width: undefined,
    pageTextStyle: {
      color: Theme.config.legendPageTextColor,
    },
    pageIconColor: Theme.config.legendPageIconColor,
    pageIconInactiveColor: Theme.config.legendPageIconInactiveColor,
    pageIcons: {
      horizontal: pageIconArr,
      vertical: pageIconArr,
    },
    selectedMode: true,
    align: 'left',
    itemGap: Theme.config.legendItemGap,
    itemWidth: Theme.config.legendCircleItemWidth,
    itemHeight: Theme.config.legendCircleItemHeight,
    itemStyle: {
      borderWidth: Theme.config.legendItemBorderWidth,
    },
  };
}

function base() {
  return getBaseOption();
}

export default base;
