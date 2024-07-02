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
import Theme from '../../../token'

function getTooltipToken() {
  const token = Theme.getToken()
  return {
    borderRadius: token.tooltipBorderRaduis,
    textStyle: {
      color: token.tooltipTextColor,
      fontSize: token.tooltipTextFontSize,
    },
    borderWidth: token.tooltipBorderWidth,
    padding: token.tooltipPadding,
    backgroundColor: token.tooltipBg,
    extraCssText: `box-shadow:0 ${token.tooltipShadowOffsetY}px ${token.tooltipShadowBlur}px 0 ${token.tooltipShadowColor};`,
  }
}

export default getTooltipToken