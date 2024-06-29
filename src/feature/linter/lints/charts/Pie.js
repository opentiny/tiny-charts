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
import Theme from "../../../token"
import { CHART_TYPE } from '../../../../util/constants'

function getPieRule() {
    const chartToken = Theme.getChartTokenByName(CHART_TYPE.PIE)
    return {
        series: {
            itemStyle: {
                borderWidth:chartToken.borderWidth,
                borderColor: chartToken.borderColor,
                borderRadius: chartToken.borderRadius,
            },
            label: {
                color: chartToken.labelColor,
                fontSize: chartToken.fontSize
            },
            labelLine: {
                lineStyle: {
                    color: chartToken.labelLineColor,
                },
                length: chartToken.labelLineLength,
                length2: chartToken.labelLineLength
            },
        }
    }
}

export default getPieRule