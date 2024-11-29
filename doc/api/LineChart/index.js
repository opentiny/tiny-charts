import { themeMd, theme } from '../common/theme'
import { paddingMd, padding } from '../common/padding'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { tooltipMd, tooltip } from '../common/tooltip'
import { xAxisMd, xAxis } from '../common/xAxis'
import { yAxisMd, yAxis } from '../common/yAxis'
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import itemStyleMd from './itemStyle.md?raw'
import smoothMd from './smooth.md?raw'
import predictMd from './predict.md?raw'
import marklineMd from './markline.md?raw'
import markpointMd from './markpoint.md?raw'
import silentMd from './silent.md?raw'
import stepMd from './step.md?raw'

const data = {
    dataset: [
        theme,
        color,
        padding,
        legend,
        ['smooth', '折线是否更改为曲线', 'boolean', 'false'],
        ['silent', '是否关闭hover动效', 'boolean', 'false'],
        ['data', '图表数据(必填)', 'array', '无'],
        ['itemStyle', '图表数据点文本样式', 'object', '{symbolSize:20,borderColor:\'#fff\'}'],
        ['step', '折线是否更改为阶梯线', 'boolean', 'false'],
        ['predict', '折线更改为预测线的数据名', 'string', '无'],
        tooltip,
        xAxis,
        yAxis,
        dataZoom,
        event,
        ['markline', '阈值线配置', 'object', '无'],
        ['markPoint', '峰值标记', 'object', '{max:false,min:false}'],
    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        legendMd,
        smoothMd,
        silentMd,
        dataMd,
        itemStyleMd,
        stepMd,
        predictMd,
        tooltipMd,
        xAxisMd,
        yAxisMd,
        dataZoomMd,
        eventMd,
        marklineMd,
        markpointMd,
    ],
};
export default data;