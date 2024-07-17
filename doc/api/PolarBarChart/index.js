import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tooltipMd, tooltip } from '../common/tooltip';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import positionMd from './position.md?raw';
import labelMd from './label.md?raw';
import typeMd from './type.md?raw';

const data = {
    dataset: [
        event,
        ['data', '图表数据', 'array', '无'],
        ['position', '图表位置及大小', 'object', '{center:[\'50%\',\'50%\'],radius: \'[\'8%\',\'70%\']\'}'],
        ['label', '角度轴坐标文本', 'object', '默认显示'],
        theme,
        color,
        ['legend','图例配置','object','默认显示(扇面图不可配)'],
        tooltip,
        ['type', '图表类型', 'string', 'normal'],

    ],
    markdown: [
        eventMd,
        dataMd,
        positionMd,
        labelMd,
        themeMd,
        colorMd,
        legendMd,
        tooltipMd,
        typeMd,
    ],
};


export default data;