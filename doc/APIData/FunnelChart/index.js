import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import dataMd from './data.md?raw'
import seriesMd from './series.md?raw'
import sortMd from './sort.md?raw'
import sizeMd from './size.md?raw'
import positionMd from './position.md?raw'
import legendMd from './legend.md?raw'
import labelMd from './label.md?raw'
import gapMd from './gap.md?raw'

var data = {
  dataset: [
    theme,
    color,
    tipHtml,
    ['legend', '图例配置', 'object', "默认显示"],
    ['gap', '数据图形间距', 'number', "10"],
    ['sort', '图表排序方式', 'string', "descending"],
    ['size', '图表大小', 'object', "默认显示"],
    ['position', '图表位置', 'object', "默认显示"],
    ['label', '图表文本', 'object', "默认显示"],
    ['data', '图表数据', 'array', "无"],
    ['series', '图表series', 'object', "无"],

  ],
  markdown: [
    themeMd,
    colorMd,
    tipHtmlMd,
    legendMd,
    gapMd,
    sortMd,
    sizeMd,
    positionMd,
    labelMd,
    dataMd,
    seriesMd,
  ],
};


export default data;