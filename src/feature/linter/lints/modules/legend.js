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
import { generatedMatchedUiRule } from './util'

function getLegendToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        padding: token.legendPadding,
        inactiveColor: token.legendInactiveColor,
        inactiveBorderColor: token.legendInactiveBorderColor,
        inactiveBorderWidth: token.legendInactiveBorderWidth,
        borderWidth: token.legendBorderWidth,
        textStyle: {
            fontSize: token.legendTextFontSize,
            color: token.legendTextColor,
            padding: token.legendTextPadding
        },
        pageTextStyle: {
            color: token.legendPageTextColor
        },
        pageIconColor: token.legendPageIconColor,
        pageIconInactiveColor: token.legendPageIconInactiveColor,
        itemGap: token.legendItemGap,
        itemStyle: {
            borderWidth: token.legendItemBorderWidth,
        }
    }
    // 以下待讨论
    // 图例富文本颜色
    // legendTextRichColor
    // 图例富文本颜色
    // legendTextRichFontSize
    // 图例富文本的padding
    // legendTextRichPadding
    // 圆形图例时每项的高度
    // legendCircleItemHeight
    // 方形图例时每项的高度
    // legendReactItemHeight

    const commonProperty = ['padding', 'inactiveColor', 'inactiveBorderColor', 'inactiveBorderWidth', 'borderWidth', 'textStyle', 'itemGap', 'itemStyle']
    const propertyPermissions = [
        {
            name: 'type',
            extraCondition: val => { return val && val === 'scroll' },
            correlationProperty: ['pageTextStyle', 'pageIconColor', 'pageIconInactiveColor']
        },
    ]
    return generatedMatchedUiRule(echartsModule, uiRule, propertyPermissions, commonProperty)



}

export default getLegendToken