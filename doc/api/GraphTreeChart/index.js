import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import chartPositionMd from './chartPosition.md?raw'
import categoriesMd from './categories.md?raw'
import forceMd from './force.md?raw'
import edgeSymbolMd from './edgeSymbol.md?raw'
import lineStyleMd from './lineStyle.md?raw'


const data = {
    dataset: [
        theme,
        event,
        ['data', '图表数据', 'array', '无'],
        ['chartPosition', '图表位置', 'array', '[\'center\',\'center\']'],
        ['categories', '设置节点样式', 'array', '见详情'],
        ['force', '设置力引导布局', 'object', '见详情'],
        ['edgeSymbol', '设置节点连线符号', 'array | string', '见详情'],
        ['lineStyle', '设置节点连线样式', 'object', '见详情'],

    ],
    markdown: [
        themeMd,
        eventMd,
        dataMd,
        chartPositionMd,
        categoriesMd,
        forceMd,
        edgeSymbolMd,
        lineStyleMd,
    ],
};


export default data;