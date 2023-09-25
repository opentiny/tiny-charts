import { themeMd, theme } from '../common/theme'
import { paddingMd, padding } from '../common/padding'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { xAxisMd, xAxis } from '../common/xAxis'
import { yAxisMd, yAxis } from '../common/yAxis'
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import { eventMd, event } from '../common/event'
import { linearGradientMd, linearGradient } from '../common/linearGradient'
import dataMd from './data.md?raw'
import itemStyleMd from './itemStyle.md?raw'
import typeMd from './type.md?raw'
import directionMd from './direction.md?raw'
import labelMd from './label.md?raw'
import lineDataNameMd from './lineDataName.md?raw'
import stepGradientMd from './stepGradient.md?raw'
import axisPointerMd from './axisPointer.md?raw'
import topTipHtmlMd from './topTipHtml.md?raw'
import markLineMd from './markLine.md?raw'

var data = {
    dataset: [
        theme,
        padding,
        color,
        legend,
        tipHtml,
        tipHtmlStyle,
        xAxis,
        yAxis,
        dataZoom,
        linearGradient,
        event,
        ['data', '图表数据(必填)', 'array', '无'],
        ['type', '配置柱状图类型', 'string', 'bar'],
        ['itemStyle', '柱体样式', 'object', "{barWidth:8,barGap:'60 %'}"],
        ['direction', '柱体方向', 'string', "vertical"],
        ['label', '柱体文本', 'object | array', "默认不显示"],
        ['lineDataName', '柱状图更改为折线图的数据名', 'array', "无"],
        ['stepGradient', '柱体分段渐变', 'array', "无"],
        ['axisPointer', '坐标指示器样式（数据背景区域样式）', 'object', "rgba(25,25,25,0.08)"],
        ['topTipHtml', '顶部位置悬浮提示框', 'function', "默认不显示"],
        ['markLine', '阈值线配置', 'object', "默认不显示"],
    ],
    markdown: [
        themeMd,
        paddingMd,
        colorMd,
        legendMd,
        tipHtmlMd,
        tipHtmlStyleMd,
        xAxisMd,
        yAxisMd,
        dataZoomMd,
        linearGradientMd,
        eventMd,
        dataMd,
        typeMd,
        itemStyleMd,
        directionMd,
        labelMd,
        lineDataNameMd,
        stepGradientMd,
        axisPointerMd,
        topTipHtmlMd,
        markLineMd,
    ],
};


export default data;