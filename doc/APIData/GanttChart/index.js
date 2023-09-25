import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { paddingMd, padding } from '../common/padding'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import typeMd from './type.md?raw'
import chartPaddingMd from './chartPadding.md?raw'


var data = {
    dataset: [
        theme,
        tipHtml,
        ['data', '图表数据', 'array', "无"],
        ['chartPadding', '图表内边距', 'array', "[20, 30, 20, 30]"],
        ['type', '甘特图类型', 'string', "无"],

    ],
    markdown: [
        themeMd,
        tipHtmlMd,
        dataMd,
        chartPaddingMd,
        typeMd,
    ],
};


export default data;