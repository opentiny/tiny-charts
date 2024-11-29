import { themeMd, theme } from '../common/theme';
import { paddingMd, padding } from '../common/padding';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { tooltipMd, tooltip } from '../common/tooltip';
import { xAxisMd, xAxis } from '../common/xAxis';
import { yAxisMd, yAxis } from '../common/yAxis';
import { dataZoomMd, dataZoom } from '../common/dataZoom';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import symbolSizeMd from './symbolSize.md?raw';
import markLineMd from './markPoint.md?raw';

const data = {
  dataset: [
    event,
    ['data', '图表数据(必填)', 'object', '无'],
    ['symbolSize', '图表数据点文本样式', 'number', 12],
    ['markPoint', '设置阈值红点', 'object', '无'],
    theme,
    color,
    xAxis,
    padding,
    legend,
    tooltip,
    yAxis,
    dataZoom,
  ],
  markdown: [
    eventMd,
    dataMd,
    symbolSizeMd,
    markLineMd,
    themeMd,
    colorMd,
    xAxisMd,
    paddingMd,
    legendMd,
    tooltipMd,
    yAxisMd,
    dataZoomMd,
  ],
};

export default data;
