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
import { rectSysAxisPropertyPermissions, generatedMatchedUiRule } from './util'

function getxAxisToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        nameGap: token.xAxisNameGap,
        nameTextStyle: {
            color: token.xAxisNameColor,
            fontSize: token.xAxisNameFontSize,
        },
        splitLine: {
            lineStyle: {
                width: token.xAxisSplitLineWidth,
                color: token.xAxisSplitLineColor,
                type: token.xAxisSplitLineType,
            },
        },
        axisLine: {
            lineStyle: {
                width: token.xAxisLineWidth,
                color: token.xAxisLineColor,
                type: token.xAxisLineType,
            },
        },
        axisTick: {
            lineStyle: {
                width: token.xAxisTickLineWidth,
                color: token.xAxisTickLineColor,
                type: token.xAxisTickLineType,
            },
        },
        axisLabel: {
            color: token.xAxisLabelColor,
            fontSize: token.xAxisLabelFontSize,
        },
    }
    return generatedMatchedUiRule(echartsModule, uiRule, rectSysAxisPropertyPermissions)
}

export default getxAxisToken