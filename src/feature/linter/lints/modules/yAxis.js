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

function getyAxisToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        nameGap: token.yAxisNameGap,
        nameTextStyle: {
            color: token.yAxisNameColor,
            fontSize: token.yAxisNameFontSize,
        },
        splitLine: {
            lineStyle: {
                width: token.yAxisSplitLineWidth,
                type: token.yAxisSplitLineType,
                color: token.yAxisSplitLineColor,
            },
        },
        axisLine: {
            lineStyle: {
                width: token.yAxisLineWidth,
                type: token.yAxisLineType,
                color: token.yAxisLineColor,
            },
        },
        axisTick: {
            lineStyle: {
                width: token.yAxisTickLineWidth,
                type: token.yAxisTickLineType,
                color: token.yAxisTickLineColor,
            },
        },
        axisLabel: {
            color: token.yAxisLabelColor,
            fontSize: token.yAxisLabelFontSize,
        },
    }
    return generatedMatchedUiRule(echartsModule, uiRule, rectSysAxisPropertyPermissions)
}

export default getyAxisToken