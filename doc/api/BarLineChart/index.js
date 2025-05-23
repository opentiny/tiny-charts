import { themeMd, theme } from '../common/theme'
import { paddingMd, padding } from '../common/padding'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { tooltipMd, tooltip } from '../common/tooltip'
import { xAxisMd, xAxis } from '../common/xAxis'
import { yAxisMd, yAxis } from '../common/yAxis'
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import { eventMd, event } from '../common/event'
import markLineMd from './markLine.md?raw'
import lineOptionMd from './lineOption.md?raw'
import barOptionMd from './barOption.md?raw'

const data = {
    dataset: [
        theme,
        legend,
        xAxis,
        yAxis,
        padding,
        ['color', '颜色(用于柱状图)', 'array | string', '随主题'],
        tooltip,
        dataZoom,
        event,
        ['markLine', '阈值线配置', 'object', '默认不显示'],
        ['lineOption', '折线数据配置', 'object', '无'],
        ['barOption', '柱状数据配置', 'object', '无'],
    ],
    markdown: [
        themeMd,
        legendMd,
        xAxisMd,
        yAxisMd,
        paddingMd,
        colorMd,
        tooltipMd,
        dataZoomMd,
        eventMd,
        markLineMd,
        lineOptionMd,
        barOptionMd,
    ],
};


export default data;