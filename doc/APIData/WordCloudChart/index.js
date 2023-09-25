import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { paddingMd, padding } from '../common/padding'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import gridSizeMd from './gridSize.md?raw'
import sizeRangeMd from './sizeRange.md?raw'
import rotationRangeMd from './rotationRange.md?raw'
import rotationStepMd from './rotationStep.md?raw'
import shapeMd from './shape.md?raw'
import widthMd from './width.md?raw'
import heightMd from './height.md?raw'
import maskImageMd from './maskImage.md?raw'
import textColorMd from './textColor.md?raw'


var data = {
    dataset: [
        theme,
        color,
        tipHtml,
        ['data', '图表数据', 'array', "无"],
        ['gridSize', '词云图文本间距', 'number', "16"],
        ['sizeRange', '字体范围', 'array', "[14,60]"],
        ['rotationRange', '文字旋转范围', 'array', "[0,0]"],
        ['rotationStep', '文字旋转步值', 'number', "0"],
        ['shape', '词云图形状', 'string', "circle"],
        ['width', '词云图宽度', 'string', "75%"],
        ['height', '词云图高度', 'string', "80%"],
        ['maskImage', '词云图形状图片配置', 'string', "无"],
        ['textColor', '词云图文本颜色', 'function', "无"],

    ],
    markdown: [
        themeMd,
        colorMd,
        tipHtmlMd,
        dataMd,
        gridSizeMd,
        sizeRangeMd,
        rotationRangeMd,
        rotationStepMd,
        shapeMd,
        widthMd,
        heightMd,
        maskImageMd,
        textColorMd,
    ],
};


export default data;