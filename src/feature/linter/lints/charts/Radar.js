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

// itemStyle  emphasis.itemStyle;待定
function getRadarRule() {
    const chartToken = Theme.getChartTokenByName(CHART_TYPE.RADAR)
    return {
        series: {
            symbolSize: chartToken.symbolSize-2,
            itemStyle: {
                borderWidth: chartToken.itemBorderWidth,
                borderColor: chartToken.itemBorderColor,
            },
            lineStyle: {
                width: chartToken.lineWidth,
            },
            emphasis: {
                itemStyle: {
                    color: chartToken.emphasisItemColor,
                    borderWidth: chartToken.emphasisItemBorderWidth
                },
            }
        }
    }
}

export default getRadarRule