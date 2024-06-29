import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import nameMd from './name.md?raw'
import unitMd from './unit.md?raw'
import barWidthMd from './barWidth.md?raw'
import minWidthMd from './minWidth.md?raw'
import calibrationValueMd from './calibrationValue.md?raw'
import labelMd from './label.md?raw'
import stateMd from './state.md?raw'
import titleMd from './title.md?raw'
import textMd from './text.md?raw'

const data = {
    dataset: [
        theme,
        color,
        padding,
        tipHtml,
        event,
        ['data', '图表数据', 'array', '无'],
        ['name', '图表名称(必填)', 'array', '无'],
        ['unit', '进度图右侧文本单位', 'string', '见详情'],
        ['barWidth', '进度图柱形宽度', 'number', '见详情'],
        ['minWidth', '进度图单项数据的最小宽度', 'string', '无'],
        ['calibrationValue', '进度图标定值', 'number', '见详情'],
        ['label', '堆叠进度图图表图元文本样式', 'object', '无'],
        ['state', '根据状态设置颜色', 'object', '无'],
        ['title', '进度图图表标题样式', 'object', '无'],
        ['text', '进度图图表右侧文本样式', 'object', '无'],

    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        tipHtmlMd,
        eventMd,
        dataMd,
        nameMd,
        unitMd,
        barWidthMd,
        minWidthMd,
        calibrationValueMd,
        labelMd,
        stateMd,
        titleMd,
        textMd,
    ],
};


export default data;