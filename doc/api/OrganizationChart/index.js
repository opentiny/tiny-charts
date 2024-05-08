/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import dataMd from './data.md?raw';
import renderMd from './render.md?raw';
import radiusMd from './radius.md?raw';
import selectedMd from './selected.md?raw';
import positionMd from './position.md?raw';
import lineStyleMd from './lineStyle.md?raw';
import autoRotateMd from './autorotate.md?raw';

const data = {
    dataset: [
        ['data', '图表数据(必填)', 'object', '无'],
        ['radius', '圆环形态(必填)', 'object', '无'],
        ['position', '图表位置', 'object', '无'],
        ['autoRotate', '自动旋转', 'object', '无'],
        ['lineStyle', '圆环线条样式', 'object', '无'],
        ['render', '节点渲染回调(必填)', 'function', '无'],
        ['selected', '初始化节点选中下标', 'array', '无'],
    ],
    markdown: [
        dataMd,
        radiusMd,
        positionMd,
        autoRotateMd,
        lineStyleMd,
        renderMd,
        selectedMd
    ],
};


export default data;