import dataMd from './data.md?raw';
import vGapMd from './vGap.md?raw';
import hGapMd from './hGap.md?raw';
import slientMd from './slient.md?raw';
import renderMd from './render.md?raw';
import directionMd from './direction.md?raw';
import lineStyleMd from './lineStyle.md?raw';

var data = {
    dataset: [
        ['data', '图表数据', 'object', "无"],
        ['vGap', '节点之间纵向最小距离', 'number', "50"],
        ['hGap', '节点之间横向最小距离', 'number', "50"],
        ['slient', '节点是否可被鼠标拖拽', 'boolean', "false"],
        ['render', '每个节点的DOM', 'function', "无"],
        ['direction', '流程图布局方向', 'string', "H"],
        ['lineStyle', '连线样式', 'object', "无"],
    ],
    markdown: [
        dataMd,
        vGapMd,
        hGapMd,
        slientMd,
        renderMd,
        lineStyleMd
    ],
};


export default data;