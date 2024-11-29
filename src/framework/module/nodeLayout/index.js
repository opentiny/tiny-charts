/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import nonLayeredTidyTree from './nonLayeredTidyTree';
import grid from './grid';
import circle from './circle';
import linearArc from './linearArc';
import customize from './customize';
import defaults from './defaults'


export default {
    'mindmap': nonLayeredTidyTree,
    'grid': grid,
    'circle': circle,
    'linearArc': linearArc,
    'customize': customize,
    'defaults': defaults
}