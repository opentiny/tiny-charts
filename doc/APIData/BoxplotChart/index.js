import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import seriesMd from './series.md?raw'
import datasetMd from './dataset.md?raw'

var data = {
    dataset: [
        theme,
        color,
        tipHtml,
        tipHtmlStyle,
        event,
        ['data', '图表数据', 'array', "无"],
        ['series', '自定义图表series', 'array', "无"],
        ['dataset', '自定义图表dataset', 'array', "无"],

    ],
    markdown: [
        themeMd,
        colorMd,
        tipHtmlMd,
        tipHtmlStyleMd,
        eventMd,
        dataMd,
        seriesMd,
        datasetMd
    ],
};


export default data;