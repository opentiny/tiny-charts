import { themeMd, theme } from '../common/theme'
import { tooltipMd, tooltip } from '../common/tooltip'
import dataMd from './data.md?raw'
import renderMd from './render.md?raw'
import layoutMd from './layout.md?raw'
import vGapMd from './vGap.md?raw'
import hGapMd from './hGap.md?raw'
import paddingMd from './padding.md?raw'

const data = {
    dataset: [
        tooltip,
        theme,
        ['padding', '图表内边距', 'string', '0px'],
        ['data', '图表数据', 'array', '无'],
        ['layout', '布局类型', 'string', 'common'],
        ['render', '每个节点的DOM', 'function', '无'],
        ['vGap', '垂直方向间距', 'number', '0'],
        ['hGap', '水平方向间距', 'number', '8'],
    ],
    markdown: [
        themeMd,
        paddingMd,
        dataMd,
        layoutMd,
        renderMd,
        tooltipMd,
        vGapMd,
        hGapMd,
    ],
};


export default data;