import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { eventMd, event } from '../common/event';
import typeMd from './type.md?raw';
import positionMd from './position.md?raw';
import distanceMd from './distance.md?raw';
import { legendMd, legend } from '../common/legend';
import { tooltipMd, tooltip } from '../common/tooltip';
import dataMd from './data.md?raw';
import textStyleMd from './textStyle.md?raw';
import sortTypeMd from './sortType.md?raw';

const data = {
  dataset: [
    theme,
    color,
    event,
    ['type', '图表类型', 'string', '见详情'],
    ['position(旧属性chartPosition已废弃兼容)', '设置图表的位置及半径大小', 'object', '{center: [\'50%\',\'50%\'] , radius : \'80%\'}'],
    ['distance', '设置气泡之间的距离', 'number', '由type决定'],
    legend,
    tooltip,
    ['data', '图表数据', 'array', '见详情，(必填)'],
    ['textStyle', '文本样式', 'object', '见详情'],
    ['sortType', '球节点排布顺序(默认：降序，中心向外球尺寸依次减小)', 'string', 'decline']
  ],
  markdown: [
    themeMd,
    colorMd,
    eventMd,
    typeMd,
    positionMd,
    distanceMd,
    legendMd,
    tooltipMd,
    dataMd,
    textStyleMd,
    sortTypeMd
  ],
};


export default data;