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
import { themeMd, theme } from '../common/theme';
import typeMd from './type.md?raw';
import positionMd from './position.md?raw';
import centerDomMd from './centerDom.md?raw';
import showTerraceMd from './showTerrace.md?raw';

const data = {
    dataset: [
        theme,
        ['type', '设置梯田图的主题类型', 'string', 'health'],
        ['position', '设置梯田图的位置和大小', 'object', '{center:[\'50%\',\'50%\'],radius:[\'30%\',\'70%\'}'],
        ['centerDom', '自定义梯田图的内部dom', 'function', '无'],
        ['showTerrace', '是否显示梯田背景', 'boolean', 'true'],
    ],
    markdown: [
        themeMd,
        typeMd,
        positionMd,
        centerDomMd,
        showTerraceMd,
    ]
};
export default data;