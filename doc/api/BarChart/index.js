import { themeMd, theme } from '../common/theme'
import { paddingMd, padding } from '../common/padding'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { tooltipMd, tooltip } from '../common/tooltip'
import { xAxisMd, xAxis } from '../common/xAxis'
import { yAxisMd, yAxis } from '../common/yAxis'
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import itemStyleMd from './itemStyle.md?raw'
import typeMd from './type.md?raw'
import directionMd from './direction.md?raw'
import labelMd from './label.md?raw'
import lineDataNameMd from './lineDataName.md?raw'
import topTipHtmlMd from './topTipHtml.md?raw'
import markLineMd from './markLine.md?raw'

const data = {
    dataset: [
        theme,
        legend,
        xAxis,
        yAxis,
        padding,
        color,
        tooltip,
        dataZoom,
        event,
        ['data', '图表数据(必填)', 'array', '无'],
        ['type', '配置柱状图类型', 'string', 'bar'],
        ['topTipHtml', '顶部位置悬浮提示框', 'function', '默认不显示'],
        ['itemStyle', '柱体样式', 'object', '{barWidth:8,barGap:\'60 %\'}'],
        ['direction', '柱体方向', 'string', 'vertical'],
        ['label', '柱体文本', 'object | array', '默认不显示'],
        ['lineDataName', '柱状图更改为折线图的数据名', 'array', '无'],
        ['markLine', '阈值线配置', 'object', '默认不显示'],
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
        dataMd,
        typeMd,
        topTipHtmlMd,
        itemStyleMd,
        directionMd,
        labelMd,
        lineDataNameMd,
        markLineMd,
    ],
};


export default data;