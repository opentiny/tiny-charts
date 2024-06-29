import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import seriesMd from './series.md?raw'

const data = {
    dataset: [
        theme,
        color,
        tipHtml,
        tipHtmlStyle,
        event,
        ['data', '图表数据', 'array', '无'],
        ['series', '图表series', 'object', '无'],

    ],
    markdown: [
        themeMd,
        colorMd,
        tipHtmlMd,
        tipHtmlStyleMd,
        eventMd,
        dataMd,
        seriesMd,
    ],
};


export default data;