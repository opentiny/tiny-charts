import nameMd from './name.md?raw';
import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { eventMd, event } from '../common/event';
import gridMd from './grid.md?raw';
import itemStyleMd from './itemStyle.md?raw';
import lineStyleMd from './lineStyle.md?raw';
import areaStyleMd from './areaStyle.md?raw';
import dataMd from './data.md?raw';
import xAxisMd from './xAxis.md?raw';
import yAxisMd from './yAxis.md?raw';

var data = {
    dataset: [
        ['name', '图表名称', 'string', '见详情'],
        theme,
        ['color', '颜色（双向面积图仅支持16进制颜色）', 'array | string', '随主题'],
        legend,
        tipHtml,
        event,
        ['grid', '设置双向面积图的位置、宽高样式', 'array', '见详情'],
        ['itemStyle', '设置双向面积图数据点样式', 'object', '见详情'],
        ['lineStyle', '设置双向面积图线条样式', 'object', '见详情'],
        ['areaStyle', '设置双向面积图面积区域样式', 'array', '见详情'],
        ['data', '配置数据', 'array', '无'],
        ['xAxis', '设置双向面积图的x轴样式', 'array', '见详情'],
        ['yAxis', '设置双向面积图的y轴样式', 'array', '见详情'],
    ],
    markdown: [
        nameMd,
        themeMd,
        colorMd,
        legendMd,
        tipHtmlMd,
        eventMd,
        gridMd,
        itemStyleMd,
        lineStyleMd,
        areaStyleMd,
        dataMd,
        xAxisMd,
        yAxisMd
    ]
};

export default data;