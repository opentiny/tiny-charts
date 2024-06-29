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

function getAngleAxisToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        axisLine: {
            lineStyle: {
                color: token.angleAxisLineColor,
                width: token.angleAxisLineWidth,
                type: token.angleAxisLineType,
            },
        },
        splitLine: {
            lineStyle: {
                color: token.angleAxisSplitLineColor,
                width: token.angleAxisSplitLineWidth,
                type: token.angleAxisSplitLineType,
            },
        },
        axisTick: {
            lineStyle: {
                color: token.angleAxisTickLineColor,
                width: token.angleAxisTickLineWidth,
                type: token.angleAxisTickLineType,
            },
        },
        axisLabel: {
            fontSize: token.angleAxisLabelFontSize,
            color: token.angleAxisLabelColor,
        },
    }
    return generatedMatchedUiRule(echartsModule, uiRule, axisCommonPropertyPermissions)
}

export default getAngleAxisToken