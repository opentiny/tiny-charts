import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { xAxisMd, xAxis } from '../common/xAxis';
import { yAxisMd, yAxis } from '../common/yAxis';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import chartPaddingMd from './chartPadding.md?raw';
import opacityMd from './opacity.md?raw';
import textMd from './text.md?raw';
import coincideMd from './coincide.md?raw';
import axisMd from './axis.md?raw';
import gradientColorMd from './gradientColor.md?raw';
import xAxisLineMd from '../special/xAxisLine.md?raw';
import xAxisLabelRotateMd from '../special/xAxisLabelRotate.md?raw';
import xAxisIntervalMd from '../special/xAxisInterval.md?raw';
import xAxisFullGridMd from '../special/xAxisFullGrid.md?raw';
import xAxisEllipsis from '../special/xAxisEllipsis.md?raw';
import xAxisNameMd from '../special/xAxisName.md?raw';
import yAxisNameMd from '../special/yAxisName.md?raw';
import markLineMd from './markLine.md?raw';
import emphasisMd from './emphasis.md?raw';

var data = {
    dataset: [
        theme,
        color,
        tipHtml,
        xAxis,
        yAxis,
        event,
        ['data', '图表数据', 'array', "无"],
        ['chartPadding', '图表内边距', 'array', "[50, 20, 50, 20]"],
        ['opacity', '图表透明度', 'number', "0.8"],
        ['text', '山峰图顶部底部文本样式', 'object', "无"],
        ['coincide', '相邻山峰图间隔', 'string', "-100%"],
        ['axis', '山峰图坐标轴显示', 'object', "{show:true}"],
        ['gradientColor', '线性渐变', 'array', "无"],
        ['xAxisLine', '设置x轴样式(建议使用xAxis.line)', 'object', "见详情"],
        ['xAxisLabelRotate', 'x轴label旋转角度(建议使用xAxis.labelRotate)', 'number', "无"],
        ['xAxisInterval', '配置x轴label间距(建议使用xAxis.interval)', 'number | function', "0"],
        ['xAxisFullGrid', 'x轴坐标是否顶格(建议使用xAxis.fullGrid)', 'boolean', "false"],
        ['xAxisEllipsis', 'x轴刻度文本过长展示方式(建议使用xAxis.ellipsis)', 'object', "{overflow:'none'}"],
        ['xAxisName', '配置x轴文本(建议使用xAxis.name)', 'string', "无"],
        ['yAxisName', '配置y轴文本', 'string', "无"],
        ['markLine', '配置阈值线', 'object', "无"],
        ['emphasis', '高亮状态配置', 'object', "见详情"],
    ],
    markdown: [
        themeMd,
        colorMd,
        tipHtmlMd,
        xAxisMd,
        yAxisMd,
        eventMd,
        dataMd,
        chartPaddingMd,
        opacityMd,
        textMd,
        coincideMd,
        axisMd,
        gradientColorMd,
        xAxisLineMd,
        xAxisLabelRotateMd,
        xAxisIntervalMd,
        xAxisFullGridMd,
        xAxisEllipsis,
        xAxisNameMd,
        yAxisNameMd,
        markLineMd,
        emphasisMd
    ],
};


export default data;