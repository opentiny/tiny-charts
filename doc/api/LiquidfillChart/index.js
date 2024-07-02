import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import dataMd from './data.md?raw'
import seriesMd from './series.md?raw'
import backgroundStyleMd from './backgroundStyle.md?raw'
import outlineMd from './outline.md?raw'
import labelMd from './label.md?raw'
import shapeMd from './shape.md?raw'
import waveAnimationMd from './waveAnimation.md?raw'

const data = {
  dataset: [
    theme,
    color,
    tipHtml,
    ['waveAnimation', '图表动画', 'boolean', 'true'],
    ['backgroundStyle', '图表背景配置', 'object', '默认显示'],
    ['shape', '图表形状', 'string', '默认显示'],
    ['outline', '图表外框配置', 'object', '默认显示'],
    ['label', '图表文本', 'object', '默认显示'],
    ['data', '图表数据', 'array', '无'],
    ['series', '图表series', 'object', '无'],

  ],
  markdown: [
    themeMd,
    colorMd,
    tipHtmlMd,
    waveAnimationMd,
    backgroundStyleMd,
    shapeMd,
    outlineMd,
    labelMd,
    dataMd,
    seriesMd,
  ],
};


export default data;