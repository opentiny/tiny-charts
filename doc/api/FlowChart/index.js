import dataMd from './data.md?raw';
import vGapMd from './vGap.md?raw';
import hGapMd from './hGap.md?raw';
import renderMd from './render.md?raw';
import directionMd from './direction.md?raw';
import lineStyleMd from './lineStyle.md?raw';
import renderBorderMd from './renderBorder.md?raw';
import positionMd from './position.md?raw';

const data = {
    dataset: [
        ['data', '图表数据', 'object', '无'],
        ['vGap', '节点之间纵向最小距离', 'number', '50'],
        ['hGap', '节点之间横向最小距离', 'number', '50'],
        ['render', '每个节点的DOM', 'function', '无'],
        ['direction', '流程图布局方向', 'string', 'H'],
        ['lineStyle', '连线样式', 'object', '无'],
        ['renderBorder', '节点划分区域', 'function', '无'],
        ['position', '图表位置', 'object', '无'],
    ],
    markdown: [
        dataMd,
        vGapMd,
        hGapMd,
        renderMd,
        directionMd,
        lineStyleMd,
        renderBorderMd,
        positionMd
    ],
};


export default data;