import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { eventMd, event } from '../common/event';
import typeMd from './type.md?raw';
import chartPositionMd from './chartPosition.md?raw';
import distanceMd from './distance.md?raw';
import { legendMd, legend } from '../common/legend';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import dataMd from './data.md?raw'

var data = {
  dataset: [
    theme,
    color,
    event,
    ['type', '图表类型', 'string', "无，(必填)"],
    ['chartPosition', '设置图表的位置及半径大小', 'object', "{center: ['50%','50%'] , radius : '80%'}"],
    ['distance', '设置气泡之间的距离', 'number', "50"],
    legend,
    tipHtml,
    ['data','图表数据','array','见详情，(必填)']
  ],
  markdown: [
    themeMd,
    colorMd,
    eventMd,
    typeMd,
    chartPositionMd,
    distanceMd,
    legendMd,
    tipHtmlMd,
    dataMd
  ],
};


export default data;