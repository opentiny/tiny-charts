import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tooltipMd, tooltip } from '../common/tooltip'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import typeMd from './type.md?raw'
import borderColorMd from './borderColor.md?raw'
import showLabelMd from './showLabel.md?raw'
import rectangleSizeMd from './rectangleSize.md?raw'
import handleMd from './handle.md?raw'
import changePropertyMd from './changeProperty.md?raw'
import quantityMd from './quantity.md?raw'
import yAxisMd from './yAxis.md?raw'
import xAxisNameMd from '../special/xAxisName.md?raw'
import yAxisNameMd from '../special/yAxisName.md?raw'
import xAxisMd from '../special/xAxis.md?raw'
import xAxisLineMd from '../special/xAxisLine.md?raw'
import xAxisLabelRotateMd from '../special/xAxisLabelRotate.md?raw'
import xAxisIntervalMd from '../special/xAxisInterval.md?raw'

const data = {
    dataset: [
        theme,
        color,
        padding,
        tooltip,
        event,
        ['data', '图表数据', 'array', '无'],
        ['type', '配置热力图类型(必填)', 'string', '无'],
        ['borderColor', '日历热力图矩形边框色', 'string', '#1F55B5'],
        ['showLabel', '日历热力图矩形文本显示', 'boolean', 'true'],
        ['rectangleSize', '矩形热力图矩形大小', 'number', '8'],
        ['handle', '日历热力图手柄相关配置', 'object', '无'],
        ['quantity', '蜂窝热力图单行排列数量设置', 'number', '40'],
        ['changeProperty', '日历热力图热力的变化设置', 'string', 'opacity'],
        ['xAxis', '配置x轴坐标数据', 'object', '默认显示'],
        ['yAxis', '配置y轴', 'object', '默认显示'],
        ['xAxisName', '配置x轴文本(建议使用xAxis.name)', 'string', '无'],
        ['yAxisName', '配置y轴文本(建议使用yAxis.name)', 'string', '无'],
        ['xAxisLine', '设置x轴样式(建议使用xAxis.line)', 'object', '默认显示'],
        ['xAxisLabelRotate', 'x轴label旋转角度(建议使用xAxis.labelRotate)', 'number', '无'],
        ['xAxisInterval', '配置x轴label间距(建议使用xAxis.interval)', 'number | function', '0'],

    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        tooltipMd,
        eventMd,
        dataMd,
        typeMd,
        borderColorMd,
        showLabelMd,
        rectangleSizeMd,
        handleMd,
        quantityMd,
        changePropertyMd,
        xAxisMd,
        yAxisMd,
        xAxisNameMd,
        yAxisNameMd,
        xAxisLineMd,
        xAxisLabelRotateMd,
        xAxisIntervalMd,
    ],
};


export default data;