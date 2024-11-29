import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { paddingMd, padding } from '../common/padding';
import { tooltipMd, tooltip } from '../common/tooltip';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import draggableMd from './draggable.md?raw';
import widthSpaceMd from './widthSpace.md?raw';
import orientMd from './orient.md?raw';
import nodeAlignMd from './nodeAlign.md?raw';
import echartsMd from './echarts.md?raw';
import sortTypeMd from './sortType.md?raw';
import emptyStatusMd from './emptyStatus.md?raw';
import labelMd from './label.md?raw';
import itemStyleMd from './itemStyle.md?raw';
import lineStyleMd from './lineStyle.md?raw';

const data = {
    dataset: [
        theme,
        color,
        ['padding', '图表内边距值', 'array', '根据文本长度自适应'],
        tooltip,
        ['data', '图表数据', 'object', '无'],
        ['draggable', '页面节点是否可拖动', 'boolean', 'true'],
        ['widthSpace', '节点矩形样式配置', 'array', '[10,30]'],
        // ['orient', '图表方向', 'string', 'horizontal'],
        ['nodeAlign', '桑基图中节点的对齐方式', 'string', 'justify'],
        ['label', '节点矩形中文本标签的样式', 'object', '见详情'],
        ['itemStyle', '节点矩形的样式', 'object', '见详情'],
        ['lineStyle', '节点矩形连接带的样式', 'object', '见详情'],
        ['sortType', '每列数据的排序方式', 'string', 'unset'],
        ['emptyStatus', '空节点的展示状态', 'string', 'node'],
        ['series', 'echarts原生属性', 'array', '见详情'],
        ['grid', 'echarts原生属性', 'object', '见详情'],
        ['xAxis', 'echarts原生属性', 'array', '见详情'],
        ['yAxis', 'echarts原生属性', 'object', '见详情'],
        ['tooltip', 'echarts原生属性', 'object', '见详情'],
        ['title', 'echarts原生属性', 'object', '见详情']
    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        tooltipMd,
        dataMd,
        draggableMd,
        widthSpaceMd,
        // orientMd,
        nodeAlignMd,
        labelMd,
        itemStyleMd,
        lineStyleMd,
        sortTypeMd,
        emptyStatusMd,
        echartsMd,
        echartsMd,
        echartsMd,
        echartsMd,
        echartsMd,
        echartsMd
    ],
};


export default data;