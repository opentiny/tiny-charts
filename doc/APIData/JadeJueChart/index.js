import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { paddingMd, padding } from '../common/padding';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { titleMd, title } from '../common/title';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import positionMd from './position.md?raw';
import maxMd from './max.md?raw';
import startAngleMd from './startAngle.md?raw';
import labelAlignMd from './labelAlign.md?raw';
import fillMd from './fill.md?raw';
import showBackgroundMd from './showBackground.md?raw';
import roundCapMd from './roundCap.md?raw';
import barWidthMd from './barWidth?raw';
import barMinRatioMd from './barMinRatio?raw';
import { angleAxis, angleAxisMd } from '../common/angleAxis';
import { radiusAxis, radiusAxisMd } from '../common/radiusAxis';

var data = {
    dataset: [
        theme,
        color,
        title,
        tipHtml,
        legend,
        ['data', '图表数据', 'array', "无"],
        ['position', '图表位置及大小', 'object', "{center:['50%','50%'],radius:['20%','60%']}"],
        ['max', '自定义最大值', 'number', "无"],
        ['startAngle', '玉玦图的起始角度', 'number', "90"],
        ['labelAlign', '玉玦图的起点与文本位置', 'string', "right"],
        ['fill', '将视图由3/4圆调整为整圆', 'boolean', "false"],
        ['showBackground', '是否展示柱条背景样式', 'boolean', "由data类型决定"],
        ['roundCap', '是否展示柱条两侧圆弧效果', 'boolean', "由data类型决定"],
        ['barWidth', '设置柱条的显示宽度', 'number', "8"],
        ['barMinRatio', '设置数据的最小百分比占比', 'number', "无"],
        angleAxis,
        radiusAxis,
        event

    ],
    markdown: [
        themeMd,
        colorMd,
        titleMd,
        tipHtmlMd,
        legendMd,
        dataMd,
        positionMd,
        maxMd,
        startAngleMd,
        labelAlignMd,
        fillMd,
        showBackgroundMd,
        roundCapMd,
        barWidthMd,
        barMinRatioMd,
        angleAxisMd,
        radiusAxisMd,
        eventMd
    ],
};


export default data;