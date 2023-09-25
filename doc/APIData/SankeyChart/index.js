import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import draggableMd from './draggable.md?raw'
import widthSpaceMd from './widthSpace.md?raw'
import orientMd from './orient.md?raw'
import nodeAlignMd from './nodeAlign.md?raw'

var data = {
    dataset: [
        theme,
        color,
        padding,
        tipHtml,
        ['data', '图表数据', 'object', "无"],
        ['draggable', '页面节点是否可拖动', 'boolean', "true"],
        ['widthSpace', '节点矩形样式配置', 'array', "[10,30]"],
        ['orient', '图表方向', 'string', "horizontal"],
        ['nodeAlign', '图表布局对齐方式', 'string', "left"],

    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        tipHtmlMd,
        dataMd,
        draggableMd,
        widthSpaceMd,
        orientMd,
        nodeAlignMd,
    ],
};


export default data;