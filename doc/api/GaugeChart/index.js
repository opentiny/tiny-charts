import { themeMd, theme } from '../common/theme'
import { colorMd, color } from '../common/color'
import { tipHtmlMd, tipHtml } from '../common/tipHtml'
import { tipHtmlStyleMd, tipHtmlStyle } from '../common/tipHtmlStyle'
import { eventMd, event } from '../common/event'
import dataMd from './data.md?raw'
import positionMd from './position.md?raw'
import pointerMd from './pointer.md?raw'
import minMd from './min.md?raw'
import maxMd from './max.md?raw'
import textMd from './text.md?raw'
import startAngleMd from './startAngle.md?raw'
import endAngleMd from './endAngle.md?raw'
import splitColorMd from './splitColor.md?raw'
import splitNumberMd from './splitNumber.md?raw'
import splitLineMd from './splitLine.md?raw'
import markLineMd from './markLine.md?raw'
import gradientColorMd from './gradientColor.md?raw'
import itemStyleMd from './itemStyle.md?raw'
import axisLabelStyleMd from './axisLabelStyle.md?raw'
import pointerStyleMd from './pointerStyle.md?raw'
import maskMd from './mask.md?raw'
import orbitalColorMd from './orbitalColor.md?raw'
import silentMd from './silent.md?raw'

const data = {
    dataset: [
        theme,
        color,
        tipHtml,
        event,
        ['data', '图表数据(必填)', 'array', '[value:90, name:\'Utilization rate\']'],
        ['position', '图表位置及大小', 'object', '{center:[\'50%\',\'50%\'],radius: \'70%\'}'],
        ['pointer', '刻度指针是否显示', 'boolean', 'false'],
        ['min', '仪表盘最小刻度', 'number', '0'],
        ['max', '仪表盘最大刻度', 'number', '100'],
        ['text', '中心文本配置', 'object', '默认居中'],
        ['startAngle', '仪表盘起始角度', 'number', '225'],
        ['endAngle', '仪表盘结束角度', 'number', '-45'],
        ['splitColor', '配置分割区间及颜色', 'array', '随主题'],
        ['splitNumber', '刻度线数量配置', 'number', '4'],
        ['splitLine', '刻度线及文本配置', 'object', '默认显示'],
        ['markLine', '阈值线配置', 'number', '无'],
        ['gradientColor', '线性渐变', 'array', '无'],
        ['itemStyle', '进度条样式配置', 'object', '见详情'],
        ['axisLabelStyle', '刻度线文本样式配置', 'object', '见详情'],
        ['pointerStyle', '调整指针样式', 'object', '见详情'],
        ['mask', '外层光晕蒙层配置', 'object', '{show:false,hightLight:true}'],
        ['orbitalColor', '仪表盘的轨道颜色', 'string', '随主题'],
        ['silent', '是否关闭hover动效', 'boolean', 'false'],

    ],
    markdown: [
        themeMd,
        colorMd,
        tipHtmlMd,
        eventMd,
        dataMd,
        positionMd,
        pointerMd,
        minMd,
        maxMd,
        textMd,
        startAngleMd,
        endAngleMd,
        splitColorMd,
        splitNumberMd,
        splitLineMd,
        markLineMd,
        gradientColorMd,
        itemStyleMd,
        axisLabelStyleMd,
        pointerStyleMd,
        maskMd,
        orbitalColorMd,
        silentMd,
    ],
};


export default data;