import { themeMd, theme } from '../common/theme';
import { paddingMd, padding } from '../common/padding';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle';
import { xAxisMd, xAxis } from '../common/xAxis';
import { yAxisMd, yAxis } from '../common/yAxis';
import { eventMd, event } from '../common/event';
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import dataMd from './data.md?raw';
import itemStyleMd from './itemStyle.md?raw'
import markLineMd from './markLine.md?raw'
import backgroundMd from './background.md?raw'
import labelMd from './label.md?raw'
import directionMd from './label.md?raw'

const data = {
  dataset: [
    theme,
    event,
    xAxis,
    yAxis,
    legend,
    padding,
    color,
    tipHtml,
    tipHtmlStyle,
    dataZoom,
    ['itemStyle', '柱体样式', 'object', '{barWidth:16,backgroundWidth:\'32\'}'],
    ['data', '图表数据(必填)', 'array', '无'],
    ['markLine', '阈值线配置(必填)', 'object', '默认显示'],
    ['background', '背景配置', 'array', '默认显示'],
    ['label', '柱体文本', 'object | array', '默认不显示'],
    ['direction', '柱体方向', 'string', 'vertical'],
    
  ],
  markdown: [
    themeMd,
    eventMd,
    xAxisMd,
    yAxisMd,
    legendMd,
    paddingMd,
    colorMd,
    tipHtmlMd,
    tipHtmlStyleMd,
    dataZoomMd,
    itemStyleMd,
    dataMd,
    markLineMd,
    backgroundMd,
    labelMd,
    directionMd
  ],
};

export default data;
