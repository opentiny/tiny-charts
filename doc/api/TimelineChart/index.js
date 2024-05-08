/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { themeMd, theme } from '../common/theme'
import currentTimeMd from './currentTime.md?raw'
import timeRangeMd from './timeRange.md?raw'
import intervalMd from './interval.md?raw'
import mediumStepMd from './mediumStep.md?raw'
import alarmDataMd from './alarmData.md?raw'
import statusRangeDataMd from './statusRangeData.md?raw'
import customBackgroundMd from './customBackground.md?raw'
import backgroundMd from './background.md?raw'
import onClickMd from './onClick.md?raw'
import onCircleHoverMd from './onCircleHover.md?raw'

const data = {
    dataset: [
        theme,
        ['timeRange', '时间范围（必填）', 'object', '无'],
        ['currentTime', '当前时间', 'data', 'new Date()'],
        ['mediumStep', '大刻度时间间隔（分钟）', 'number', '60'],
        ['interval', '小刻度时间间隔（分钟）', 'number', '10'],
        ['alarmData', '警告事件数据', 'object', '无'],
        ['statusRangeData', '警告事件状态区间数据', 'array', '无'],
        ['customBackground', '自定义警告事件背景色', 'object', '无'],
        ['background', '自定义时间轴背景色', 'string', '无'],
        ['onClick', '时间轴点击事件', 'function', '无'],
        ['onCircleHover', '时间轴圆点悬浮事件', 'function', '无'],
    ],
    markdown: [
        themeMd,
        timeRangeMd,
        currentTimeMd,
        mediumStepMd,
        intervalMd,
        alarmDataMd,
        statusRangeDataMd,
        customBackgroundMd,
        backgroundMd,
        onClickMd,
        onCircleHoverMd,
    ]
};
export default data;