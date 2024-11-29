import { themeMd, theme } from '../common/theme';
import { colorMd, color } from '../common/color';
import { legendMd, legend } from '../common/legend';
import { paddingMd, padding } from '../common/padding';
import { tooltipMd, tooltip } from '../common/tooltip';
import { eventMd, event } from '../common/event';
import dataMd from './data.md?raw';
import widthMd from './width.md?raw';
import heightMd from './height.md?raw';
import depthWidthMd from './depthWidth.md?raw';
import backgroundMd from './background.md?raw';
import marginWidthMd from './marginWidth.md?raw';
import nodeSpaceMd from './nodeSpace.md?raw';
import scaleBarMd from './scaleBar.md?raw';
import smoothingCurvesMd from './smoothingCurves.md?raw';
import offsetYMd from './offsetY.md?raw';
import statusColorMd from './statusColor.md?raw';

const data = {
  dataset: [
    ['data', '图表数据', 'object', '无'],
    ['depthWidth', '每一阶级的宽度', 'array', '[\'25%\', \'50%\', \'25%\']'],
    ['background', '节点的颜色', 'string', '#0067D1'],
    ['width', '图表的宽度', 'number', '和容器一样宽'],
    ['height', '图表的高度', 'number', '和容器一样高'],
    ['marginWidth', '节点前后的间距', 'array', '见详情'],
    ['nodeSpace', '节点的垂直间隙', 'number', '40'],
    ['offsetY', '图表的偏移距离', 'number', '0'],
    ['scaleBar', '比例尺', 'number', '8'],
    ['smoothingCurves', '是否启用等宽曲线', 'boolean', 'false'],
    ['statusColor', '节点内部子节点的状态颜色', 'object', '无'],
  ],
  markdown: [
    dataMd,
    depthWidthMd,
    backgroundMd,
    widthMd,
    heightMd,
    marginWidthMd,
    nodeSpaceMd,
    offsetYMd,
    scaleBarMd,
    smoothingCurvesMd,
    statusColorMd,
  ],
};

export default data;
