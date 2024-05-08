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
import tipHtmlMd from './tipHtml.md?raw'
import dataMd from './data.md?raw'
import renderMd from './render.md?raw'
import layoutMd from './layout.md?raw'
import vGapMd from './vGap.md?raw'
import hGapMd from './hGap.md?raw'
import paddingMd from './padding.md?raw'

const data = {
    dataset: [
        theme,
        ['padding', '图表内边距', 'string', '0px'],
        ['data', '图表数据', 'array', '无'],
        ['layout', '布局类型', 'string', 'common'],
        ['render', '每个节点的DOM', 'function', '无'],
        ['tipHtml', '提示框配置', 'function', '无'],
        ['vGap', '垂直方向间距', 'number', '0'],
        ['hGap', '水平方向间距', 'number', '8'],
    ],
    markdown: [
        themeMd,
        paddingMd,
        dataMd,
        layoutMd,
        renderMd,
        tipHtmlMd,
        vGapMd,
        hGapMd,
    ],
};


export default data;