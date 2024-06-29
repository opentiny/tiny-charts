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
import { axisCommonPropertyPermissions, generatedMatchedUiRule } from './util'

function getRadiusAxisToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        axisLine: {
            lineStyle: {
                color: token.radiusAxisLineColor,
                width: token.radiusAxisLineWidth,
                type: token.radiusAxisLineType,
            },
        },
        axisTick: {
            lineStyle: {
                color: token.radiusAxisTickLineColor,
                width: token.radiusAxisTickLineWidth,
                type: token.radiusAxisTickLineType,
            },
        },
        axisLabel: {
            color: token.radiusAxisLabelColor,
            fontSize: token.radiusAxisLabelFontSize,
            margin: token.radiusAxisLabelGap * 5,

        },
        splitLine: {
            lineStyle: {
                type: token.radiusAxisSplitLineType,
                color: token.radiusAxisSplitLineColor,
                width: token.radiusAxisSplitLineWidth,
            },
        },
    }
    return generatedMatchedUiRule(echartsModule, uiRule, axisCommonPropertyPermissions)
}

export default getRadiusAxisToken