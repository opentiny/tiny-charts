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
import getPieRule from './Pie'
import getBarRule from './Bar'
import getLineRule from './Line'
import getRadarRule from './Radar'

const chartRuleMap = {
    PieChart: getPieRule,
    BarChart: getBarRule,
    LineChart: getLineRule,
    RadarChart: getRadarRule
}

/**
 * 
 * @param {string} chartName  图表的名称
 * @param {object} echartsOpt  图表配置项
 */
function getUiRule(chartName, echartsOpt) {
    const moduleFn = chartRuleMap[chartName]
    const seriesUiRule = moduleFn ? moduleFn(echartsOpt) : {}
    return {
        ...seriesUiRule,
    }
}

export default getUiRule