import { themeMd, theme } from '../common/theme'
import {  padding } from '../common/padding'
import { colorMd, color } from '../common/color'
import { legendMd, legend } from '../common/legend'
import { dataZoomMd, dataZoom } from '../common/dataZoom'
import { eventMd, event } from '../common/event'
import paddingMd from './padding.md?raw'
import maMd from './ma.md?raw'
import volumeMd from './volume.md?raw'
import dataMd from './data.md?raw'
import upColorMd from './upColor.md?raw'
import downColorMd from './downColor.md?raw'
const data = {
    dataset: [
        theme,
        color,
        padding,
        legend,
        dataZoom,
        event,
        ['MA', 'k线图的MA数据均线', 'array', '无'],
        ['volume', '显示volume数据', 'boolean', '无'],
        ['data', '图表数据(必填)', 'array', '无'],
        ['upColor', '上行数据颜色', 'string', '错误主题色'],
        ['downColor', '下行数据颜色', 'string', '成功主题色'],
    ],
    markdown: [
        themeMd,
        colorMd,
        paddingMd,
        legendMd,
        dataZoomMd,
        eventMd,
        maMd,
        volumeMd,
        dataMd,
        upColorMd,
        downColorMd,
    ],
};


export default data;