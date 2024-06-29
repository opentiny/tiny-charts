import { themeMd, theme } from '../common/theme';
import distanceMd from './distance.md?raw';
import isLinkMd from './isLink.md?raw';
import ratioMd from './ratio.md?raw';
import overAllMd from './overAll.md?raw';
import dataMd from './data.md?raw';
import renderMd from './render.md?raw';
import toolTipMd from './toolTip.md?raw';
import scaleAdaptiveMd from './scaleAdaptive.md?raw';

const data = {
  dataset: [
    theme,
    ['distance', '对不同视口下设置主网关外环容器右侧距离从网关圆心的最小距离(见详情)', 'object', '见详情'],
    // ['ratio', '对不同视口下的递归生成的点击设置尺寸比例', 'object', '见详情'],
    ['isLink', '根网关容器的右侧是否预留一个占位', 'boolean', 'false'],
    ['overAll', '是否为全局视口', 'boolean', 'true'],
    ['data', '图表数据', 'array', '无'],
    ['render', '图表的自定义渲染', 'function', '见：SnowFlakeChart/defaultOption.js'],
    ['toolTip', '全网视口下，叶子节点和其外环容器的悬浮提示框', 'function', '见：SnowFlakeChart/defaultOption.js'],
    ['scaleAdaptive', '家庭视口下，drag的不同缩放值会产生不同的视图（且首次进入家庭视口，会开启自适应缩放功能）', 'boolean', 'false']
  ],
  markdown: [
    themeMd,
    distanceMd,
    // ratioMd,
    isLinkMd,
    overAllMd,
    dataMd,
    renderMd,
    toolTipMd,
    scaleAdaptiveMd
  ]
};

export default data;

