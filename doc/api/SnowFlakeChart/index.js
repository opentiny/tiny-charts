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
import { themeMd, theme } from '../common/theme';
import distanceMd from './distance.md?raw';
import isLinkMd from './isLink.md?raw';
import scaleMd from './scale.md?raw';
import overAllMd from './overAll.md?raw';
import dataMd from './data.md?raw';
import renderMd from './render.md?raw';

const data = {
  dataset: [
    theme,
    ['distance', '设置网关容器之间的距离', 'string', '100%'],
    ['isLink', '根网关容器的右侧是否预留一个占位', 'boolean', 'false'],
    ['scale', '递归生成的网关容器的缩放比例', 'number', '1'],
    ['overAll', '是否为全局视口', 'boolean', 'true'],
    ['data', '图表数据', 'array', '无'],
    ['render', '图表的自定义渲染', 'function', 'SnowFlakeChart/defaultOption.js']
  ],
  markdown: [
    themeMd,
    distanceMd,
    isLinkMd,
    scaleMd,
    overAllMd,
    dataMd,
    renderMd
  ]
};

export default data;

