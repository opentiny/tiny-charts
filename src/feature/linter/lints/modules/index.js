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
import getAngleAxisToken from './angleAxis'
import getColorToken from './color'
import getDataZoomToken from './dataZoom'
import getLegendToken from './legend'
import getRadarToken from './radar'
import getRadiusAxisToken from './radiusAxis'
import getTitleToken from './title'
import getTooltipToken from './tooltip'
import getxAxisToken from './xAxis'
import getyAxisToken from './yAxis'

const moduleMap = {
    angleAxis: getAngleAxisToken,
    color: getColorToken,
    dataZoom: getDataZoomToken,
    legend: getLegendToken,
    radar: getRadarToken,
    radiusAxis: getRadiusAxisToken,
    title: getTitleToken,
    tooltip: getTooltipToken,
    xAxis: getxAxisToken,
    yAxis: getyAxisToken
}

const moduleSourceCommon = [
    'dataZoom',
    'legend',
    // 暂时屏蔽title的检测
    // 'title',
    'tooltip',
    'xAxis',
    'yAxis',
]

const moduleSourceSpecial = [
    'angleAxis',
    'color',
    'radar',
    'radiusAxis',
]

/**
 * 
 * @param {object} moudle  echarts支持的模块对象
 * @param {string} moduleName  模块的名称
 * @returns {object} 返回当前模块的ui规范或者null
 */
function getComonRule(moudle, moduleName) {
    if (moudle && (moduleSourceSpecial.includes(moduleName) || (moduleSourceCommon.includes(moduleName) && moudle.show !== false))) return moduleMap[moduleName](moudle)
    return null
}

export default getComonRule