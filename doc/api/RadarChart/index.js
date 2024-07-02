import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle';
import { titleMd, title } from '../common/title';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import positionMd from './position.md?raw';
import markLineMd from './markLine.md?raw';
import radarMaxMd from './radarMax.md?raw';
import radarMarkMd from './radarMark.md?raw';
import radarMd from './radar.md?raw';
import area from './area.md?raw'

const data = {
  dataset: [
    ['data', '图表数据(必填)', 'object', '无'],
    theme,
    color,
    title,
    legend,
    tipHtml,
    ['markLine', '阈值线配置', 'number | Array', '无'],
    ['radarMax', '最外圈代表的数值', 'number | Array', '坐标系的最外圈为数据中的最大值'],
    tipHtmlStyle,
    event,
    ['position', '图表位置及大小', 'object', '{center:[\'50%\',\'50%\'],radius: \'50%\'}'],
    ['radarMark', '底部坐标系刻度值显示', 'boolean', 'true'],
    ['radar', '雷达图的坐标系配置', 'Object', '无'],
    ['area', '雷达图图形区域配置', 'Object', '无'],
  ],
  markdown: [
    dataMd,
    themeMd,
    colorMd,
    titleMd,
    legendMd,
    tipHtmlMd,
    markLineMd,
    radarMaxMd,
    tipHtmlStyleMd,
    eventMd,
    positionMd,
    radarMarkMd,
    radarMd,
    area
  ],
};

export default data;
