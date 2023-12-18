import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { paddingMd, padding } from '../common/padding';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import bubbleSizeMd from './bubbleSize.md?raw';
import trendLineConfigMd from './trendLineConfig.md?raw';
import xAxisNameMd from '../special/xAxisName.md?raw';
import yAxisNameMd from '../special/yAxisName.md?raw';
import xAxisMd from '../special/xAxis.md?raw';
import xAxisLineMd from '../special/xAxisLine.md?raw';
import xAxisLabelRotateMd from '../special/xAxisLabelRotate.md?raw';
import xAxisIntervalMd from '../special/xAxisInterval.md?raw';
import xAxisFullGridMd from '../special/xAxisFullGrid.md?raw';
import xAxisTypeMd from './xAxisType.md?raw';
import symbolMd from './symbol.md?raw';
import symbolRotateMd from './symbolRotate.md?raw';
import symbolOffsetMd from './symbolOffset.md?raw';
import cursorMd from './cursor.md?raw';
import echartsMd from './echarts.md?raw';

var data = {
    dataset: [
        theme,
        color,
        padding,
        tipHtml,
        event,
        ['data', '图表数据', 'array', "无"],
        ['bubbleSize', '气泡大小范围', 'array', "[10, 70]"],
        ['trendLineConfig', '配置趋势线', 'object', "无"],
        ['xAxis', '配置x轴坐标数据', 'object', "默认显示"],
        ['xAxisLine', '设置x轴样式(建议使用xAxis.line)', 'object', "默认显示"],
        ['xAxisLabelRotate', 'x轴label旋转角度(建议使用xAxis.labelRotate)', 'number', "无"],
        ['xAxisInterval', '配置x轴label间距(建议使用xAxis.interval)', 'number | function', "0"],
        ['xAxisFullGrid', 'x轴坐标是否顶格(建议使用xAxis.fullGrid)', 'boolean', "false"],
        ['xAxisName', '配置x轴文本(建议使用xAxis.name)', 'string', "无"],
        ['yAxisName', '配置y轴文本', 'string', "无"],
        ['xAxisType', 'x轴类型', 'string', '自适应'],
        ['symbol', '节点图形类型', 'string', 'circle'],
        ['symbolRotate', '节点图形旋转角度', 'number', '0'],
        ['symbolOffset', '节点图形偏移值', 'array', '[0,0]'],
        ['cursor', '鼠标悬浮在节点图形的样式', 'string', 'pointer'],
        ['label', '节点图形的文本样式', 'object', '见详情'],
        ['itemStyle', '节点图形的样式', 'object', '见详情'],
        ['emphasis', '高亮的图形和标签样式', 'object', '见详情']
    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        tipHtmlMd,
        eventMd,
        dataMd,
        bubbleSizeMd,
        trendLineConfigMd,
        xAxisMd,
        xAxisLineMd,
        xAxisLabelRotateMd,
        xAxisIntervalMd,
        xAxisFullGridMd,
        xAxisNameMd,
        yAxisNameMd,
        xAxisTypeMd,
        symbolMd,
        symbolRotateMd,
        symbolOffsetMd,
        cursorMd,
        echartsMd,
        echartsMd,
        echartsMd
    ],
};


export default data;