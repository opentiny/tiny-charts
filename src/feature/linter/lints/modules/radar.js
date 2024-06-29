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
import { axisCommonPropertyPermissions, judgeAxisComonProperty, generatedMatchedUiRule } from './util'

function getRadarToken(echartsModule) {
    const token = Theme.getToken()
    const uiRule = {
        axisLine: {
            lineStyle: {
                color: token.radarAxisLineColor,
                width: token.radarAxisLineWidth,
                type: token.radarAxisLineType,
            },
        },
        axisTick: {
            lineStyle: {
                color: token.radarAxisTickLineColor,
                width: token.radarAxisTickLineWidth,
                type: token.radarAxisTickLineType
            }
        },
        axisLabel: {
            color: token.radarAxisLabelColor,
            fontSize: token.radarAxisLabelFontSize
        },
        splitLine: {
            lineStyle: {
                color: token.radarSplitLineColor,
                width: token.radarSplitLineWidth,
                type: token.radarSplitLineType,
            },
        },
        axisName: {
            color: token.radarAxisNameColor,
            fontSize: token.radarAxisNameFontSize,
        },
    }
    const propertyPermissions = [
        {
            name: 'axisName',
            extraCondition: judgeAxisComonProperty,
            correlationProperty: ['axisName']
        },
        ...axisCommonPropertyPermissions
    ]
    return generatedMatchedUiRule(echartsModule, uiRule, propertyPermissions)
}

export default getRadarToken