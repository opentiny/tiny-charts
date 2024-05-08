/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { themeMd, theme } from '../common/theme'
import dataMd from './data.md?raw'
import currentMd from './current.md?raw'
import lineMd from './line.md?raw'
import renderMd from './render.md?raw'
import tooltipMd from './tooltip.md?raw'
import onClickMd from './click.md?raw'
import layoutMd from './layout.md?raw'
import alignmentMd from './alignment.md?raw'
import itemStyleMd from './itemStyle.md?raw'
import assignMd from './assign.md?raw'

const data = {
    dataset: [
        theme,
        ['data', '图表数据(必填)', 'object', '无'],
        ['current', '当前时间点位置', 'object', '{text: \'今天\',icon: \'./image/MilestoneChart/current-bg.png\',date: 1680534000}'],
        ['line', '是否需要引线(必填)', 'str', 'true'],
        ['layout', '文字上下排版方式(必填)', 'string', 'down'],
        ['alignment', '左右对齐方式(必填)', 'string', 'left'],
        ['itemStyle', '节点样式(必填)', 'object', '{iconSize: 16,maxHeight: 120,maxWidth: 160}'],
        ['assign', '节点排布方式(必填)', 'string', 'average'],
        ['render', '节点渲染回调', 'function', '无'],
        ['tooltip', '悬浮提示回调', 'function', '无'],
        ['onClick', '点击事件回调', 'function', '无'],
    ],
    markdown: [
        themeMd,
        dataMd,
        currentMd,
        lineMd,
        layoutMd,
        alignmentMd,
        itemStyleMd,
        assignMd,
        renderMd,
        tooltipMd,
        onClickMd
    ],
};


export default data;