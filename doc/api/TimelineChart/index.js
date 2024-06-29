import { themeMd, theme } from '../common/theme'
import currentTimeMd from './currentTime.md?raw'
import timeRangeMd from './timeRange.md?raw'
import intervalMd from './interval.md?raw'
import mediumStepMd from './mediumStep.md?raw'
import alarmDataMd from './alarmData.md?raw'
import statusRangeDataMd from './statusRangeData.md?raw'
import customBackgroundMd from './customBackground.md?raw'
import backgroundMd from './background.md?raw'
import axisLineStyleMd from './axisLineStyle.md?raw'
import labelStyleMd from './labelStyle.md?raw'
import timeTooltipMd from './timeTooltip.md?raw'
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
        ['axisLineStyle', '自定义时间轴刻度线样式', 'object', '无'],
        ['labelStyle', '自定义时间轴标签文本样式', 'object', '无'],
        ['timeTooltip', '控制是否显示悬浮时间', 'boolean', 'false'],
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
        axisLineStyleMd,
        labelStyleMd,
        timeTooltipMd,
        onClickMd,
        onCircleHoverMd,
    ]
};
export default data;