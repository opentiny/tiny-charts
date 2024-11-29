import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tooltipMd, tooltip } from '../common/tooltip';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import positionMd from './position.md?raw';
import itemStyleMd from './itemStyle.md?raw';

const data = {
    dataset: [
        theme,
        color,
        legend,
        tooltip,
        event,
        ['data', '图表数据', 'array', '无'],
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
        positionMd,
        itemStyleMd
    ],
};


export default data;