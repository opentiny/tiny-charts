import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { eventMd, event } from '../common/event'
import { titleMd, title } from '../common/title'
import dataMd from './data.md?raw'
import typeMd from './type.md?raw'
import silentMd from './silent.md?raw'
import labelMd from './label.md?raw'
import positionMd from './position.md?raw'
import itemStyleMd from './itemStyle.md?raw'
import minAngleMd from './minAngle.md?raw'
import stillShowZeroSumMd from './stillShowZeroSum.md?raw'
import selectedModeMd from './selectedMode.md?raw'
import roseTypeMd from './roseType.md?raw'

const data = {
    dataset: [
        theme,
        color,
        title,
        legend,
        tipHtml,
        tipHtmlStyle,
        event,
        ['data', '图表数据(必填)', 'array', '无'],
        ['type', '圆盘图类型', 'string', 'circle'],
        ['position', '图表位置及大小', 'object', '{center:[\'50%\',\'45%\'],radius: [\'44%\', \'50%\']}'],
        ['minAngle', '最小扇区角度', 'number', '无'],
        ['silent', '是否关闭hover动效', 'boolean', 'false'],
        ['label', '外侧文本配置', 'object', '默认显示'],
        ['itemStyle', '描边配置', 'object', '见说明'],
        ['stillShowZeroSum', '是否在数据和为0的时候仍显示扇区', 'boolean', 'true'],
        ['selectedMode', '扇区选中模式配置', 'boolean', 'false'],
        ['roseType', '是否展示成南丁格尔图', 'boolean', 'false'],

    ],
    markdown: [
        themeMd,
        colorMd,
        titleMd,
        legendMd,
        tipHtmlMd,
        tipHtmlStyleMd,
        eventMd,
        dataMd,
        typeMd,
        positionMd,
        minAngleMd,
        silentMd,
        labelMd,
        itemStyleMd,
        stillShowZeroSumMd,
        selectedModeMd,
        roseTypeMd,
    ],
};


export default data;