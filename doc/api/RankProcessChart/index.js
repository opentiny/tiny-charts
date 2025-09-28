import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tooltipMd, tooltip } from '../common/tooltip'
import dataMd from './data.md?raw'
import titleNameMd from './titleName.md?raw'
import valueNameMd from './valueName.md?raw'
import percentNameMd from './percentName.md?raw'
import sortMd from './sort.md?raw'

const data = {
    dataset: [
        theme,
        color,
        padding,
        tooltip,
        ['data', '图表数据', 'array', '无'],
        ['titleName', '名称列标题', 'string', '名称'],
        ['valueName', '数值列标题', 'string', '金额'],
        ['percentName', '百分比列标题', 'string', '百分比'],
        ['sort', '排序配置', 'object', '{ field: "value", order: "desc" }'],
    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        tooltipMd,
        dataMd,
        titleNameMd,
        valueNameMd,
        percentNameMd,
        sortMd,
    ]
}

export default data