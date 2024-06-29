import { themeMd, theme } from '../common/theme'
import { paddingMd, padding } from '../common/padding'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { xAxisMd, xAxis } from '../common/xAxis'
import { yAxisMd, yAxis } from '../common/yAxis'
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import { eventMd, event } from '../common/event'
import { linearGradientMd, linearGradient } from '../common/linearGradient'
import dataMd from '../LineChart/data.md?raw'
import itemStyleMd from '../LineChart/itemStyle.md?raw'
import smoothMd from '../LineChart/smooth.md?raw'
import predictMd from '../LineChart/predict.md?raw'
import marklineMd from '../LineChart/markline.md?raw'
import markpointMd from '../LineChart/markpoint.md?raw'
import silentMd from '../LineChart/silent.md?raw'
import stepMd from '../LineChart/step.md?raw'
import areaMd from './area.md?raw'
import splitLineMd from './splitLine.md?raw'

const data = {
    dataset: [
        theme,
        padding,
        color,
        legend,
        tipHtml,
        tipHtmlStyle,
        xAxis,
        yAxis,
        dataZoom,
        linearGradient,
        event,
        ['data', '图表数据(必填)', 'array', '无'],
        ['area', '面积图是否更改为折线图', 'boolean', 'false'],
        ['splitLine', '分割线配置', 'boolean', '默认不显示'],
        ['itemStyle', '图表数据点文本样式', 'object', '{symbolSize:20,borderColor:\'#fff\'}'],
        ['smooth', '折线是否更改为曲线', 'boolean', 'false'],
        ['silent', '是否关闭hover动效', 'boolean', 'false'],
        ['step', '折线是否更改为阶梯线', 'boolean', 'false'],
        ['predict', '折线更改为预测线的数据名', 'string', '无'],
        ['markline', '阈值线配置', 'object', '无'],
        ['markPoint', '峰值标记', 'object', '{max:false,min:false}'],
    ],
    markdown: [
        themeMd,
        paddingMd,
        colorMd,
        legendMd,
        tipHtmlMd,
        tipHtmlStyleMd,
        xAxisMd,
        yAxisMd,
        dataZoomMd,
        linearGradientMd,
        eventMd,
        dataMd,
        areaMd,
        splitLineMd,
        itemStyleMd,
        smoothMd,
        silentMd,
        stepMd,
        predictMd,
        marklineMd,
        markpointMd,
    ],
};


export default data;