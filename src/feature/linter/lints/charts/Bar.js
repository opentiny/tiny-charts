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
function getBarRule(echartsOpt) {
    const chartToken = Theme.getChartTokenByName(CHART_TYPE.BAR)
    let barObj = {
        series: {
            label: {
                color: chartToken.labelColor,
                fontSize: chartToken.fontSize,
            },
            barWidth: chartToken.barWidth,
        }
    }
    for (let i = 0; i < echartsOpt.series.length; i++) {
        if(echartsOpt.series[i].stack) {
            barObj.series.itemStyle = {
                borderColor: chartToken.borderColor,
                color: chartToken.color
            }
            barObj.series.emphasis = {
                itemStyle: {
                    borderColor: chartToken.borderColor,
                    color: chartToken.color
                }
            }
            break;
        }
        
    }
    return barObj
}

export default getBarRule