import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tooltipMd, tooltip } from '../common/tooltip';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import positionMd from './position.md?raw';
import itemStyleMd from './itemStyle.md?raw';
import markLineMd from './markLine.md?raw';
import maxMd from './max.md?raw';

const data = {
    dataset: [
        theme,
        color,
        legend,
        tooltip,
        event,
        ['data', '图表数据', 'array', '无'],
        ['markLine', '阈值线', 'object', '无'],
        ['max', '最大值', 'number', '100'],
        ['position', '图表位置及大小', 'object', '{center:[\'50%\',\'50%\'],radius: \'[\'44%\',\'50%\']\'}'],
        ['itemStyle', '图形样式', 'object', '无']
    ],
    markdown: [
        themeMd,
        colorMd,
        legendMd,
        tooltipMd,
        eventMd,
        dataMd,
        markLineMd,
        maxMd,
        positionMd,
        itemStyleMd
    ],
};


export default data;