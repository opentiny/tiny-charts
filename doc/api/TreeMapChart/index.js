import { themeMd, theme } from '../common/theme';
import { paddingMd, padding } from '../common/padding';
import { colorMd, color } from '../common/color';
import { tipHtmlMd, tipHtml } from '../common/tipHtml';
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import roamMd from './roam.md?raw';
import labelMd from './label.md?raw';
import titleMd from './title.md?raw';

const data = {
  dataset: [
    theme,
    color,
    padding,
    tipHtml,
    tipHtmlStyle,
    event,
    ['data', '图表数据(必填)', 'array', '无'],
    ['roam', '是否开启移动和缩放', 'boolean | string', 'false'],
    ['label', '自定义lable标签样式', 'object', '无'],
    ['title', '图表标题样式', 'object', '无'],
  ],
  markdown: [
    themeMd,
    colorMd,
    paddingMd,
    tipHtmlMd,
    tipHtmlStyleMd,
    eventMd,
    dataMd,
    roamMd,
    labelMd,
    titleMd
  ],
};

export default data;
